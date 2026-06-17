"use strict";

import fs from "fs";
import path from "path";
import * as babelParser from "@babel/parser";
import { parse, ParseError } from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";

export interface AnalysisResult {
  file: string;
  relativePath: string;
  issues: Issue[];
}

export interface Issue {
  id: string;
  category: string;
  severity: "low" | "medium" | "high";
  impact: "Low" | "Medium" | "High";
  effort: "Low" | "Medium" | "High";
  blastRadius: number;
  priority: number;
  title: string;
  description: string;
  location: {
    file: string;
    line: number;
    column: number;
  };
  suggestion: {
    title: string;
    description: string;
    codeChanges: CodeChange[];
  };
}

export interface CodeChange {
  type: "add" | "remove" | "replace";
  file: string;
  oldValue?: string;
  newValue?: string;
  line?: number;
  column?: number;
}

const detectors = [
  new AnyTypeDetector(),
  new OversizedComponentDetector(),
  new DeadStateDetector(),
  new MissingDocsDetector(),
  new ConsoleLogLeakDetector(),
  new EffectDepsDetector(),
  new PropDrillingDetector(),
  new GenericNamingDetector(),
  new CircularDepsDetector(),
  new StateExplosionDetector(),
  new APIDetector(),
  new MissingErrorBoundaryDetector(),
  new MemoryLeakDetector(),
  new DuplicateLogicDetector(),
  new UnsafeCastDetector(),
];

