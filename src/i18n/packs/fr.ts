import {
  BRAND_NAME,
  COMPANY_NAME,
  GITHUB_APP_INSTALL_URL,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const fr: ContentPack = {
  ui: {
    backToHome: "Retour à l'accueil",
    billingPeriod: "Période de facturation",
    monthly: "Mensuel",
    yearly: "Annuel",
    twoMonthsFree: "2 mois offerts",
    individuals: "Particuliers",
    forTeams: "Pour les équipes",
    allDocs: "Toute la documentation",
    documentation: "Documentation",
    privacyFooterBefore: "Nous n'utilisons que ce qu'il faut pour faire tourner le produit. Voir",
    privacyFooterLink: "Confidentialité",
    language: "Langue",
    skipToContent: "Aller au contenu",
    homeCrumb: "Accueil",
    shortVersion: "Version courte",
    contactHeading: "Contact",
    changesHeading: "Modifications",
    legalLabel: "Mentions légales",
    bestFor: "Idéal pour :",
  },
  seo: {
    defaultTitle: "Refract — L'IA l'a écrit. Rendez-le prêt à livrer.",
    defaultDescription:
      "Refract transforme le code généré par l'IA en un logiciel plus propre et plus cohérent, que vous pouvez vraiment maintenir.",
    ogTitle: "L'IA l'a écrit. Rendez-le prêt à livrer.",
    ogDescription:
      "L'étape après générer. Refract nettoie et resserre le code généré par l'IA pour que vous continuiez à livrer.",
    ogImageAlt: "Refract — l'étape après que l'IA a écrit le code.",
    jsonLdDescription:
      "Refract transforme le code généré par l'IA en un logiciel plus propre et plus cohérent, que vous pouvez vraiment maintenir.",
  },
  nav: {
    marketingLinks: [
      { label: "Produit", href: "/product" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
    ],
    footerSections: [
      {
        title: "Produit",
        links: [
          { label: "Produit", href: "/product" },
          { label: "Tarifs", href: "/pricing" },
          { label: "Documentation", href: "/docs" },
          { label: "Sécurité", href: "/security" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Confidentialité", href: "/privacy" },
          { label: "Conditions", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — l'étape après que l'IA a écrit le code.",
    footerFinePrint: "Conçu pour React et TypeScript sur GitHub.",
    githubAppLabel: "Installer sur GitHub",
    signIn: "Connexion",
    getStarted: "Commencer",
  },
  brand: {
    attribution: `${PRODUCT_NAME} est développé par ${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
    copyrightLine: `${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
    operatorSentence: `${PRODUCT_NAME} est un produit de ${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
    about: {
      title: `À propos — ${BRAND_NAME}`,
      description: `${PRODUCT_NAME} est développé par ${BRAND_NAME}, une entreprise ${COMPANY_NAME} tournée vers les technologies pour développeurs.`,
      label: "Entreprise",
      headline: BRAND_NAME,
      intro: `${PRODUCT_NAME} est notre produit actuel. ${BRAND_NAME} est la marque de technologies pour développeurs qui le porte. ${COMPANY_NAME} est l'entreprise qui construit ${BRAND_NAME}.`,
      sections: [
        {
          title: COMPANY_NAME,
          body: `${COMPANY_NAME} est l'entreprise technologique mère. Elle construit et opère ses produits et ses futurs projets technologiques. Ce n'est pas un produit en concurrence avec ${PRODUCT_NAME}.`,
        },
        {
          title: BRAND_NAME,
          body: `${BRAND_NAME} est la marque de technologies pour développeurs construite par ${COMPANY_NAME}. Elle construit des infrastructures et des outils qui aident les équipes à créer, maintenir, comprendre et faire évoluer le logiciel.`,
        },
        {
          title: PRODUCT_NAME,
          body: `${PRODUCT_NAME} est le produit phare actuel de ${BRAND_NAME} : l'étape après que l'IA a écrit le code.`,
        },
      ],
    },
  },
  home: {
    seo: {
      title: "Refract — L'IA l'a écrit. Rendez-le prêt à livrer.",
      description:
        "Refract prend le code généré par l'IA et le transforme en un logiciel plus propre et plus organisé — avant que le désordre ne devienne le projet.",
      ogTitle: "L'IA l'a écrit. Rendez-le prêt à livrer.",
      ogDescription:
        "L'étape après générer. Refract nettoie et resserre le code généré par l'IA pour que vous continuiez à livrer.",
    },
    hero: {
      eyebrow: "L'étape après que l'IA a écrit le code",
      headline: "L'IA l'a écrit. Rendez-le prêt à livrer.",
      subhead:
        "Refract prend le code que produisent vos outils d'IA et le transforme en quelque chose de plus propre, plus cohérent et plus facile à garder — pour que le projet ne s'effondre pas en grandissant.",
      primary: { label: "Commencer", href: SIGNUP_PATH },
      secondary: { label: "Voir comment ça marche", href: "/product" },
      trust: "Vous approuvez chaque changement. Refract ne réécrit jamais votre projet tout seul.",
      caption: "Avant que ça ne devienne le code du projet",
    },
    problem: {
      headline: "Un code qui tourne peut rester un désordre.",
      bullets: [
        "le même comportement, copié au lieu d'être partagé",
        "du code d'interface qui fait un travail qui n'est pas le sien",
        "de l'état et des effets restants qui n'avaient de sens que sur le moment",
        "une structure qui allait pour un fichier, pas pour un produit",
      ],
      close: "Vous n'avez pas besoin de plus de code généré. Vous avez besoin que le code généré reste bon.",
    },
    turn: {
      headline: "Refract, c'est ce qui se passe après que l'IA a écrit le code.",
      lede: "Pas une nouvelle liste de griefs. Un projet plus propre.",
    },
    result: {
      headline: "Le résultat, c'est du code que vous pouvez garder.",
      points: [
        {
          title: "Plus propre",
          body: "Le désordre évident est <strong>sorti des écrans</strong> et mis à sa place.",
        },
        {
          title: "Plus cohérent",
          body: "<strong>La logique répétée cesse de se multiplier.</strong> Le projet commence à ressembler à un seul produit, pas à douze premiers jets.",
        },
        {
          title: "Plus facile à faire évoluer",
          body: "Vous pouvez <strong>ajouter la suite</strong> sans traverser un labyrinthe que personne n'a voulu construire.",
        },
        {
          title: "Toujours à vous",
          body: "<strong>Rien ne change tant que vous n'avez pas dit oui.</strong> Vous voyez ce qui va se passer. Vous gardez le bouton de fusion.",
        },
      ],
    },
    does: {
      headline: "Il ne se contente pas de pointer les problèmes. Il améliore le code.",
      points: [
        {
          number: "1",
          title: "Il apprend d'abord le projet",
          body: "Refract regarde comment le logiciel est vraiment assemblé — pas seulement le dernier fichier modifié — pour qu'un nettoyage s'ajuste au projet que vous avez déjà.",
        },
        {
          number: "2",
          title: "Il trouve le désordre que l'IA a tendance à laisser",
          body: "Logique copiée. Chargement de données dans l'interface. État dont plus personne ne se sert. Effets qui s'attardent. Structure qui fera mal dès que l'application grandira.",
        },
        {
          number: "3",
          title: "Il vous dit quoi nettoyer en premier",
          body: "Quand il y a plus d'un problème, vous recevez un ordre qui a du sens — pas un mur de bruit.",
        },
        {
          number: "4",
          title: "Il peut faire le nettoyage pour vous",
          body: "Quand le changement est sûr et contenu, Refract le prépare. Vous approuvez. Il applique le changement et vérifie que le projet tient encore. S'il ne peut pas le faire en sécurité, il le dit, au lieu de deviner.",
        },
      ],
    },
    world: {
      headline: "Il intervient là où le code est sur le point de devenir le projet.",
      lede: "Connectez les dépôts qui vous importent. Quand du code nouveau est proposé, Refract le relit sur place.",
      caption: "Un résultat. Vous décidez.",
      decide: "Vous obtenez un résultat clair :",
      close:
        "Approuvez sur GitHub. Restez dans le flux que vous avez déjà. Refract ne vous demande pas de vivre dans une seconde boîte de réception.",
    },
    trust: {
      headline: "Contrôlé. Visible. Réversible en pratique — parce que c'est vous qui commandez.",
      points: [
        {
          title: "Vous approuvez.",
          body: "Refract n'applique jamais un changement avant que vous le fassiez.",
        },
        {
          title: "Il préfère se taire plutôt que se tromper.",
          body: "S'il ne peut pas prouver un problème, il n'en invente pas un pour avoir l'air occupé.",
        },
        {
          title: "S'il ne peut pas nettoyer quelque chose en sécurité, il ne fait pas semblant.",
          body: "Vous recevez une explication, pas une réécriture imprudente.",
        },
        {
          title: "Il vérifie son propre travail.",
          body: "Après qu'un nettoyage a atterri, Refract regarde à nouveau. Un nettoyage raté n'est jamais décrit comme un succès.",
        },
        {
          title: "Ce n'est pas un chatbot qui réécrit votre application.",
          body: "Les nettoyages qu'il applique sont précis et contraints. Les conjectures créatives ne sont pas des « corrections ».",
        },
      ],
    },
    steps: {
      headline: "Trois étapes. Ensuite, ça tourne pendant que vous travaillez.",
      note: "Installer l'application, ce n'est pas la même chose que se connecter. Votre compte Refract et votre accès GitHub restent séparés, volontairement.",
      cta: { label: "Commencer", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "Créez un compte",
          body: "E-mail et mot de passe. C'est votre connexion Refract — pas une connexion GitHub.",
        },
        {
          number: "2",
          title: "Connectez GitHub et choisissez les dépôts",
          body: "Installez l'application Refract sur les projets que vous voulez nettoyer. C'est vous qui choisissez lesquels.",
        },
        {
          number: "3",
          title: "Continuez à livrer",
          body: "Ouvrez un pull request comme vous le faites déjà. Refract lit le changement dans le contexte du projet. Si un nettoyage est prêt, vous l'approuvez. Puis vous fusionnez quand vous êtes prêt.",
        },
      ],
    },
    audience: {
      headline: "Pour ceux qui construisent avec l'IA et doivent ensuite vivre avec le résultat.",
      points: [
        {
          title: "Particuliers",
          body: "Vous livrez un produit avec Copilot, Cursor ou le prochain modèle. Le code arrive vite. Vous voulez qu'il reste quelque chose que vous pouvez maintenir.",
        },
        {
          title: "Équipes",
          body: "Plusieurs personnes qui génèrent en même temps. Le dépôt est la mémoire partagée. Refract, c'est ce qui garde cette mémoire cohérente.",
        },
        {
          title: "Conçu pour aujourd'hui",
          body: "React et TypeScript sur GitHub. C'est là que ce problème parle le plus fort en ce moment. Les autres environnements viendront quand ils seront réels — pas comme une promesse sur la page d'accueil.",
        },
      ],
    },
    social: {
      headline: "Les équipes qui génèrent du logiciel ont besoin d'une étape après la génération.",
      line: "Utilisé par des développeurs qui construisent avec l'IA sur GitHub.",
      invite: "Vous voulez être une équipe pionnière ?",
      inviteHref: "/contact",
      inviteLabel: "Contactez-nous",
    },
    honesty: {
      headline: "Ce que Refract n'est pas.",
      paragraphs: [
        "Ce n'est pas un IDE. Ce n'est pas un remplaçant de vos outils de code IA. Ce n'est pas un linter générique. Ce n'est pas un bot qui laisse vingt commentaires sur chaque ligne.",
        "Il ne réorganisera pas tout votre produit du jour au lendemain. Il ne corrigera pas automatiquement chaque problème de sécurité. Il ne fusionnera pas à votre place.",
        "Il rendra les parties générées par l'IA d'un projet React et TypeScript plus propres, plus claires et plus faciles à garder — avec vous aux commandes.",
      ],
    },
    cta: {
      headline: "Générez le code. N'héritez pas du désordre.",
      body: "Créez un compte, connectez GitHub, et laissez Refract emmener les premiers jets jusqu'au bout.",
      primary: { label: "Commencer", href: SIGNUP_PATH },
      secondary: { label: "Voir les tarifs", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "Comment fonctionne Refract — nettoyage de code IA sur GitHub",
      description:
        "Refract relit le code généré par l'IA sur les pull requests GitHub, prépare un nettoyage quand c'est sûr, et attend votre approbation.",
      ogTitle: "Comment fonctionne Refract",
      ogDescription:
        "Connectez GitHub. Continuez à livrer. Refract nettoie le code généré par l'IA quand c'est sûr — et demande avant de toucher quoi que ce soit.",
    },
    hero: {
      headline: "Du code généré au code que vous pouvez garder.",
      subhead:
        "Refract lit le projet, trouve ce qui va devenir salissant, et prépare un nettoyage que vous approuvez. Vous ne quittez pas GitHub pour décider.",
      cta: { label: "Commencer", href: SIGNUP_PATH },
    },
    loop: {
      headline: "Une boucle simple",
      beats: [
        {
          number: "1",
          title: "Voir le projet",
          body: "Refract regarde le logiciel dans son ensemble, pour qu'un changement sur un écran respecte le reste.",
        },
        {
          number: "2",
          title: "Trouver ce qui fera mal plus tard",
          body: "Il cherche les motifs qui apparaissent quand le code est généré vite : logique copiée, écrans emmêlés, état restant, structure qui vieillira mal. Si quelque chose de sensible a été laissé dans le code — comme un secret — il vous le dit. Il ne « corrige » pas les secrets en silence.",
        },
        {
          number: "3",
          title: "Nettoyer ce qu'il peut",
          body: "Quand le nettoyage est sûr, vous recevez un changement concret à approuver. Quand il ne l'est pas, vous recevez une explication claire au lieu d'une conjecture.",
        },
        {
          number: "4",
          title: "Vérifier, puis se souvenir",
          body: "Après votre approbation, Refract applique le changement et regarde à nouveau. Avec le temps, vous pouvez voir si le projet devient plus propre — ou s'il continue à livrer le désordre.",
        },
      ],
    },
    places: {
      headline: "Décidez sur GitHub. Utilisez le site pour le reste.",
      close: "Le site n'est pas un second endroit pour accepter des nettoyages. La décision reste à côté du code.",
      github: {
        title: "Sur GitHub",
        items: [
          "Voir le résultat sur le pull request",
          "Approuver un nettoyage",
          "Ignorer quand ça ne s'applique pas",
          "Fusionner quand vous êtes prêt",
        ],
      },
      web: {
        title: "Sur le site",
        items: [
          "Créer votre compte",
          "Connecter la GitHub App",
          "Choisir les dépôts",
          "Voir ce qui est connecté, dans le temps",
        ],
      },
    },
    results: {
      headline: "Vous verrez l'un de quelques résultats honnêtes",
      items: [
        { title: "Toujours en cours", body: "Attendez. Ce n'est pas une réussite." },
        { title: "À l'air clair", body: "Rien de Refract n'a besoin de vous sur ce changement." },
        { title: "Nettoyage prêt", body: "Un nettoyage sûr est préparé. Approuvez-le sur GitHub." },
        {
          title: "À regarder",
          body: "Quelque chose compte, et Refract ne le changera pas pour vous. Lisez l'explication.",
        },
        {
          title: "Quelque chose a échoué",
          body: "L'analyse a échoué. Refract le dira. Il ne peindra pas un faux succès.",
        },
      ],
    },
    cleans: {
      headline: "Ce que « plus propre » veut dire en pratique",
      body: "Sur les projets React et TypeScript, Refract est particulièrement bon sur les restes d'une génération rapide :",
      bullets: [
        "chargement de données mêlé à l'interface",
        "la même logique écrite deux fois",
        "de l'état qui n'est jamais vraiment utilisé",
        "des effets qui ne se nettoient pas eux-mêmes",
        "des délais et une gestion d'erreurs manquants sur les bords",
        "des écrans qui font un travail qui appartient ailleurs",
      ],
      close:
        "Une partie, il peut la nettoyer pour vous. Une partie, il se contentera de la montrer — exprès. Une mauvaise réécriture automatique vaut moins qu'une note honnête.",
    },
    start: {
      headline: "En place en quelques minutes",
      steps: [
        "Créez un compte",
        "Installez la GitHub App et choisissez les dépôts",
        "Ouvrez un pull request",
      ],
      note: "Connecter GitHub ne vous connecte pas à Refract, et vous connecter à Refract n'installe pas l'accès GitHub. Deux étapes, deux rôles.",
      cta: { label: "Créez votre compte", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "Est-ce que ça va se battre avec mes outils d'IA ?",
        a: "Non. Continuez à générer. Refract est la passe qui garde le résultat maintenable.",
      },
      {
        q: "Est-ce qu'il changera du code sans moi ?",
        a: "Non. Vous approuvez. Vous fusionnez.",
      },
      {
        q: "Dois-je apprendre un nouvel espace de travail ?",
        a: "Non. Au quotidien, vous restez sur GitHub.",
      },
    ],
  },
  pricing: {
    seo: {
      title: "Tarifs — Refract | Free, Starter $12, Pro $24",
      description:
        "Free $0. Starter $12. Pro $24/mois. Ultimate $49. Offres Team à partir de $149. Commencez gratuitement — vous ne serez pas débité à l'inscription.",
      ogTitle: "Tarifs Refract — de Free à Pro $24/mois",
      ogDescription:
        "Free $0. Starter $12. Pro $24/mois. Équipes à partir de $149. Le paiement arrive ; vous ne serez pas débité à l'inscription.",
    },
    hero: {
      headline: "Payez pour un logiciel plus propre — pas pour plus de bruit.",
      subhead: "Commencez sur un vrai dépôt. Passez à la vitesse supérieure quand le projet — ou l'équipe — a besoin de plus d'espace.",
      priceLine: "Free $0. Starter $12. Pro $24/mois. Ultimate $49. Équipes à partir de $149.",
      banner:
        "Commencez gratuitement aujourd'hui. Les offres payantes sont listées pour que vous sachiez où ça va. Le paiement arrive ; vous ne serez pas débité à l'inscription.",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "Essayez Refract sur un vrai projet.",
        features: [
          "2 dépôts",
          "50 revues / mois",
          "5 nettoyages que vous pouvez approuver / mois",
          "Résultats consultatifs sur GitHub",
        ],
        cta: "Commencer",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Le voir sur votre propre code",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Pour un développeur solo qui utilise l'IA chaque jour sur un petit ensemble de projets.",
        features: [
          "5 dépôts",
          "150 revues / mois",
          "Nettoyages illimités dans cette limite de revues",
          "Contrôle obligatoire sur jusqu'à 2 dépôts",
        ],
        cta: "Commencer",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Une personne, quelques dépôts actifs",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Pour ceux qui livrent un vrai produit avec l'IA.",
        features: [
          "15 dépôts",
          "400 revues / mois",
          "Nettoyages illimités dans cette limite de revues",
          "Contrôle obligatoire sur chaque dépôt connecté",
          "Historique complet de ce qui est devenu plus propre",
        ],
        cta: "Commencer",
        href: SIGNUP_PATH,
        badge: "Le plus populaire",
        bestFor: "L'offre par défaut",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Pour les opérateurs avec beaucoup de dépôts ou de projets clients.",
        features: [
          "40 dépôts",
          "1 000 revues / mois",
          "Nettoyages illimités dans cette limite de revues",
          "Revue prioritaire",
          "Toutes les options de protection",
        ],
        cta: "Commencer",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Beaucoup de projets, un opérateur",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Une petite entreprise, une organisation GitHub, l'IA au quotidien.",
        features: [
          "10 personnes",
          "30 dépôts",
          "1 organisation GitHub",
          "1 000 revues / mois",
        ],
        cta: "Parlons-en",
        href: "/contact",
        badge: null,
        bestFor: "Une petite entreprise",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Plus de services, plus de volume, une vraie relation commerciale.",
        features: [
          "30 personnes",
          "100 dépôts",
          "2 organisations GitHub",
          "4 000 revues / mois",
          "Revue prioritaire",
          "Appel d'intégration",
        ],
        cta: "Parlons-en",
        href: "/contact",
        badge: null,
        bestFor: "Plus de volume",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ mois",
        yearlyPeriod: "/ an",
        description: "Plusieurs projets, un fort volume, une personne nommée qui connaît votre compte.",
        features: [
          "75 personnes",
          "250 dépôts",
          "5 organisations GitHub",
          "12 000 revues / mois",
        ],
        cta: "Parlons-en",
        href: "/contact",
        badge: null,
        bestFor: "Fort volume",
      },
      {
        name: "Enterprise",
        monthlyPrice: "À partir de $2,500",
        yearlyPrice: "À partir de $2,500",
        period: "/ mois",
        yearlyPeriod: "/ mois",
        description: "Quand vous avez besoin d'un contrat, de limites sur mesure ou d'une revue de sécurité.",
        features: [],
        cta: "Parlons-en",
        href: "/contact",
        badge: null,
        bestFor: "Contrat et limites sur mesure",
        custom: true,
      },
    ],
    footnote:
      "L'annuel, c'est deux mois offerts. « Revues » veut dire chaque fois que du code nouveau sur un pull request est analysé. Les nettoyages illimités restent à l'intérieur de cette limite mensuelle de revues.",
    value: {
      headline: "Vous ne payez pas pour des commentaires.",
      paragraphs: [
        "Vous payez pour un projet qui reste maintenable pendant que vous continuez à générer.",
        "Free, c'est sentir un vrai nettoyage sur un vrai dépôt. Pro, c'est quand ça devient normal. Team, c'est comment un groupe qui génère en même temps ne transforme pas le dépôt en douze styles de premier jet.",
        "Nous ne vous facturons pas en plus parce qu'un changement était sain. Le silence fait partie du produit.",
      ],
    },
    faqs: [
      {
        q: "Puis-je payer aujourd'hui ?",
        a: "Créez un compte et commencez. Le paiement par carte se déploie. Vous ne serez pas surpris par un débit à l'inscription.",
      },
      {
        q: "GitHub est-il inclus ?",
        a: "Non. GitHub est à part. Refract est à nous.",
      },
      {
        q: "Que se passe-t-il si j'atteins une limite ?",
        a: "Vous verrez une invitation claire à passer à l'offre supérieure. Nous ne nous arrêtons pas en silence en faisant semblant que tout va bien.",
      },
      {
        q: "Facturez-vous par personne sur Pro ?",
        a: "Non. Les offres individuelles sont tarifées sur les dépôts et les revues mensuelles, pas sur le nombre de personnes qui ont tapé.",
      },
      {
        q: "Puis-je l'utiliser sur un dépôt d'entreprise ?",
        a: "Oui, si vous pouvez y installer des GitHub Apps. Pour une facturation partagée et des sièges, prenez Team ou parlez-nous.",
      },
      {
        q: "Accepter / le nettoyage est-il bloqué sur Free ?",
        a: "Free inclut un petit nombre de nettoyages chaque mois pour que vous sentiez le vrai produit — pas une démo qui ne change jamais le code.",
      },
    ],
  },
  docs: {
    seo: {
      title: "Documentation — Refract",
      description:
        "Créez un compte Refract, connectez GitHub, et commencez à nettoyer le code généré par l'IA sur les pull requests que vous ouvrez déjà.",
    },
    headline: "Documentation",
    intro: "Tout ce qu'il vous faut pour utiliser Refract.",
    groups: [
      {
        title: "Commencez ici",
        numbered: true,
        links: [
          { label: "Premiers pas", href: "/docs/getting-started" },
          { label: "Créer un compte", href: "/docs/account" },
          { label: "Connecter GitHub", href: "/docs/connect-github" },
          { label: "Votre premier nettoyage", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "Utiliser Refract",
        links: [
          { label: "Ce que vous verrez sur un pull request", href: "/docs/on-github" },
          { label: "Approuver ou ignorer", href: "/docs/approve" },
          { label: "Le site", href: "/docs/web" },
          { label: "Dépôts", href: "/docs/repositories" },
        ],
      },
      {
        title: "Référence",
        links: [
          { label: "FAQ", href: "/docs/faq" },
          { label: "Sécurité", href: "/security" },
          { label: "Limites", href: "/docs/limits" },
          { label: "Dépannage", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "Premiers pas",
        description: "Créez un compte, connectez GitHub, et ouvrez un pull request. Environ 10 minutes.",
        blocks: [
          { type: "lede", text: "Environ 10 minutes." },
          {
            type: "p",
            text: "Il vous faut un compte GitHub, un dépôt React / TypeScript que vous pouvez connecter, et une adresse e-mail.",
          },
          { type: "h2", text: "1. Créez votre compte" },
          {
            type: "p",
            text: "Allez sur Commencer. Nom, e-mail, mot de passe. Confirmez l'e-mail si on vous le demande, puis connectez-vous.",
          },
          { type: "p", text: "Ce n'est pas « Connexion avec GitHub »." },
          { type: "h2", text: "2. Connectez GitHub" },
          {
            type: "p",
            text: "Vous arriverez sur Connecter GitHub. Installez la GitHub App, choisissez le compte et les dépôts, revenez, et indiquez quels projets Refract doit surveiller.",
          },
          {
            type: "p",
            text: "Tant que ce n'est pas fait, les écrans principaux restent fermés. C'est voulu.",
          },
          { type: "h2", text: "3. Ouvrez un pull request" },
          {
            type: "p",
            text: "Sur un dépôt connecté, ouvrez un pull request. Attendez Refract. Si un nettoyage est prêt, approuvez-le sur GitHub.",
          },
          { type: "h2", text: "4. Utilisez le site quand vous voulez la vue plus longue" },
          {
            type: "p",
            text: "Overview montre ce qui est connecté. Au quotidien, vous restez sur le pull request.",
          },
          {
            type: "html",
            html: 'Ensuite : <a href="/docs/connect-github">Connecter GitHub</a> · <a href="/docs/first-cleanup">Votre premier nettoyage</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "Votre compte Refract",
        description: "Inscrivez-vous avec un nom, un e-mail et un mot de passe. GitHub est une étape à part.",
        blocks: [
          { type: "p", text: "Inscrivez-vous avec un nom, un e-mail et un mot de passe." },
          { type: "html", html: 'Connectez-vous sur <a href="/login">/login</a>.' },
          {
            type: "p",
            text: "Mot de passe oublié : nous enverrons un lien de réinitialisation si cette adresse a un compte.",
          },
          { type: "p", text: "Déconnectez-vous depuis l'application." },
          {
            type: "p",
            text: "Ce compte n'est pas l'autorisation GitHub. Connecter des dépôts est une étape à part.",
          },
          {
            type: "p",
            text: "Sous Paramètres → Compte, vous pouvez modifier le nom que nous affichons dans le produit.",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "Connecter GitHub",
        description:
          "Installez la GitHub App pour que Refract puisse lire le pull request, publier un résultat, et appliquer un nettoyage après votre approbation.",
        blocks: [
          {
            type: "p",
            text: "Refract a besoin de la GitHub App pour lire le pull request, publier un résultat, et — seulement après votre approbation — appliquer un nettoyage.",
          },
          {
            type: "html",
            html: `<ol>
          <li>Connectez-vous à Refract</li>
          <li>Ouvrez Connecter GitHub</li>
          <li>Installez l'application : <a href="${GITHUB_APP_INSTALL_URL}">${GITHUB_APP_INSTALL_URL}</a></li>
          <li>Choisissez des dépôts précis (recommandé)</li>
          <li>Revenez dans Refract et confirmez lesquels surveiller</li>
        </ol>`,
          },
          { type: "h2", text: "Installé contre obligatoire" },
          {
            type: "p",
            text: "Connecté signifie que Refract relit le code nouveau. Il ne bloque pas les fusions tout seul. Si vous voulez que GitHub attende Refract, c'est un contrôle obligatoire que vous réglez dans GitHub — nous pouvons vous y pointer dans Paramètres. Nous ne l'activons jamais pendant l'installation.",
          },
          { type: "h2", text: "Désinstaller" },
          {
            type: "p",
            text: "Retirez l'App dans GitHub → Settings → Applications. Refract cessera de surveiller ces dépôts.",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "Votre premier nettoyage",
        description: "Ouvrez un pull request, attendez Refract, et approuvez un nettoyage sur GitHub.",
        blocks: [
          {
            type: "p",
            text: "Avant de commencer : compte créé, GitHub connecté, au moins un dépôt React / TypeScript sélectionné.",
          },
          {
            type: "ol",
            items: [
              "Ouvrez un pull request",
              "Trouvez Refract dans Checks",
              "Attendez qu'il termine — en attente n'est pas un succès",
              "Lisez le résultat court",
            ],
          },
          { type: "h2", text: "Si un nettoyage est prêt" },
          {
            type: "p",
            text: "Approuvez sur le contrôle. Refract applique le changement à la branche. Il regarde à nouveau. C'est toujours vous qui fusionnez.",
          },
          { type: "h2", text: "S'il vous demande de regarder" },
          {
            type: "p",
            text: "Il a trouvé quelque chose qu'il ne changera pas automatiquement. Lisez l'explication. Corrigez vous-même, ou laissez — c'est vous qui voyez.",
          },
          { type: "h2", text: "Si quelque chose a échoué" },
          {
            type: "p",
            text: "Nous le dirons. Poussez un petit commit pour réessayer. Nous n'afficherons pas un faux résultat vert.",
          },
        ],
      },
      {
        slug: "on-github",
        title: "Sur GitHub",
        description: "Un contrôle. Un commentaire récapitulatif, mis à jour sur place — pas une pile de bruit de bots.",
        blocks: [
          {
            type: "p",
            text: "Un contrôle. Un commentaire récapitulatif, mis à jour sur place — pas une pile de bruit de bots.",
          },
          {
            type: "p",
            text: "Le contrôle peut encore travailler, avoir l'air clair, avoir un nettoyage prêt, vous demander de regarder, ou signaler une erreur.",
          },
          {
            type: "p",
            text: "Quand un nettoyage est prêt, Accepter (et Ignorer) apparaissent sur le contrôle.",
          },
          { type: "h2", text: "Contrôles obligatoires" },
          {
            type: "p",
            text: "Facultatif. À régler dans les règles de branche GitHub si vous voulez que les fusions attendent. Connecter l'application ne le fait pas pour vous.",
          },
        ],
      },
      {
        slug: "approve",
        title: "Approuver ou ignorer",
        description: "Approuver applique un nettoyage sur GitHub. Ignorer signifie que vous choisissez de ne pas l'appliquer.",
        blocks: [
          {
            type: "p",
            text: "Cela se passe sur GitHub, sur le contrôle Refract — pas comme le bouton principal du site.",
          },
          { type: "h2", text: "Approuver" },
          {
            type: "p",
            text: "Applique le nettoyage préparé à la branche. Le contrôle s'exécute à nouveau. Vous fusionnez quand vous êtes prêt. Ce n'est pas une fusion automatique.",
          },
          { type: "h2", text: "Ignorer" },
          {
            type: "p",
            text: "À utiliser quand vous comprenez la note et choisissez de ne pas l'appliquer. Ce n'est pas un « ignorer ça pour toujours » permanent pour tout le projet.",
          },
          { type: "h2", text: "Quand Approuver manque" },
          {
            type: "p",
            text: "Il n'y a pas de nettoyage automatique sûr. Lisez l'explication, ou attendez si le contrôle a échoué.",
          },
        ],
      },
      {
        slug: "web",
        title: "Le site",
        description: "Après la configuration, le site montre ce qui est connecté. Approuver se passe toujours sur GitHub.",
        blocks: [
          { type: "p", text: "Après la configuration, vous verrez :" },
          {
            type: "html",
            html: "<p><strong>Overview</strong> — ce qui est connecté, et plus tard une image simple de si le projet devient plus propre. Les comptes récents ont souvent peu d'historique. C'est honnête, pas cassé.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Repositories</strong> — les projets que vous avez choisis.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Pull requests</strong> — résultats récents, pour la mémoire. L'approbation en direct se passe toujours sur GitHub.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Insights</strong> — des motifs dans le temps, une fois qu'il y a assez d'historique. Nous n'inventons pas un score pour avoir l'air en bonne santé.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Settings</strong> — compte, quels dépôts, et avec quelle rigueur chacun est traité. La facturation vivra ici quand le paiement sera là.</p>",
          },
          { type: "p", text: "Le site n'est pas une seconde boîte pour accepter." },
        ],
      },
      {
        slug: "repositories",
        title: "Dépôts",
        description: "Installer l'App donne l'autorisation. Sélectionner des dépôts choisit ce que Refract surveille.",
        blocks: [
          { type: "p", text: "Commencez par un dépôt produit actif. Ajoutez-en d'autres plus tard dans Paramètres." },
          {
            type: "p",
            text: "Installer l'App sur GitHub donne l'autorisation. Sélectionner des dépôts dans Refract choisit ce que le produit surveille. Il vous faut les deux.",
          },
          { type: "h2", text: "Langages" },
          {
            type: "p",
            text: "Meilleur sur React / TypeScript. Les autres environnements peuvent avoir peu ou pas de couverture. Nous préférons le dire plutôt que feindre la confiance.",
          },
        ],
      },
      {
        slug: "limits",
        title: "Limites",
        description: "Ce que Refract sait bien faire — et ce qu'il ne prétendra pas faire.",
        blocks: [
          {
            type: "p",
            text: "Refract est bon sur des désordres précis qui apparaissent dans le React et le TypeScript générés par l'IA — et sur l'application d'un nettoyage quand ce nettoyage est sûr.",
          },
          {
            type: "p",
            text: "Ce n'est pas une garantie que chaque bug est trouvé. Ce n'est pas une revue humaine complète. Ce n'est pas une reconstruction de votre architecture.",
          },
          {
            type: "p",
            text: "Si nous ne pouvons pas prouver un problème, nous restons silencieux. Si nous ne pouvons pas nettoyer quelque chose en sécurité, nous n'offrons pas Approuver.",
          },
          {
            type: "html",
            html: 'Les très gros changements peuvent prendre plus longtemps. Les limites des offres sont sur la page des <a href="/pricing">tarifs</a>.',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "Dépannage",
        description: "Problèmes courants de configuration et de contrôle GitHub, et comment se débloquer.",
        blocks: [
          { type: "h2", text: "On m'envoie encore vers Connecter GitHub" },
          {
            type: "p",
            text: "La configuration n'est pas terminée tant que l'App n'est pas installée et qu'au moins un dépôt n'est pas sélectionné dans Refract.",
          },
          { type: "h2", text: "Mauvais compte GitHub" },
          {
            type: "p",
            text: "Installez depuis une session navigateur connectée au compte qui possède les dépôts.",
          },
          { type: "h2", text: "Le contrôle n'apparaît jamais" },
          {
            type: "p",
            text: "Confirmez que le dépôt est à la fois installé sur GitHub et sélectionné dans Refract. Attendez une minute. Actualisez Checks.",
          },
          { type: "h2", text: "Approuver n'a rien fait" },
          {
            type: "p",
            text: "Utilisez l'action sur le contrôle, pas seulement le commentaire. Confirmez que l'App a encore la permission d'écrire. Les règles de branche GitHub peuvent bloquer l'application — lisez l'erreur de GitHub.",
          },
          { type: "h2", text: "L'e-mail de réinitialisation n'arrive jamais" },
          { type: "p", text: "Regardez les indésirables. Confirmez l'adresse. Réessayez." },
          { type: "h2", text: "Toujours bloqué" },
          {
            type: "html",
            html: '<a href="/contact">Contact</a> avec : ce que vous attendiez, ce qui s\'est passé, le lien du pull request, et l\'heure (avec le fuseau).',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "FAQ — Refract",
      description:
        "Réponses sur ce qu'est Refract, comment il fonctionne sur GitHub, la confiance, les comptes et les tarifs.",
    },
    title: "FAQ",
    groups: [
      {
        title: "Produit",
        items: [
          {
            q: "Qu'est-ce que Refract ?",
            a: "L'étape après que l'IA a écrit le code. Il transforme le logiciel généré en un code plus propre et plus maintenable — sur les pull requests GitHub que vous ouvrez déjà.",
          },
          {
            q: "Est-ce un relecteur IA ?",
            a: "Non. Ce n'est pas un chatbot qui laisse des dissertations sur votre diff. Il cherche des désordres précis, les explique, et quand il le peut, prépare un nettoyage que vous approuvez.",
          },
          {
            q: "Est-ce qu'il améliorera mon code ou se contentera de me harceler ?",
            a: "Quand un nettoyage est sûr, il peut l'appliquer après votre approbation. Quand ce n'est pas sûr, il vous le dit. Le but est un meilleur projet, pas un fil de commentaires plus long.",
          },
          {
            q: "Est-ce que ça marche avec Cursor / Copilot / ChatGPT ?",
            a: "Oui, de la seule façon qui compte : ces outils écrivent dans GitHub. Refract surveille le résultat. Nous n'avons pas besoin de vivre dans votre éditeur.",
          },
          {
            q: "Quels langages prenez-vous en charge ?",
            a: "React et TypeScript d'abord. Les autres environnements ne sont pas un « oui » silencieux.",
          },
          {
            q: "Est-ce que ça remplace la revue de code ?",
            a: "Non. Ça retire une classe de problèmes de maintenabilité de votre assiette pour que les humains relisent le travail qui a encore besoin d'un humain.",
          },
        ],
      },
      {
        title: "Confiance",
        items: [
          {
            q: "Peut-il changer mon dépôt sans demander ?",
            a: "Non.",
          },
          {
            q: "Allez-vous fusionner mon pull request ?",
            a: "Non. Approuvez un nettoyage, puis c'est vous qui fusionnez.",
          },
          {
            q: "Entraînez-vous des modèles sur notre code ?",
            a: 'Nous traitons le code pour le relire et pour appliquer les nettoyages que vous approuvez. Nous ne vendons pas votre dépôt comme données d\'entraînement. Voir <a href="/security">Sécurité</a>.',
          },
          {
            q: "Et s'il a tort ?",
            a: "Il préfère rater plutôt qu'inventer. Vous pouvez ignorer un nettoyage. Vous voyez toujours le changement avant qu'il fasse partie du projet.",
          },
        ],
      },
      {
        title: "Compte",
        items: [
          {
            q: "Est-ce que je me connecte avec GitHub ?",
            a: "Non. E-mail et mot de passe pour Refract. L'accès GitHub, c'est l'App que vous installez.",
          },
          {
            q: "Pourquoi deux étapes ?",
            a: "Se connecter et accorder l'accès aux dépôts sont des rôles différents. Les séparer garde les permissions claires.",
          },
          {
            q: "Puis-je essayer sans GitHub ?",
            a: "Vous pouvez créer un compte. Le produit reste fermé tant qu'un dépôt n'est pas connecté — il n'y a rien à nettoyer autrement.",
          },
        ],
      },
      {
        title: "Argent",
        items: [
          {
            q: "Les tarifs sont-ils en vigueur ?",
            a: "Les offres sont réelles. Le paiement par carte se déploie. Commencez gratuitement.",
          },
        ],
      },
      {
        title: "Entreprise",
        items: [
          {
            q: "Qui fabrique Refract ?",
            a: "Refract est développé par Devrefract, une entreprise Lintel. Lintel est l'entreprise technologique mère. Devrefract construit des technologies pour développeurs. Refract est son produit actuel.",
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "Sécurité — Refract",
      description:
        "Comment Refract accède à GitHub, ce qu'il lit sur un pull request, et ce qu'il ne fera jamais sans votre approbation.",
      headline: "Votre code. Votre approbation. Rien en silence.",
      paragraphs: [
        "Vous vous connectez à Refract avec un e-mail et un mot de passe.",
        "L'accès GitHub, c'est uniquement l'App que vous installez, sur les dépôts que vous autorisez.",
        "Nous lisons les pull requests pour les relire. Nous publions un résultat. Nous appliquons un nettoyage seulement après votre approbation.",
        "Nous ne fusionnons pas à votre place.",
        "Nous ne vous connectons pas avec GitHub juste pour ouvrir le site.",
        "Nous ne vendons pas votre dépôt comme un produit.",
        "Nous ne faisons pas semblant qu'une revue a réussi quand elle a échoué.",
        "Si nous voyons des secrets dans un pull request, nous vous le disons. Renouvelez tout ce qui a été exposé.",
        "Vous pouvez désinstaller la GitHub App et réduire les dépôts que nous voyons.",
      ],
      operator: `${PRODUCT_NAME} est un produit de ${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
      reportLabel: "Signaler un problème",
      reportHtml: `Utilisez <a href="/contact">Contact</a> et choisissez Sécurité. Nous le traitons en priorité.`,
    },
    contact: {
      title: "Contact — Refract",
      description: "Questions sur Refract, les équipes pionnières, la facturation, ou quelque chose qui a cassé sur un pull request.",
      headline: "Contact",
      intro: "Questions sur Refract, les équipes pionnières, la facturation, ou quelque chose qui a cassé sur un pull request.",
      fields: {
        name: "Nom",
        email: "E-mail",
        topic: "Sujet",
        message: "Message",
        link: "Lien du dépôt ou du pull request (facultatif)",
      },
      topics: ["Produit", "Facturation", "Sécurité", "Autre"],
      submit: "Envoyer le message",
      success: "Merci — nous répondrons à cet e-mail.",
      error: "Quelque chose a échoué. Réessayez.",
      bugs: "Pour les bugs, indiquez ce que vous attendiez, ce qui s'est passé, le lien du pull request, et l'heure.",
    },
    privacy: {
      title: "Confidentialité — Refract",
      description:
        "Ce que Refract collecte, comment il gère l'accès aux dépôts via la GitHub App, et comment nous joindre pour des questions de confidentialité.",
      headline: "Confidentialité",
      status:
        "Ceci est une description de travail de la façon dont Refract traite les comptes et le code. Une politique définitive la remplacera après revue juridique.",
      short: [
        "Compte du site : e-mail et mot de passe.",
        "Accès au code : uniquement via la GitHub App, sur les dépôts que vous autorisez.",
        "Nous traitons le contenu des pull requests pour le relire, appliquer les nettoyages que vous approuvez, et vous montrer l'historique dans le produit.",
        "Nous ne fusionnons pas à votre place.",
        "Nous ne vendons pas le contenu de votre dépôt.",
      ],
      collectHeadline: "Ce que nous collectons",
      collect:
        "E-mail et nom du compte. Installation GitHub et sélection des dépôts. Résultats de revue et l'historique dont le produit a besoin.",
      operator: `${PRODUCT_NAME} est un produit de ${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
      contactHtml: `Les questions de confidentialité passent par <a href="/contact">Contact</a>.`,
      changes: "Quand cette politique change, nous mettons à jour cette page et la date.",
    },
    terms: {
      title: "Conditions — Refract",
      description:
        "Utiliser Refract signifie que vous ne connectez que des dépôts que vous avez le droit de connecter, et que vous utilisez le produit tel qu'il est proposé.",
      headline: "Conditions",
      body: "Les conditions complètes vivront ici. En attendant, utiliser Refract signifie que vous acceptez de ne connecter que des dépôts que vous avez le droit de connecter, et d'utiliser le produit tel qu'il est proposé.",
      operator: `${PRODUCT_NAME} est un produit de ${BRAND_NAME}, une entreprise ${COMPANY_NAME}.`,
      contactHtml: `Pour l'instant, <a href="/contact">Contact</a> pour les questions juridiques.`,
    },
    notFound: {
      title: "Page introuvable — Refract",
      description: "Cette page n'est pas ici.",
      headline: "Cette page n'est pas ici.",
      body: "Le lien est peut-être ancien. Le produit ne l'est pas.",
      cta: "Retour à l'accueil",
    },
  },
};
