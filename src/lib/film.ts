export type FilmState = "kept" | "removed" | "added";

export interface FilmLine {
  text: string;
  state: FilmState;
}