export async function analyzeFile(filePath: string, relativePath: string): Promise<AnalysisResult> {
  const fileExt = path.extname(filePath).toLowerCase();
  const content = fs.readFileSync(filePath, "utf8");

  const issues: Issue[] = [];

  try {
    let ast: any;
    let parsedFileName: string;

    switch (fileExt) {
      case ".js":
      case ".jsx":
        ast = parse(content, {
          sourceType: "module",
          plugins: ["jsx", "classProperties", "optionalChaining", "nullishCoalescingOperator"],
        });
        parsedFileName = "javascript";
        break;
      case ".ts":
      case ".tsx":
        ast = parse(content, {
          sourceType: "module",
          plugins: ["jsx", "classProperties", "optionalChaining", "nullishCoalescingOperator", "typescript"],
        });
        parsedFileName = "typescript";
        break;
      case ".json":
        // Skip JSON files for now
        return { file: filePath, relativePath, issues: [] };
      default:
        return { file: filePath, relativePath, issues: [] };
    }

    // Import map for circular dependency detection
    const importMap = new Map<string, string[]>();

    // First pass: collect imports
    traverse(ast, {
      ImportDeclaration(path) {
        const moduleName = path.node.source.value;
        const importingFile = relativePath;

        if (!importMap.has(importingFile)) {
          importMap.set(importingFile, []);
        }
        importMap.get(importingFile)!.push(moduleName);
      },
      ExportNamedDeclaration(path) {
        const moduleName = path.node.source?.value;
        const exportingFile = relativePath;

        if (moduleName && !importMap.has(exportingFile)) {
          importMap.set(exportingFile, []);
        }
        if (moduleName) {
          importMap.get(exportingFile)!.push(moduleName);
        }
      },
    });

    // Run detectors
    for (const detector of detectors) {
      const detectorIssues = await detector.detect(ast, relativePath, importMap, parsedFileName);
      issues.push(...detectorIssues);
    }
  } catch (error) {
    if (error instanceof ParseError) {
      console.error(`Parse error in ${filePath}:", error.message`);
    } else {
      console.error(`Error analyzing ${filePath}:", error);
    }
  }

  return { file: filePath, relativePath, issues };
}

abstract class BaseDetector {
  abstract readonly category: string;
  abstract readonly title: string;
  abstract readonly description: string;

  protected calculatePriority(impact: number, blastRadius: number, effort: number): number {
    return Math.round((impact * 10 + blastRadius) / (effort === "Low" ? 1 : effort === "Medium" ? 2 : 3));
  }

  protected calculateSeverity(impact: number): "low" | "medium" | "high" {
    if (impact >= 8) return "high";
    if (impact >= 5) return "medium";
    return "low";
  }

  protected calculateImpact(description: string): "Low" | "Medium" | "High" {
    if (
      description.toLowerCase().includes("security") ||
      description.toLowerCase().includes("error") ||
      description.toLowerCase().includes("performance")
    ) {
      return "High";
    }
    if (
      description.toLowerCase().includes("quality") ||
      description.toLowerCase().includes("readability") ||
      description.toLowerCase().includes("maintainability")
    ) {
      return "Medium";
    }
    return "Low";
  }

  protected calculateEffort(complexity: number): "Low" | "Medium" | "High" {
    if (complexity <= 2) return "Low";
    if (complexity <= 5) return "Medium";
    return "High";
  }

  abstract async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]>;
}

class AnyTypeDetector extends BaseDetector {
  readonly category = "any-type";
  readonly title = "Any type usage detected";
  readonly description = "TypeScript code contains 'any' type annotations which defeat the purpose of static typing";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      TSTypeAnnotation(path) {
        const typeAnnotation = path.get("typeAnnotation");
        if (t.isTSAnyKeyword(typeAnnotation.node)) {
          const line = typeAnnotation.node.loc.start.line;
          const column = typeAnnotation.node.loc.start.column;

          issues.push({\n            id: `${relativePath}-any-type-${line}-${column}`,
            category: this.category,
            severity: this.calculateSeverity(8),
            impact: this.calculateImpact(this.description),
            effort: this.calculateEffort(3),
            blastRadius: 5,
            priority: this.calculatePriority(8, 5, 3),
            title: this.title,
            description: this.description,
            location: { file: relativePath, line, column },
            suggestion: {
              title: "Replace 'any' with specific type",
              description: "Replace 'any' type annotations with specific types like 'string', 'number', 'object', or interface definitions to improve type safety and developer experience.",
              codeChanges: [{
                type: "replace",
                file: relativePath,
                oldValue: path.toString(),
                newValue: path.toString().replace(/:\s*any\b/, ": string"),
                line,
                column,
              }],
            },
          });
        }
      },
      TSCallSignatureDeclaration(path) {
        const params = path.node.parameters;
        for (let i = 0; i < params.length; i++) {
          const param = params[i];
          if (t.isTSParameterProperty(param) && t.isTSAnyKeyword(param.typeAnnotation?.typeAnnotation)) {
            const line = param.loc.start.line;
            const column = param.loc.start.column;

            issues.push({
              id: `${relativePath}-any-type-${line}-${column}`,
              category: this.category,
              severity: this.calculateSeverity(7),
              impact: this.calculateImpact(this.description),
              effort: this.calculateEffort(2),
              blastRadius: 3,
              priority: this.calculatePriority(7, 3, 2),
              title: this.title,
              description: this.description,
              location: { file: relativePath, line, column },
              suggestion: {
                title: "Replace 'any' with specific type",
                description: "Replace 'any' type annotations with specific types like 'string', 'number', 'object', or interface definitions to improve type safety and developer experience.",
                codeChanges: [{
                  type: "replace",
                  file: relativePath,
                  oldValue: param.typeAnnotation?.typeAnnotation?.typeAnnotation?.typeAnnotation?.toString(),
                  newValue: "string",
                  line,
                  column,
                }],
              },
            });
          }
        }
      },
    });

    return issues;
  }
}

class OversizedComponentDetector extends BaseDetector {
  readonly category = "oversized-component";
  readonly title = "Oversized component detected";
  readonly description = "React component is too large, exceeding best practices for maintainability";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      FunctionDeclaration(path) {
        if (path.node.id?.name.match(/^(Component|Page|Layout|Widget)$/)) {
          const bodySize = this.getNodeCount(path.node.body);
          if (bodySize > 50) {
            const line = path.node.loc?.start.line || 1;

            issues.push({
              id: `${relativePath}-oversized-${line}`,
              category: this.category,
              severity: this.calculateSeverity(6),
              impact: this.calculateImpact(this.description),
              effort: this.calculateEffort(4),
              blastRadius: 8,
              priority: this.calculatePriority(6, 8, 4),
              title: this.title,
              description: this.description,
              location: { file: relativePath, line },
              suggestion: {
                title: "Break down component",
                description: "Split the oversized component into smaller, focused components following the single responsibility principle. Extract child components, utility functions, and reduce complexity.",
                codeChanges: [],
              },
            });
          }
        }
      },
      VariableDeclaration(path) {
        if (
          path.node.declarations.some(
            (decl) =>
              t.isVariableDeclarator(decl) &&
              t.isArrowFunctionExpression(decl.init) &&
              decl.init.body &&
              t.isBlockStatement(decl.init.body)
          )
        ) {
          const arrowFunc = path.node.declarations.find(
            (decl) => t.isVariableDeclarator(decl) && t.isArrowFunctionExpression(decl.init)
          );

          if (arrowFunc?.init?.body && t.isBlockStatement(arrowFunc.init.body)) {
            const bodySize = this.getNodeCount(arrowFunc.init.body);
            if (bodySize > 30) {
              const line = path.node.loc?.start.line || 1;

              issues.push({
                id: `${relativePath}-oversized-${line}`,
                category: this.category,
                severity: this.calculateSeverity(5),
                impact: this.calculateImpact(this.description),
                effort: this.calculateEffort(5),
                blastRadius: 6,
                priority: this.calculatePriority(5, 6, 5),
                title: this.title,
                description: this.description,
                location: { file: relativePath, line },
                suggestion: {
                  title: "Extract function logic",
                  description: "Extract complex logic from large functions into separate utility functions or components to improve readability and maintainability.",
                  codeChanges: [],
                },
              });
            }
          }
        }
      },
    });

    return issues;
  }

  private getNodeCount(node: any): number {
    let count = 0;

    function countNodes(n: any) {
      count++;
      if (t.isFunction(n)) {
        countNodes(n.body);
      }
      if (t.isArrayExpression(n)) {
        n.elements.forEach(countNodes);
      }
      if (t.isObjectExpression(n)) {
        n.properties.forEach((prop: any) => countNodes(prop.value));
      }
      if (t.isCallExpression(n)) {
        countNodes(n.callee);
        n.arguments.forEach(countNodes);
      }
    }

    countNodes(node);
    return count;
  }
}

class DeadStateDetector extends BaseDetector {
  readonly category = "dead-state";
  readonly title = "Dead state detected";
  readonly description = "Component state is defined but never used or updated";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (t.isVariableDeclarator(decl) && t.isCallExpression(decl.init)) {
            if (t.isMemberExpression(decl.init.callee) && t.isIdentifier(decl.init.callee.object)) {
              if (decl.init.callee.object.name === "useState" || decl.init.callee.object.name === "useReducer") {
                const stateName = decl.id?.name;

                // Check if state is used elsewhere
                let isUsed = false;

                traverse(ast, {
                  Identifier(path) {
                    if (path.node.name === stateName) {
                      isUsed = true;
                    }
                  },
                });

                if (!isUsed && stateName) {
                  const line = decl.loc?.start.line || 1;

                  issues.push({
                    id: `${relativePath}-dead-state-${line}`,
                    category: this.category,
                    severity: this.calculateSeverity(4),
                    impact: this.calculateImpact(this.description),
                    effort: this.calculateEffort(2),
                    blastRadius: 3,
                    priority: this.calculatePriority(4, 3, 2),
                    title: this.title,
                    description: this.description,
                    location: { file: relativePath, line },
                    suggestion: {
                      title: "Remove unused state",
                      description: "Remove the unused state variable to reduce memory usage and simplify the component. Consider using useRef or other state management solutions if the state is needed for DOM references.",
                      codeChanges: [{
                        type: "remove",
                        file: relativePath,
                        oldValue: path.toString(),
                        line,
                      }],
                    },
                  });
                }
              }
            }
          }
        });
      },
    });

    return issues;
  }
}

class MissingDocsDetector extends BaseDetector {
  readonly category = "missing-docs";
  readonly title = "Missing documentation";
  readonly description = "Component or function lacks proper documentation";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      FunctionDeclaration(path) {
        if (path.node.id?.name.match(/^(Component|Page|Layout|Widget)/)) {
          if (!this.hasJSDoc(path.node)) {
            const line = path.node.loc?.start.line || 1;

            issues.push({
              id: `${relativePath}-missing-docs-${line}`,
              category: this.category,
              severity: this.calculateSeverity(3),
              impact: this.calculateImpact(this.description),
              effort: this.calculateEffort(2),
              blastRadius: 2,
              priority: this.calculatePriority(3, 2, 2),
              title: this.title,
              description: this.description,
              location: { file: relativePath, line },
              suggestion: {
                title: "Add documentation",
                description: "Add JSDoc comments to document the component's purpose, props, return value, and any important implementation details. This improves code maintainability and developer experience.",
                codeChanges: [],
              },
            });
          }
        }
      },
      VariableDeclaration(path) {
        if (
          path.node.declarations.some(
            (decl) =>
              t.isVariableDeclarator(decl) &&
              t.isArrowFunctionExpression(decl.init) &&
              decl.id?.name?.match(/^(Component|Page|Layout|Widget)/)
          )
        ) {
          const arrowFunc = path.node.declarations.find(
            (decl) =>
              t.isVariableDeclarator(decl) &&
              t.isArrowFunctionExpression(decl.init) &&
              decl.id?.name?.match(/^(Component|Page|Layout|Widget)/)
          );

          if (arrowFunc?.id?.name && !this.hasJSDoc(arrowFunc)) {
            const line = arrowFunc.loc?.start.line || 1;

            issues.push({
              id: `${relativePath}-missing-docs-${line}`,
              category: this.category,
              severity: this.calculateSeverity(3),
              impact: this.calculateImpact(this.description),
              effort: this.calculateEffort(2),
              blastRadius: 2,
              priority: this.calculatePriority(3, 2, 2),
              title: this.title,
              description: this.description,
              location: { file: relativePath, line },
              suggestion: {
                title: "Add documentation",
                description: "Add JSDoc comments to document the component's purpose, props, return value, and any important implementation details. This improves code maintainability and developer experience.",
                codeChanges: [],
              },
            });
          }
        }
      },
    });

    return issues;
  }

  private hasJSDoc(node: any): boolean {
    return node.leadingComments?.some((comment: any) => comment.value.includes("@param")) || false;
  }
}

class ConsoleLogLeakDetector extends BaseDetector {
  readonly category = "console-log-leak";
  readonly title = "Console log leak detected";
  readonly description = "Debug console logs are present in production code";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      ExpressionStatement(path) {
        if (t.isCallExpression(path.node.expression)) {
          const callee = path.node.expression.callee;
          if (t.isMemberExpression(callee) && t.isIdentifier(callee.object)) {
            if (callee.object.name === "console" && t.isIdentifier(callee.property)) {
              if (callee.property.name === "log" || callee.property.name === "debug" || callee.property.name === "info" || callee.property.name === "warn") {
                const line = path.node.loc?.start.line || 1;

                issues.push({
                  id: `${relativePath}-console-log-${line}`,
                  category: this.category,
                  severity: this.calculateSeverity(7),
                  impact: this.calculateImpact(this.description),
                  effort: this.calculateEffort(3),
                  blastRadius: 6,
                  priority: this.calculatePriority(7, 6, 3),
                  title: this.title,
                  description: this.description,
                  location: { file: relativePath, line },
                  suggestion: {
                    title: "Remove debug log",
                    description: "Remove console.log statements and other debug output from production code. Use proper logging libraries or debugging tools for development purposes.",
                    codeChanges: [{
                      type: "remove",
                      file: relativePath,
                      oldValue: path.toString(),
                      line,
                    }],
                  },
                });
              }
            }
          }
        }
      },
    });

    return issues;
  }
}

class EffectDepsDetector extends BaseDetector {
  readonly category = "effect-deps";
  readonly title = "Effect dependencies missing";
  readonly description = "React useEffect hooks missing required dependencies";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (
            t.isVariableDeclarator(decl) &&
            t.isCallExpression(decl.init) &&
            t.isIdentifier(decl.init.callee) &&
            decl.init.callee.name === "useEffect"
          ) {
            const effectArgs = decl.init.arguments;
            if (effectArgs.length > 0 && t.isArrowFunctionExpression(effectArgs[0])) {
              const deps = effectArgs[1];

              if (!deps || t.isSpreadElement(deps) || !t.isArrayExpression(deps)) {
                const line = decl.loc?.start.line || 1;

                issues.push({
                  id: `${relativePath}-effect-deps-${line}`,
                  category: this.category,
                  severity: this.calculateSeverity(6),
                  impact: this.calculateImpact(this.description),
                  effort: this.calculateEffort(2),
                  blastRadius: 4,
                  priority: this.calculatePriority(6, 4, 2),
                  title: this.title,
                  description: this.description,
                  location: { file: relativePath, line },
                  suggestion: {
                    title: "Add effect dependencies",
                    description: "Add the missing dependencies to the useEffect second argument array to prevent unnecessary re-renders and ensure the effect runs only when needed.",
                    codeChanges: [],
                  },
                });
              }
            }
          }
        });
      },
    });

    return issues;
  }
}

class PropDrillingDetector extends BaseDetector {
  readonly category = "prop-drilling";
  readonly title = "Prop drilling detected";
  readonly description = "Component receives props that are passed down through multiple levels without optimization";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      FunctionDeclaration(path) {
        if (path.node.params.length > 0) {
          const line = path.node.loc?.start.line || 1;

          issues.push({
            id: `${relativePath}-prop-drilling-${line}`,
            category: this.category,
            severity: this.calculateSeverity(5),
            impact: this.calculateImpact(this.description),
            effort: this.calculateEffort(4),
            blastRadius: 7,
            priority: this.calculatePriority(5, 7, 4),
            title: this.title,
            description: this.description,
            location: { file: relativePath, line },
            suggestion: {
              title: "Use context or state management",
              description: "Consider using React Context API or state management libraries like Redux/Zustand to avoid prop drilling. This reduces boilerplate code and improves component communication.",
              codeChanges: [],
            },
          });
        }
      },
    });

    return issues;
  }
}

class GenericNamingDetector extends BaseDetector {
  readonly category = "generic-naming";
  readonly title = "Generic naming detected";
  readonly description = "Variable or function names use generic, non-descriptive names";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      FunctionDeclaration(path) {
        if (path.node.id?.name.match(/^[a-z]$$/)) {
          const line = path.node.loc?.start.line || 1;

          issues.push({
            id: `${relativePath}-generic-naming-${line}`,
            category: this.category,
            severity: this.calculateSeverity(3),
            impact: this.calculateImpact(this.description),
            effort: this.calculateEffort(2),
            blastRadius: 2,
            priority: this.calculatePriority(3, 2, 2),
            title: this.title,
            description: this.description,
            location: { file: relativePath, line },
            suggestion: {
              title: "Use descriptive names",
              description: "Use descriptive, action-oriented names for functions and variables. Avoid single-letter names except for loop counters or well-known abbreviations.",
              codeChanges: [],
            },
          });
        }
      },
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (t.isIdentifier(decl.id) && decl.id.name.match(/^[a-z]$$/)) {
            const line = decl.loc?.start.line || 1;

            issues.push({
              id: `${relativePath}-generic-naming-${line}`,
              category: this.category,
              severity: this.calculateSeverity(2),
              impact: this.calculateImpact(this.description),
              effort: this.calculateEffort(1),
              blastRadius: 1,
              priority: this.calculatePriority(2, 1, 1),
              title: this.title,
              description: this.description,
              location: { file: relativePath, line },
              suggestion: {
                title: "Use descriptive names",
                description: "Use descriptive, action-oriented names for functions and variables. Avoid single-letter names except for loop counters or well-known abbreviations.",
                codeChanges: [],
              },
            });
          }
        });
      },
    });

    return issues;
  }
}

class CircularDepsDetector extends BaseDetector {
  readonly category = "circular-deps";
  readonly title = "Circular dependency detected";
  readonly description = "Files have circular import dependencies that can cause runtime errors";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    // Simple circular dependency detection
    const visited = new Set<string>();

    function detectCycle(node: string, path: string[] = []): boolean {
      if (visited.has(node)) {
        return false;
      }

      visited.add(node);
      path.push(node);

      const imports = importMap.get(node) || [];

      for (const imported of imports) {
        if (path.includes(imported)) {
          // Found a cycle
          const cycleStart = path.indexOf(imported);
          const cycle = path.slice(cycleStart);

          const line = 1; // We don't have exact line info for imports

          issues.push({
            id: `${relativePath}-circular-deps-${line}`,
            category: this.category,
            severity: this.calculateSeverity(9),
            impact: this.calculateImpact(this.description),
            effort: this.calculateEffort(5),
            blastRadius: 8,
            priority: this.calculatePriority(9, 8, 5),
            title: this.title,
            description: this.description,
            location: { file: relativePath, line },
            suggestion: {
              title: "Refactor circular dependency",
              description: "Break circular dependencies by extracting common functionality into shared modules or using dependency injection patterns.",
              codeChanges: [],
            },
          });

          return true;
        }

        if (!visited.has(imported)) {
          detectCycle(imported, [...path]);
        }
      }

      path.pop();
      return false;
    }

    for (const node of importMap.keys()) {
      detectCycle(node);
    }

    return issues;
  }
}

class StateExplosionDetector extends BaseDetector {
  readonly category = "state-explosion";
  readonly title = "State explosion detected";
  readonly description = "Component uses too many state variables, indicating complexity issues";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    let useStateCount = 0;

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (
            t.isVariableDeclarator(decl) &&
            t.isCallExpression(decl.init) &&
            t.isMemberExpression(decl.init.callee) &&
            t.isIdentifier(decl.init.callee.object) &&
            decl.init.callee.object.name === "useState"
          ) {
            useStateCount++;
          }
        });
      },
    });

    if (useStateCount > 10) {
      const line = 1;

      issues.push({
        id: `${relativePath}-state-explosion-${line}`,
        category: this.category,
        severity: this.calculateSeverity(7),
        impact: this.calculateImpact(this.description),
        effort: this.calculateEffort(5),
        blastRadius: 6,
        priority: this.calculatePriority(7, 6, 5),
        title: this.title,
        description: this.description,
        location: { file: relativePath, line },
        suggestion: {
          title: "Consolidate state",
          description: "Consolidate multiple related state variables into a single state object or use a state management library like Redux/Zustand to reduce complexity and improve maintainability.",
          codeChanges: [],
        },
      });
    }

    return issues;
  }
}

class APIDetector extends BaseDetector {
  readonly category = "api-in-component";
  readonly title = "API call in component detected";
  readonly description = "Component directly calls API, violating separation of concerns";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (
            t.isVariableDeclarator(decl) &&
            t.isCallExpression(decl.init) &&
            t.isMemberExpression(decl.init.callee)
          ) {
            const callee = decl.init.callee;
            if (t.isIdentifier(callee.object) && callee.object.name.match(/^(axios|fetch|http|api)$/)) {
              const line = decl.loc?.start.line || 1;

              issues.push({
                id: `${relativePath}-api-call-${line}`,
                category: this.category,
                severity: this.calculateSeverity(6),
                impact: this.calculateImpact(this.description),
                effort: this.calculateEffort(4),
                blastRadius: 5,
                priority: this.calculatePriority(6, 5, 4),
                title: this.title,
                description: this.description,
                location: { file: relativePath, line },
                suggestion: {
                  title: "Extract API calls",
                  description: "Move API calls to a service layer or utility functions. Use hooks like useSWR, React Query, or Apollo Client for data fetching in React components.",
                  codeChanges: [],
                },
              });
            }
          }
        });
      },
    });

    return issues;
  }
}

class MissingErrorBoundaryDetector extends BaseDetector {
  readonly category = "missing-error-boundary";
  readonly title = "Missing error boundary";
  readonly description = "Component lacks error boundary to handle runtime errors";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      ExportDefaultDeclaration(path) {
        if (t.isFunctionDeclaration(path.node.declaration) || t.isArrowFunctionExpression(path.node.declaration)) {
          const line = path.node.loc?.start.line || 1;

          issues.push({
            id: `${relativePath}-error-boundary-${line}`,
            category: this.category,
            severity: this.calculateSeverity(8),
            impact: this.calculateImpact(this.description),
            effort: this.calculateEffort(4),
            blastRadius: 7,
            priority: this.calculatePriority(8, 7, 4),
            title: this.title,
            description: this.description,
            location: { file: relativePath, line },
            suggestion: {
              title: "Add error boundary",
              description: "Wrap the component with React's Error Boundary or a custom error boundary to catch and handle runtime errors gracefully. This prevents the entire app from crashing.",
              codeChanges: [],
            },
          });
        }
      },
    });

    return issues;
  }
}

class MemoryLeakDetector extends BaseDetector {
  readonly category = "memory-leak";
  readonly title = "Potential memory leak detected";
  readonly description = "Component may have memory leak due to improper cleanup";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach((decl) => {
          if (
            t.isVariableDeclarator(decl) &&
            t.isCallExpression(decl.init) &&
            t.isIdentifier(decl.init.callee) &&
            decl.init.callee.name === "useEffect"
          ) {
            const effectArgs = decl.init.arguments;
            if (effectArgs.length > 0 && t.isArrowFunctionExpression(effectArgs[0])) {
              const cleanupFunc = effectArgs[0].body;

              if (t.isArrowFunctionExpression(cleanupFunc)) {
                const line = decl.loc?.start.line || 1;

                issues.push({
                  id: `${relativePath}-memory-leak-${line}`,
                  category: this.category,
                  severity: this.calculateSeverity(8),
                  impact: this.calculateImpact(this.description),
                  effort: this.calculateEffort(5),
                  blastRadius: 6,
                  priority: this.calculatePriority(8, 6, 5),
                  title: this.title,
                  description: this.description,
                  location: { file: relativePath, line },
                  suggestion: {
                    title: "Add cleanup function",
                    description: "Ensure the useEffect hook has a cleanup function that properly removes event listeners, timers, subscriptions, or aborts to prevent memory leaks.",
                    codeChanges: [],
                  },
                });
              }
            }
          }
        });
      },
    });

    return issues;
  }
}

class DuplicateLogicDetector extends BaseDetector {
  readonly category = "duplicate-logic";
  readonly title = "Duplicate logic detected";
  readonly description = "Similar logic appears in multiple places, violating DRY principle";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    // Simple duplicate logic detection based on function patterns
    const functions: { [key: string]: any[] } = {};

    traverse(ast, {
      FunctionDeclaration(path) {
        if (path.node.id?.name) {
          const funcBody = path.node.body;
          const funcKey = JSON.stringify(funcBody);

          if (!functions[funcKey]) {
            functions[funcKey] = [];
          }
          functions[funcKey].push({
            file: relativePath,
            line: path.node.loc?.start.line,
            name: path.node.id?.name,
          });
        }
      },
    });

    // Find duplicates
    for (const [funcKey, occurrences] of Object.entries(functions)) {
      if ((occurrences as any[]).length > 1) {
        const line = (occurrences as any)[0].line;

        issues.push({
          id: `${relativePath}-duplicate-logic-${line}`,
          category: this.category,
          severity: this.calculateSeverity(5),
          impact: this.calculateImpact(this.description),
          effort: this.calculateEffort(4),
          blastRadius: 5,
          priority: this.calculatePriority(5, 5, 4),
          title: this.title,
          description: this.description,
          location: { file: relativePath, line },
          suggestion: {
            title: "Extract to utility function",
            description: "Extract duplicate logic into a shared utility function or service to reduce code duplication and improve maintainability.",
            codeChanges: [],
          },
        });
      }
    }

    return issues;
  }
}

class UnsafeCastDetector extends BaseDetector {
  readonly category = "unsafe-cast";
  readonly title = "Unsafe cast detected";
  readonly description = "TypeScript code uses unsafe casting (as or !!) that can cause runtime errors";

  async detect(
    ast: any,
    relativePath: string,
    importMap: Map<string, string[]>,
    parsedFileName: string
  ): Promise<Issue[]> {
    const issues: Issue[] = [];

    traverse(ast, {
      TSAsExpression(path) {
        const line = path.node.loc?.start.line || 1;

        issues.push({
          id: `${relativePath}-unsafe-cast-${line}`,
          category: this.category,
          severity: this.calculateSeverity(6),
          impact: this.calculateImpact(this.description),
          effort: this.calculateEffort(3),
          blastRadius: 4,
          priority: this.calculatePriority(6, 4, 3),
          title: this.title,
          description: this.description,
          location: { file: relativePath, line },
          suggestion: {
            title: "Replace with type guard",
            description: "Replace unsafe casting with proper type guards, assertions, or interface narrowing to improve type safety and prevent runtime errors.",
            codeChanges: [],
          },
        });
      },
      TSNonNullExpression(path) {
        const line = path.node.loc?.start.line || 1;

        issues.push({
          id: `${relativePath}-unsafe-cast-${line}`,
          category: this.category,
          severity: this.calculateSeverity(5),
          impact: this.calculateImpact(this.description),
          effort: this.calculateEffort(2),
          blastRadius: 3,
          priority: this.calculatePriority(5, 3, 2),
          title: this.title,
          description: this.description,
          location: { file: relativePath, line },
          suggestion: {
            title: "Add proper null checks",
            description: "Add proper null checks or optional chaining to prevent runtime errors when accessing potentially nullish values.",
            codeChanges: [],
          },
        });
      },
    });

    return issues;
  }
}

export default detectors;
