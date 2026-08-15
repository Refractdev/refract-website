import {
  BRAND_NAME,
  COMPANY_NAME,
  GITHUB_APP_INSTALL_URL,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const de: ContentPack = {
  ui: {
    backToHome: "Zurück zur Startseite",
    billingPeriod: "Abrechnungszeitraum",
    monthly: "Monatlich",
    yearly: "Jährlich",
    twoMonthsFree: "2 Monate gratis",
    individuals: "Einzelpersonen",
    forTeams: "Für Teams",
    allDocs: "Alle Dokumente",
    documentation: "Dokumentation",
    privacyFooterBefore: "Wir nutzen, was wir brauchen, um das Produkt zu betreiben. Siehe",
    privacyFooterLink: "Datenschutz",
    language: "Sprache",
    skipToContent: "Zum Inhalt springen",
    homeCrumb: "Startseite",
    shortVersion: "Kurzfassung",
    contactHeading: "Kontakt",
    changesHeading: "Änderungen",
    legalLabel: "Rechtliches",
    bestFor: "Am besten für:",
  },
  seo: {
    defaultTitle: "Refract — Die KI hat ihn geschrieben. Mach ihn bereit zum Ausliefern.",
    defaultDescription:
      "Refract macht aus KI-generiertem Code sauberere, konsistentere Software, die du wirklich pflegen kannst.",
    ogTitle: "Die KI hat ihn geschrieben. Mach ihn bereit zum Ausliefern.",
    ogDescription:
      "Der Schritt nach dem Generieren. Refract räumt KI-generierten Code auf und zieht ihn fest, damit du weiter ausliefern kannst.",
    ogImageAlt: "Refract — der Schritt, nachdem die KI den Code geschrieben hat.",
    jsonLdDescription:
      "Refract macht aus KI-generiertem Code sauberere, konsistentere Software, die du wirklich pflegen kannst.",
  },
  nav: {
    marketingLinks: [
      { label: "Produkt", href: "/product" },
      { label: "Preise", href: "/pricing" },
      { label: "Dokumentation", href: "/docs" },
    ],
    footerSections: [
      {
        title: "Produkt",
        links: [
          { label: "Produkt", href: "/product" },
          { label: "Preise", href: "/pricing" },
          { label: "Dokumentation", href: "/docs" },
          { label: "Sicherheit", href: "/security" },
        ],
      },
      {
        title: "Unternehmen",
        links: [
          { label: "Über uns", href: "/about" },
          { label: "Kontakt", href: "/contact" },
          { label: "Datenschutz", href: "/privacy" },
          { label: "Nutzungsbedingungen", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — der Schritt, nachdem die KI den Code geschrieben hat.",
    footerFinePrint: "Gebaut für React und TypeScript auf GitHub.",
    githubAppLabel: "Auf GitHub installieren",
    signIn: "Anmelden",
    getStarted: "Loslegen",
  },
  brand: {
    attribution: `${PRODUCT_NAME} wird von ${BRAND_NAME} entwickelt, einem Unternehmen von ${COMPANY_NAME}.`,
    copyrightLine: `${BRAND_NAME}, ein Unternehmen von ${COMPANY_NAME}.`,
    operatorSentence: `${PRODUCT_NAME} ist ein Produkt von ${BRAND_NAME}, einem Unternehmen von ${COMPANY_NAME}.`,
    about: {
      title: `Über uns — ${BRAND_NAME}`,
      description: `${PRODUCT_NAME} wird von ${BRAND_NAME} entwickelt, einem Unternehmen von ${COMPANY_NAME} mit Fokus auf Entwicklertechnologie.`,
      label: "Unternehmen",
      headline: BRAND_NAME,
      intro: `${PRODUCT_NAME} ist unser aktuelles Produkt. ${BRAND_NAME} ist die Entwicklertechnologie-Marke dahinter. ${COMPANY_NAME} ist das Unternehmen, das ${BRAND_NAME} aufbaut.`,
      sections: [
        {
          title: COMPANY_NAME,
          body: `${COMPANY_NAME} ist das übergeordnete Technologieunternehmen. Es entwickelt und betreibt seine Produkte und künftige Technologievorhaben. Es ist kein Produkt, das mit ${PRODUCT_NAME} konkurriert.`,
        },
        {
          title: BRAND_NAME,
          body: `${BRAND_NAME} ist die entwicklerorientierte Technologiemarke von ${COMPANY_NAME}. Sie baut Infrastruktur und Werkzeuge für die Softwareentwicklung, mit denen Teams Software erstellen, pflegen, verstehen und weiterentwickeln.`,
        },
        {
          title: PRODUCT_NAME,
          body: `${PRODUCT_NAME} ist das aktuelle Flaggschiffprodukt von ${BRAND_NAME}: der Schritt, nachdem die KI den Code geschrieben hat.`,
        },
      ],
    },
  },
  home: {
    seo: {
      title: "Refract — Die KI hat ihn geschrieben. Mach ihn bereit zum Ausliefern.",
      description:
        "Refract nimmt von KI erzeugten Code und macht daraus sauberere, besser organisierte Software — bevor das Chaos zum Projekt wird.",
      ogTitle: "Die KI hat ihn geschrieben. Mach ihn bereit zum Ausliefern.",
      ogDescription:
        "Der Schritt nach dem Generieren. Refract räumt KI-generierten Code auf und zieht ihn fest, damit du weiter ausliefern kannst.",
    },
    hero: {
      eyebrow: "Der Schritt, nachdem die KI den Code geschrieben hat",
      headline: "Die KI hat ihn geschrieben. Mach ihn bereit zum Ausliefern.",
      subhead:
        "Refract nimmt den Code, den deine KI-Werkzeuge erzeugen, und macht daraus etwas Saubereres, Konsistenteres und Leichteres zu behalten — damit das Projekt nicht auseinanderfällt, während es wächst.",
      primary: { label: "Loslegen", href: SIGNUP_PATH },
      secondary: { label: "So funktioniert’s", href: "/product" },
      trust: "Du genehmigst jede Änderung. Refract schreibt dein Projekt nie von allein um.",
      caption: "Bevor es zur Codebasis wird",
    },
    problem: {
      headline: "Funktionierender Code kann trotzdem ein Chaos sein.",
      bullets: [
        "dasselbe Verhalten, kopiert statt geteilt",
        "Oberflächen-Code, der Arbeit macht, die nicht dorthin gehört",
        "übrig gebliebener State und Effects, die nur im Moment Sinn ergaben",
        "eine Struktur, die für eine Datei passte, nicht für ein Produkt",
      ],
      close: "Du brauchst nicht mehr generierten Code. Du brauchst, dass der generierte Code gut bleibt.",
    },
    turn: {
      headline: "Refract ist das, was passiert, nachdem die KI den Code geschrieben hat.",
      lede: "Keine weitere Liste von Beschwerden. Ein saubereres Projekt.",
    },
    result: {
      headline: "Das Ergebnis ist Code, den du behalten kannst.",
      points: [
        {
          title: "Sauberer",
          body: "Das offensichtliche Chaos wird <strong>aus den Oberflächen gezogen</strong> und dorthin gelegt, wo es hingehört.",
        },
        {
          title: "Konsistenter",
          body: "<strong>Wiederholte Logik hört auf, sich zu vermehren.</strong> Das Projekt beginnt, wie ein Produkt auszusehen, nicht wie zwölf Erstentwürfe.",
        },
        {
          title: "Leichter zu ändern",
          body: "Du kannst <strong>das Nächste hinzufügen</strong>, ohne durch ein Labyrinth zu steigen, das niemand absichtlich gebaut hat.",
        },
        {
          title: "Immer noch deins",
          body: "<strong>Nichts ändert sich, bis du ja sagst.</strong> Du siehst, was passiert. Du behältst den Merge-Button.",
        },
      ],
    },
    does: {
      headline: "Es zeigt nicht nur auf Probleme. Es macht den Code besser.",
      points: [
        {
          number: "1",
          title: "Es lernt zuerst das Projekt",
          body: "Refract schaut, wie die Software tatsächlich zusammengebaut ist — nicht nur die letzte geänderte Datei — damit eine Bereinigung zum Projekt passt, das du schon hast.",
        },
        {
          number: "2",
          title: "Es findet das Chaos, das KI oft hinterlässt",
          body: "Kopierte Logik. Daten holen mitten in der Oberfläche. State, den niemand nutzt. Effects, die nachhängen. Struktur, die wehtut, sobald die App wächst.",
        },
        {
          number: "3",
          title: "Es sagt dir, was du zuerst aufräumen sollst",
          body: "Wenn es mehr als ein Problem gibt, bekommst du eine Reihenfolge, die Sinn ergibt — keine Wand aus Lärm.",
        },
        {
          number: "4",
          title: "Es kann die Bereinigung für dich machen",
          body: "Wenn die Änderung sicher und begrenzt ist, bereitet Refract sie vor. Du genehmigst. Es wendet die Änderung an und prüft, ob das Projekt noch zusammenhält. Wenn es die Änderung nicht sicher machen kann, sagt es das — statt zu raten.",
        },
      ],
    },
    world: {
      headline: "Es erscheint dort, wo der Code gerade zum Projekt wird.",
      lede: "Verbinde die Repositories, die dir wichtig sind. Wenn neuer Code vorgeschlagen wird, prüft Refract ihn an Ort und Stelle.",
      caption: "Ein Ergebnis. Du entscheidest.",
      decide: "Du bekommst ein klares Ergebnis:",
      close:
        "Genehmige auf GitHub. Bleib in dem Ablauf, den du schon hast. Refract verlangt nicht, dass du in einem zweiten Posteingang lebst.",
    },
    trust: {
      headline: "Kontrolliert. Sichtbar. In der Praxis umkehrbar — weil du das Sagen hast.",
      points: [
        {
          title: "Du genehmigst.",
          body: "Refract wendet eine Änderung erst an, wenn du es tust.",
        },
        {
          title: "Es bleibt lieber still, als falsch zu liegen.",
          body: "Wenn es ein Problem nicht belegen kann, erfindet es keines, um beschäftigt zu wirken.",
        },
        {
          title: "Wenn es etwas nicht sicher aufräumen kann, tut es nicht so.",
          body: "Du bekommst eine Erklärung, keinen rücksichtslosen Umbau.",
        },
        {
          title: "Es prüft die eigene Arbeit.",
          body: "Nachdem eine Bereinigung gelandet ist, schaut Refract noch einmal. Eine gescheiterte Bereinigung wird nie als Erfolg beschrieben.",
        },
        {
          title: "Es ist kein Chatbot, der deine App umschreibt.",
          body: "Die Bereinigungen, die es anwendet, sind konkret und begrenzt. Kreative Vermutungen sind keine „Korrekturen“.",
        },
      ],
    },
    steps: {
      headline: "Drei Schritte. Dann läuft es, während du arbeitest.",
      note: "Die App zu installieren ist nicht dasselbe wie sich anzumelden. Dein Refract-Konto und dein GitHub-Zugang bleiben absichtlich getrennt.",
      cta: { label: "Loslegen", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "Konto erstellen",
          body: "E-Mail und Passwort. Das ist deine Refract-Anmeldung — keine GitHub-Anmeldung.",
        },
        {
          number: "2",
          title: "GitHub verbinden und Repositories wählen",
          body: "Installiere die Refract-App auf den Projekten, die aufgeräumt werden sollen. Du wählst, welche.",
        },
        {
          number: "3",
          title: "Weiter ausliefern",
          body: "Öffne einen Pull Request, wie du es schon tust. Refract liest die Änderung im Kontext des Projekts. Wenn eine Bereinigung bereit ist, genehmigst du sie. Dann mergst du, wenn du soweit bist.",
        },
      ],
    },
    audience: {
      headline: "Für Menschen, die mit KI bauen und trotzdem mit dem Ergebnis leben müssen.",
      points: [
        {
          title: "Einzelpersonen",
          body: "Du lieferst ein Produkt mit Copilot, Cursor oder dem nächsten Modell. Der Code kommt schnell. Du willst, dass er etwas bleibt, das du pflegen kannst.",
        },
        {
          title: "Teams",
          body: "Mehrere Leute generieren gleichzeitig. Das Repo ist das gemeinsame Gedächtnis. Refract ist, wie dieses Gedächtnis zusammenhängend bleibt.",
        },
        {
          title: "Für heute gebaut",
          body: "React und TypeScript auf GitHub. Dort ist das Problem gerade am lautesten. Andere Technologien kommen, wenn sie echt sind — nicht als Versprechen auf der Startseite.",
        },
      ],
    },
    social: {
      headline: "Teams, die Software generieren, brauchen einen Schritt nach dem Generieren.",
      line: "Genutzt von Entwicklern, die mit KI auf GitHub bauen.",
      invite: "Willst du ein frühes Team sein?",
      inviteHref: "/contact",
      inviteLabel: "Kontaktiere uns",
    },
    honesty: {
      headline: "Was Refract nicht ist.",
      paragraphs: [
        "Es ist keine IDE. Es ist kein Ersatz für deine KI-Programmierwerkzeuge. Es ist kein allgemeines Lint-Werkzeug. Es ist kein Bot, der zwanzig Kommentare an jede Zeile hängt.",
        "Es wird dein gesamtes Produkt nicht über Nacht umbauen. Es wird nicht jedes Sicherheitsproblem automatisch beheben. Es wird nicht für dich mergen.",
        "Es macht die KI-generierten Teile eines React- und TypeScript-Projekts sauberer, klarer und leichter zu behalten — mit dir am Steuer.",
      ],
    },
    cta: {
      headline: "Generiere den Code. Erbe nicht das Chaos.",
      body: "Erstelle ein Konto, verbinde GitHub, und lass Refract die Erstentwürfe den Rest des Weges bringen.",
      primary: { label: "Loslegen", href: SIGNUP_PATH },
      secondary: { label: "Preise ansehen", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "So funktioniert Refract — KI-Code-Bereinigung auf GitHub",
      description:
        "Refract prüft KI-generierten Code auf GitHub-Pull-Requests, bereitet eine Bereinigung vor, wenn sie sicher ist, und wartet auf deine Freigabe.",
      ogTitle: "So funktioniert Refract",
      ogDescription:
        "GitHub verbinden. Weiter ausliefern. Refract räumt KI-generierten Code auf, wenn es sicher ist — und fragt, bevor es etwas anfasst.",
    },
    hero: {
      headline: "Von generiertem Code zu Code, den du behalten kannst.",
      subhead:
        "Refract liest das Projekt, findet, was chaotisch wird, und bereitet eine Bereinigung vor, die du genehmigst. Zum Entscheiden verlässt du GitHub nicht.",
      cta: { label: "Loslegen", href: SIGNUP_PATH },
    },
    loop: {
      headline: "Eine einfache Schleife",
      beats: [
        {
          number: "1",
          title: "Das Projekt sehen",
          body: "Refract schaut auf die Software als Ganzes, damit eine Änderung in einer Oberfläche den Rest respektieren kann.",
        },
        {
          number: "2",
          title: "Finden, was später wehtut",
          body: "Es sucht die Muster, die entstehen, wenn Code schnell generiert wird: kopierte Logik, verhedderte Oberflächen, übrig gebliebener State, Struktur, die nicht gut altert. Wenn etwas Sensibles im Code geblieben ist — etwa ein Zugangsdatum — sagt es dir das. Es „behebt“ Secrets nicht still.",
        },
        {
          number: "3",
          title: "Aufräumen, was es kann",
          body: "Wenn die Bereinigung sicher ist, bekommst du eine konkrete Änderung zum Genehmigen. Wenn nicht, bekommst du eine klare Erklärung statt einer Vermutung.",
        },
        {
          number: "4",
          title: "Prüfen, dann merken",
          body: "Nachdem du genehmigt hast, wendet Refract die Änderung an und schaut noch einmal. Mit der Zeit siehst du, ob das Projekt sauberer wird — oder immer noch das Chaos ausliefert.",
        },
      ],
    },
    places: {
      headline: "Entscheide auf GitHub. Nutze die Website für den Rest.",
      close: "Die Website ist kein zweiter Ort, um Bereinigungen anzunehmen. Die Entscheidung bleibt neben dem Code.",
      github: {
        title: "Auf GitHub",
        items: [
          "Das Ergebnis am Pull Request sehen",
          "Eine Bereinigung genehmigen",
          "Verwerfen, wenn sie nicht passt",
          "Mergen, wenn du soweit bist",
        ],
      },
      web: {
        title: "Auf der Website",
        items: [
          "Dein Konto erstellen",
          "Die GitHub App verbinden",
          "Repositories wählen",
          "Sehen, was verbunden ist, über die Zeit",
        ],
      },
    },
    results: {
      headline: "Du siehst eines von wenigen ehrlichen Ergebnissen",
      items: [
        { title: "Arbeitet noch", body: "Warten. Das ist kein Bestehen." },
        { title: "Sieht klar aus", body: "Von Refract brauchst du bei dieser Änderung nichts." },
        { title: "Bereinigung bereit", body: "Eine sichere Bereinigung ist vorbereitet. Genehmige sie auf GitHub." },
        {
          title: "Schau hin",
          body: "Etwas ist wichtig, und Refract ändert es nicht für dich. Lies die Erklärung.",
        },
        {
          title: "Etwas ist schiefgelaufen",
          body: "Die Analyse ist fehlgeschlagen. Refract sagt das. Es malt keinen falschen Erfolg.",
        },
      ],
    },
    cleans: {
      headline: "Was „sauberer“ in der Praxis heißt",
      body: "Bei React- und TypeScript-Projekten ist Refract besonders gut bei den Resten schneller Generierung:",
      bullets: [
        "Daten holen, vermischt mit der Oberfläche",
        "dieselbe Logik zweimal geschrieben",
        "State, der nie wirklich genutzt wird",
        "Effects, die nach sich selbst nicht aufräumen",
        "fehlende Zeitüberschreitungen und fehlende Fehlerbehandlung an den Rändern",
        "Oberflächen, die Arbeit machen, die woanders hingehört",
      ],
      close:
        "Einiges davon kann es für dich aufräumen. Einiges davon zeigt es nur — absichtlich. Ein schlechter automatischer Umbau ist schlimmer als ein ehrlicher Hinweis.",
    },
    start: {
      headline: "In Minuten live",
      steps: [
        "Konto erstellen",
        "Die GitHub App installieren und Repositories wählen",
        "Einen Pull Request öffnen",
      ],
      note: "GitHub zu verbinden meldet dich nicht bei Refract an, und dich bei Refract anzumelden installiert keinen GitHub-Zugang. Zwei Schritte, zwei Aufgaben.",
      cta: { label: "Konto erstellen", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "Wird das gegen meine KI-Werkzeuge arbeiten?",
        a: "Nein. Generiere weiter. Refract ist der Durchgang, der das Ergebnis pflegbar hält.",
      },
      {
        q: "Ändert es Code ohne mich?",
        a: "Nein. Du genehmigst. Du mergst.",
      },
      {
        q: "Muss ich einen neuen Arbeitsbereich lernen?",
        a: "Nein. Im Alltag bleibst du auf GitHub.",
      },
    ],
  },
  pricing: {
    seo: {
      title: "Preise — Refract | Free, $12 Starter, $24 Pro",
      description:
        "Free $0. Starter $12. Pro $24/Monat. Ultimate $49. Team-Pläne ab $149. Kostenlos starten — bei der Anmeldung wird nichts berechnet.",
      ogTitle: "Refract-Preise — Free bis Pro $24/Monat",
      ogDescription:
        "Free $0. Starter $12. Pro $24/Monat. Team-Pläne ab $149. Der Bezahlvorgang kommt; bei der Anmeldung wird nichts berechnet.",
    },
    hero: {
      headline: "Zahle für sauberere Software — nicht für mehr Lärm.",
      subhead: "Starte auf einem echten Repository. Wechsle den Plan, wenn das Projekt — oder das Team — mehr Raum braucht.",
      priceLine: "Free $0. Starter $12. Pro $24/Monat. Ultimate $49. Teams ab $149.",
      banner:
        "Heute kostenlos starten. Bezahlte Pläne stehen da, damit du weißt, wohin das geht. Der Bezahlvorgang kommt; bei der Anmeldung wird nichts berechnet.",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "Probiere Refract an einem echten Projekt.",
        features: [
          "2 Repositories",
          "50 Prüfungen / Monat",
          "5 Bereinigungen, die du genehmigen kannst / Monat",
          "Hinweis-Ergebnisse auf GitHub",
        ],
        cta: "Loslegen",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Es an deinem eigenen Code sehen",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Für eine einzelne Entwicklerin oder einen einzelnen Entwickler, die KI jeden Tag auf wenigen Projekten nutzen.",
        features: [
          "5 Repositories",
          "150 Prüfungen / Monat",
          "Unbegrenzte Bereinigungen innerhalb dieses Prüfungslimits",
          "Erforderlicher Check auf bis zu 2 Repositories",
        ],
        cta: "Loslegen",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Eine Person, ein paar aktive Repositories",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Für Leute, die mit KI ein echtes Produkt ausliefern.",
        features: [
          "15 Repositories",
          "400 Prüfungen / Monat",
          "Unbegrenzte Bereinigungen innerhalb dieses Prüfungslimits",
          "Erforderlicher Check auf jedem verbundenen Repository",
          "Vollständige Historie, was mit der Zeit sauberer wurde",
        ],
        cta: "Loslegen",
        href: SIGNUP_PATH,
        badge: "Am beliebtesten",
        bestFor: "Der Standardplan",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Für Betreiber mit vielen Repos oder Kundenprojekten.",
        features: [
          "40 Repositories",
          "1.000 Prüfungen / Monat",
          "Unbegrenzte Bereinigungen innerhalb dieses Prüfungslimits",
          "Bevorzugte Prüfung",
          "Alle Schutzoptionen",
        ],
        cta: "Loslegen",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Viele Projekte, eine betreuende Person",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Ein kleines Unternehmen, eine GitHub-Organisation, KI im Alltag.",
        features: [
          "10 Personen",
          "30 Repositories",
          "1 GitHub-Organisation",
          "1.000 Prüfungen / Monat",
        ],
        cta: "Sprich mit uns",
        href: "/contact",
        badge: null,
        bestFor: "Ein kleines Unternehmen",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Mehr Dienste, mehr Volumen, eine echte Geschäftsbeziehung.",
        features: [
          "30 Personen",
          "100 Repositories",
          "2 GitHub-Organisationen",
          "4.000 Prüfungen / Monat",
          "Bevorzugte Prüfung",
          "Einführungsgespräch",
        ],
        cta: "Sprich mit uns",
        href: "/contact",
        badge: null,
        bestFor: "Mehr Volumen",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ Monat",
        yearlyPeriod: "/ Jahr",
        description: "Mehrere Projekte, hohes Volumen, eine benannte Person, die dein Konto kennt.",
        features: [
          "75 Personen",
          "250 Repositories",
          "5 GitHub-Organisationen",
          "12.000 Prüfungen / Monat",
        ],
        cta: "Sprich mit uns",
        href: "/contact",
        badge: null,
        bestFor: "Hohes Volumen",
      },
      {
        name: "Enterprise",
        monthlyPrice: "Ab $2,500",
        yearlyPrice: "Ab $2,500",
        period: "/ Monat",
        yearlyPeriod: "/ Monat",
        description: "Wenn du einen Vertrag, eigene Limits oder eine Sicherheitsprüfung brauchst.",
        features: [],
        cta: "Sprich mit uns",
        href: "/contact",
        badge: null,
        bestFor: "Vertrag und eigene Limits",
        custom: true,
      },
    ],
    footnote:
      "Jährlich sind zwei Monate gratis. „Prüfungen“ heißt jedes Mal, wenn neuer Code an einem Pull Request analysiert wird. Unbegrenzte Bereinigungen liegen trotzdem innerhalb dieses monatlichen Prüfungslimits.",
    value: {
      headline: "Du zahlst nicht für Kommentare.",
      paragraphs: [
        "Du zahlst für ein Projekt, das pflegbar bleibt, während du weiter generierst.",
        "Free ist, wie du eine echte Bereinigung an einem echten Repository spürst. Pro ist, wie das normal wird. Teams ist, wie eine Gruppe, die gleichzeitig generiert, das Repo nicht in zwölf Stile von Erstentwürfen verwandelt.",
        "Wir verlangen nicht extra, weil eine Änderung gesund war. Stille gehört zum Produkt.",
      ],
    },
    faqs: [
      {
        q: "Kann ich heute bezahlen?",
        a: "Erstelle ein Konto und starte. Die Kartenzahlung wird ausgerollt. Bei der Anmeldung erwartet dich keine Überraschungsgebühr.",
      },
      {
        q: "Ist GitHub enthalten?",
        a: "Nein. GitHub ist getrennt. Refract ist unseres.",
      },
      {
        q: "Was passiert, wenn ich ein Limit erreiche?",
        a: "Du siehst eine klare Aufforderung, den Plan zu wechseln. Wir hören nicht still auf und tun so, als sei alles in Ordnung.",
      },
      {
        q: "Berechnet ihr bei Pro pro Person?",
        a: "Nein. Einzelpläne sind nach Repositories und monatlichen Prüfungen bepreist, nicht danach, wie viele Leute getippt haben.",
      },
      {
        q: "Kann ich das auf einem Firmen-Repo nutzen?",
        a: "Ja, wenn du dort GitHub Apps installieren kannst. Für gemeinsame Abrechnung und Sitze nutze Team oder sprich mit uns.",
      },
      {
        q: "Ist Übernehmen / Bereinigung bei Free gesperrt?",
        a: "Free enthält jeden Monat eine kleine Zahl Bereinigungen, damit du das echte Produkt spürst — keine Demo, die nie Code ändert.",
      },
    ],
  },
  docs: {
    seo: {
      title: "Dokumentation — Refract",
      description:
        "Erstelle ein Refract-Konto, verbinde GitHub, und beginne, KI-generierten Code auf den Pull Requests aufzuräumen, die du schon öffnest.",
    },
    headline: "Dokumentation",
    intro: "Alles, was du brauchst, um Refract zu nutzen.",
    groups: [
      {
        title: "Hier anfangen",
        numbered: true,
        links: [
          { label: "Erste Schritte", href: "/docs/getting-started" },
          { label: "Konto erstellen", href: "/docs/account" },
          { label: "GitHub verbinden", href: "/docs/connect-github" },
          { label: "Deine erste Bereinigung", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "Refract nutzen",
        links: [
          { label: "Was du an einem Pull Request siehst", href: "/docs/on-github" },
          { label: "Genehmigen oder verwerfen", href: "/docs/approve" },
          { label: "Die Website", href: "/docs/web" },
          { label: "Repositories", href: "/docs/repositories" },
        ],
      },
      {
        title: "Referenz",
        links: [
          { label: "Häufige Fragen", href: "/docs/faq" },
          { label: "Sicherheit", href: "/security" },
          { label: "Limits", href: "/docs/limits" },
          { label: "Fehlerbehebung", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "Erste Schritte",
        description: "Konto erstellen, GitHub verbinden, und einen Pull Request öffnen. Etwa 10 Minuten.",
        blocks: [
          { type: "lede", text: "Etwa 10 Minuten." },
          {
            type: "p",
            text: "Du brauchst ein GitHub-Konto, ein React- / TypeScript-Repository, das du verbinden kannst, und eine E-Mail-Adresse.",
          },
          { type: "h2", text: "1. Konto erstellen" },
          {
            type: "p",
            text: "Geh zu Loslegen. Name, E-Mail, Passwort. E-Mail bestätigen, wenn wir danach fragen, dann anmelden.",
          },
          { type: "p", text: "Das ist nicht „Mit GitHub anmelden“." },
          { type: "h2", text: "2. GitHub verbinden" },
          {
            type: "p",
            text: "Du landest bei GitHub verbinden. Installiere die GitHub App, wähle Konto und Repositories, komm zurück, und entscheide, welche Projekte Refract beobachten soll.",
          },
          {
            type: "p",
            text: "Bis das erledigt ist, bleiben die Hauptbildschirme geschlossen. Das ist Absicht.",
          },
          { type: "h2", text: "3. Einen Pull Request öffnen" },
          {
            type: "p",
            text: "In einem verbundenen Repo einen PR öffnen. Auf Refract warten. Wenn eine Bereinigung bereit ist, auf GitHub genehmigen.",
          },
          { type: "h2", text: "4. Die Website nutzen, wenn du den längeren Blick willst" },
          {
            type: "p",
            text: "Die Übersicht zeigt, was verbunden ist. Im Alltag bleibst du am Pull Request.",
          },
          {
            type: "html",
            html: 'Weiter: <a href="/docs/connect-github">GitHub verbinden</a> · <a href="/docs/first-cleanup">Deine erste Bereinigung</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "Dein Refract-Konto",
        description: "Registriere dich mit Name, E-Mail und Passwort. GitHub ist ein eigener Schritt.",
        blocks: [
          { type: "p", text: "Registriere dich mit Name, E-Mail und Passwort." },
          { type: "html", html: 'Anmelden unter <a href="/login">/login</a>.' },
          {
            type: "p",
            text: "Passwort vergessen: Wir schicken einen Link zum Zurücksetzen, wenn diese Adresse ein Konto hat.",
          },
          { type: "p", text: "Abmelden in der App." },
          {
            type: "p",
            text: "Dieses Konto ist keine GitHub-Berechtigung. Repositories zu verbinden ist ein eigener Schritt.",
          },
          {
            type: "p",
            text: "Unter Einstellungen → Konto kannst du den Namen ändern, den wir im Produkt zeigen.",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "GitHub verbinden",
        description:
          "Installiere die GitHub App, damit Refract den Pull Request lesen, ein Ergebnis posten und nach deiner Freigabe eine Bereinigung anwenden kann.",
        blocks: [
          {
            type: "p",
            text: "Refract braucht die GitHub App, um den Pull Request zu lesen, ein Ergebnis zu posten und — erst nach deiner Freigabe — eine Bereinigung anzuwenden.",
          },
          {
            type: "html",
            html: `<ol>
          <li>Bei Refract anmelden</li>
          <li>GitHub verbinden öffnen</li>
          <li>Die App installieren: <a href="${GITHUB_APP_INSTALL_URL}">${GITHUB_APP_INSTALL_URL}</a></li>
          <li>Bestimmte Repositories wählen (empfohlen)</li>
          <li>Zu Refract zurückkehren und bestätigen, welche beobachtet werden sollen</li>
        </ol>`,
          },
          { type: "h2", text: "Installiert gegen erforderlich" },
          {
            type: "p",
            text: "Verbunden heißt, Refract prüft neuen Code. Es blockiert Merges nicht von allein. Wenn GitHub auf Refract warten soll, ist das ein erforderlicher Check, den du in GitHub setzt — in den Einstellungen können wir dich dorthin führen. Beim Installieren schalten wir das nie ein.",
          },
          { type: "h2", text: "Deinstallieren" },
          {
            type: "p",
            text: "Entferne die App in GitHub → Einstellungen → Applications. Refract hört auf, diese Repositories zu beobachten.",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "Deine erste Bereinigung",
        description: "Öffne einen Pull Request, warte auf Refract, und genehmige eine Bereinigung auf GitHub.",
        blocks: [
          {
            type: "p",
            text: "Bevor du startest: Konto erstellt, GitHub verbunden, mindestens ein React- / TypeScript-Repository ausgewählt.",
          },
          {
            type: "ol",
            items: [
              "Einen Pull Request öffnen",
              "Refract unter Checks finden",
              "Warten, bis es fertig ist — ausstehend ist kein Erfolg",
              "Das kurze Ergebnis lesen",
            ],
          },
          { type: "h2", text: "Wenn eine Bereinigung bereit ist" },
          {
            type: "p",
            text: "Am Check genehmigen. Refract wendet die Änderung auf den Branch an. Es schaut noch einmal. Du mergst weiterhin.",
          },
          { type: "h2", text: "Wenn es dich bittet hinzuschauen" },
          {
            type: "p",
            text: "Es hat etwas gefunden, das es nicht automatisch ändert. Lies die Erklärung. Repariere es selbst, oder lass es — das entscheidest du.",
          },
          { type: "h2", text: "Wenn etwas schiefgelaufen ist" },
          {
            type: "p",
            text: "Wir sagen das. Push einen kleinen Commit und versuche es erneut. Wir zeigen kein gefälschtes grünes Ergebnis.",
          },
        ],
      },
      {
        slug: "on-github",
        title: "Auf GitHub",
        description: "Ein Check. Ein Zusammenfassungskommentar, an Ort und Stelle aktualisiert — kein Stapel Bot-Lärm.",
        blocks: [
          {
            type: "p",
            text: "Ein Check. Ein Zusammenfassungskommentar, an Ort und Stelle aktualisiert — kein Stapel Bot-Lärm.",
          },
          {
            type: "p",
            text: "Der Check kann noch arbeiten, klar aussehen, eine Bereinigung bereit haben, dich bitten hinzuschauen oder einen Fehler melden.",
          },
          {
            type: "p",
            text: "Wenn eine Bereinigung bereit ist, erscheinen Übernehmen (und Verwerfen) am Check.",
          },
          { type: "h2", text: "Erforderliche Checks" },
          {
            type: "p",
            text: "Optional. In den GitHub-Branch-Regeln setzen, wenn Merges warten sollen. Die App zu verbinden macht das nicht für dich.",
          },
        ],
      },
      {
        slug: "approve",
        title: "Genehmigen oder verwerfen",
        description: "Genehmigen wendet eine Bereinigung auf GitHub an. Verwerfen heißt, du wählst, sie nicht anzuwenden.",
        blocks: [
          {
            type: "p",
            text: "Das passiert auf GitHub, am Refract-Check — nicht als Hauptbutton auf der Website.",
          },
          { type: "h2", text: "Genehmigen" },
          {
            type: "p",
            text: "Wendet die vorbereitete Bereinigung auf den Branch an. Der Check läuft erneut. Du mergst, wenn du soweit bist. Das ist kein automatisches Mergen.",
          },
          { type: "h2", text: "Verwerfen" },
          {
            type: "p",
            text: "Nutze das, wenn du den Hinweis verstehst und ihn nicht anwenden willst. Es ist kein dauerhaftes „für immer ignorieren“ für das ganze Projekt.",
          },
          { type: "h2", text: "Wenn Genehmigen fehlt" },
          {
            type: "p",
            text: "Es gibt keine sichere automatische Bereinigung. Lies die Erklärung, oder warte, wenn der Check fehlgeschlagen ist.",
          },
        ],
      },
      {
        slug: "web",
        title: "Die Website",
        description: "Nach der Einrichtung zeigt die Website, was verbunden ist. Genehmigen passiert weiterhin auf GitHub.",
        blocks: [
          { type: "p", text: "Nach der Einrichtung siehst du:" },
          {
            type: "html",
            html: "<p><strong>Übersicht</strong> — was verbunden ist, und später ein einfaches Bild, ob das Projekt sauberer wird. Frühe Konten haben oft wenig Historie. Das ist ehrlich, nicht kaputt.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Repositories</strong> — die Projekte, die du gewählt hast.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Pull Requests</strong> — aktuelle Ergebnisse, zum Erinnern. Live genehmigen passiert weiterhin auf GitHub.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Einblicke</strong> — Muster über die Zeit, sobald genug Historie da ist. Wir erfinden keine Punktzahl, um gesund zu wirken.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Einstellungen</strong> — Konto, welche Repositories, und wie streng jedes behandelt wird. Die Abrechnung kommt hierher, sobald der Bezahlvorgang startet.</p>",
          },
          { type: "p", text: "Die Website ist kein zweiter Annahme-Posteingang." },
        ],
      },
      {
        slug: "repositories",
        title: "Repositories",
        description: "Die App zu installieren gibt die Berechtigung. Repositories auszuwählen bestimmt, was Refract beobachtet.",
        blocks: [
          { type: "p", text: "Starte mit einem aktiven Produkt-Repo. Weitere später in den Einstellungen hinzufügen." },
          {
            type: "p",
            text: "Die App auf GitHub zu installieren gibt die Berechtigung. Repositories in Refract auszuwählen bestimmt, was das Produkt beobachtet. Du brauchst beides.",
          },
          { type: "h2", text: "Sprachen" },
          {
            type: "p",
            text: "Am besten bei React / TypeScript. Andere Technologien können wenig oder keine Abdeckung bekommen. Das sagen wir lieber, als Sicherheit vorzutäuschen.",
          },
        ],
      },
      {
        slug: "limits",
        title: "Limits",
        description: "Wobei Refract gut ist — und was es nicht vortäuscht zu tun.",
        blocks: [
          {
            type: "p",
            text: "Refract ist gut bei konkreten Unordnungen, die in KI-generiertem React und TypeScript auftauchen — und dabei, eine Bereinigung anzuwenden, wenn sie sicher ist.",
          },
          {
            type: "p",
            text: "Es ist keine Garantie, dass jeder Fehler gefunden wird. Es ist keine vollständige menschliche Prüfung. Es ist kein Umbau deiner Architektur.",
          },
          {
            type: "p",
            text: "Wenn wir ein Problem nicht belegen können, bleiben wir still. Wenn wir etwas nicht sicher aufräumen können, bieten wir Genehmigen nicht an.",
          },
          {
            type: "html",
            html: 'Sehr große Änderungen können länger dauern. Planlimits stehen auf der Seite <a href="/pricing">Preise</a>.',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "Fehlerbehebung",
        description: "Häufige Probleme bei der Einrichtung und bei GitHub-Checks, und wie du weiterkommst.",
        blocks: [
          { type: "h2", text: "Ich werde immer zu GitHub verbinden geschickt" },
          {
            type: "p",
            text: "Die Einrichtung ist erst fertig, wenn die App installiert ist und in Refract mindestens ein Repository ausgewählt ist.",
          },
          { type: "h2", text: "Falsches GitHub-Konto" },
          {
            type: "p",
            text: "Installiere aus einer Browsersitzung, die bei dem Konto angemeldet ist, dem die Repositories gehören.",
          },
          { type: "h2", text: "Der Check erscheint nie" },
          {
            type: "p",
            text: "Bestätige, dass das Repo sowohl auf GitHub installiert als auch in Refract ausgewählt ist. Eine Minute warten. Checks aktualisieren.",
          },
          { type: "h2", text: "Genehmigen hat nichts bewirkt" },
          {
            type: "p",
            text: "Nutze die Aktion am Check, nicht nur den Kommentar. Bestätige, dass die App noch Schreibrechte hat. GitHub-Branch-Regeln können das Anwenden blockieren — lies die Fehlermeldung von GitHub.",
          },
          { type: "h2", text: "Die E-Mail zum Zurücksetzen kommt nie an" },
          { type: "p", text: "Den Spam-Ordner prüfen. Die Adresse bestätigen. Noch einmal versuchen." },
          { type: "h2", text: "Immer noch festgefahren" },
          {
            type: "html",
            html: '<a href="/contact">Kontakt</a> mit: was du erwartet hast, was passiert ist, dem Link zum Pull Request und der Uhrzeit (mit Zeitzone).',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "Häufige Fragen — Refract",
      description:
        "Antworten dazu, was Refract ist, wie es auf GitHub arbeitet, Vertrauen, Konten und Preise.",
    },
    title: "Häufige Fragen",
    groups: [
      {
        title: "Produkt",
        items: [
          {
            q: "Was ist Refract?",
            a: "Der Schritt, nachdem die KI den Code geschrieben hat. Es macht aus generierter Software saubereren, pflegbareren Code — auf den GitHub-Pull-Requests, die du schon öffnest.",
          },
          {
            q: "Ist das ein KI-Reviewer?",
            a: "Nein. Es ist kein Chatbot, der Aufsätze an deine Änderung hängt. Es sucht konkrete Unordnungen, erklärt sie und bereitet, wenn es kann, eine Bereinigung vor, die du genehmigst.",
          },
          {
            q: "Macht es meinen Code besser oder nörgelt es nur?",
            a: "Wenn eine Bereinigung sicher ist, kann es sie nach deiner Freigabe anwenden. Wenn nicht, sagt es dir das. Es geht um ein besseres Projekt, nicht um einen längeren Kommentarthread.",
          },
          {
            q: "Funktioniert es mit Cursor / Copilot / ChatGPT?",
            a: "Ja, auf die einzige Weise, die zählt: Diese Werkzeuge schreiben nach GitHub. Refract beobachtet das Ergebnis. Wir müssen nicht in deinem Editor leben.",
          },
          {
            q: "Welche Sprachen unterstützt ihr?",
            a: "Zuerst React und TypeScript. Andere Technologien sind kein stilles „Ja“.",
          },
          {
            q: "Ersetzt es Code Review?",
            a: "Nein. Es nimmt eine Klasse von Wartbarkeitsproblemen von deinem Teller, damit Menschen die Arbeit prüfen können, die noch einen Menschen braucht.",
          },
        ],
      },
      {
        title: "Vertrauen",
        items: [
          {
            q: "Kann es mein Repository ändern, ohne zu fragen?",
            a: "Nein.",
          },
          {
            q: "Merget ihr meinen Pull Request?",
            a: "Nein. Genehmige eine Bereinigung, dann mergst du.",
          },
          {
            q: "Trainiert ihr Modelle mit unserem Code?",
            a: 'Wir verarbeiten Code, um ihn zu prüfen und die Bereinigungen anzuwenden, die du genehmigst. Wir verkaufen dein Repository nicht als Trainingsdaten. Siehe <a href="/security">Sicherheit</a>.',
          },
          {
            q: "Was, wenn es falsch liegt?",
            a: "Es lässt lieber etwas aus, als etwas zu erfinden. Du kannst eine Bereinigung verwerfen. Du siehst die Änderung immer, bevor sie Teil des Projekts wird.",
          },
        ],
      },
      {
        title: "Konto",
        items: [
          {
            q: "Melde ich mich mit GitHub an?",
            a: "Nein. E-Mail und Passwort für Refract. Der GitHub-Zugang ist die App, die du installierst.",
          },
          {
            q: "Warum zwei Schritte?",
            a: "Sich anzumelden und Repository-Zugang zu gewähren sind verschiedene Aufgaben. Getrennt zu halten hält Berechtigungen klar.",
          },
          {
            q: "Kann ich ohne GitHub ausprobieren?",
            a: "Du kannst ein Konto erstellen. Das Produkt bleibt geschlossen, bis ein Repository verbunden ist — sonst gibt es nichts aufzuräumen.",
          },
        ],
      },
      {
        title: "Geld",
        items: [
          {
            q: "Sind die Preise live?",
            a: "Die Pläne sind echt. Die Kartenzahlung wird ausgerollt. Kostenlos starten.",
          },
        ],
      },
      {
        title: "Unternehmen",
        items: [
          {
            q: "Wer macht Refract?",
            a: "Refract wird von Devrefract entwickelt, einem Unternehmen von Lintel. Lintel ist das übergeordnete Technologieunternehmen. Devrefract baut Entwicklertechnologie. Refract ist das aktuelle Produkt.",
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "Sicherheit — Refract",
      description:
        "Wie Refract auf GitHub zugreift, was es an einem Pull Request liest, und was es ohne deine Freigabe nie tut.",
      headline: "Dein Code. Deine Freigabe. Nichts im Stillen.",
      paragraphs: [
        "Du meldest dich bei Refract mit E-Mail und Passwort an.",
        "GitHub-Zugang ist nur die App, die du installierst, auf den Repositories, die du erlaubst.",
        "Wir lesen Pull Requests, um sie zu prüfen. Wir posten ein Ergebnis. Wir wenden eine Bereinigung erst nach deiner Freigabe an.",
        "Wir mergen nicht für dich.",
        "Wir melden dich nicht mit GitHub an, nur um die Website zu öffnen.",
        "Wir verkaufen dein Repository nicht als Produkt.",
        "Wir tun nicht so, als sei eine Prüfung gelungen, wenn sie gescheitert ist.",
        "Wenn wir Zugangsdaten in einem Pull Request sehen, sagen wir dir das. Rotiere alles, was offengelegt wurde.",
        "Du kannst die GitHub App deinstallieren und eingrenzen, welche Repositories wir sehen.",
      ],
      operator: `${PRODUCT_NAME} ist ein Produkt von ${BRAND_NAME}, einem Unternehmen von ${COMPANY_NAME}.`,
      reportLabel: "Ein Problem melden",
      reportHtml: `Nutze <a href="/contact">Kontakt</a> und wähle Sicherheit. Das behandeln wir mit Vorrang.`,
    },
    contact: {
      title: "Kontakt — Refract",
      description: "Fragen zu Refract, frühen Teams, Abrechnung oder etwas, das an einem Pull Request kaputtging.",
      headline: "Kontakt",
      intro: "Fragen zu Refract, frühen Teams, Abrechnung oder etwas, das an einem Pull Request kaputtging.",
      fields: {
        name: "Name",
        email: "E-Mail",
        topic: "Thema",
        message: "Nachricht",
        link: "Repository- oder Pull-Request-Link (optional)",
      },
      topics: ["Produkt", "Abrechnung", "Sicherheit", "Sonstiges"],
      submit: "Nachricht senden",
      success: "Danke — wir antworten an diese E-Mail.",
      error: "Etwas ist schiefgelaufen. Noch einmal versuchen.",
      bugs: "Bei Fehlern: was du erwartet hast, was passiert ist, den Link zum Pull Request und die Uhrzeit.",
    },
    privacy: {
      title: "Datenschutz — Refract",
      description:
        "Was Refract erhebt, wie es über die GitHub App auf Repositories zugreift, und wie du uns bei Datenschutzfragen erreichst.",
      headline: "Datenschutz",
      status:
        "Das ist eine Arbeitsbeschreibung, wie Refract Konten und Code behandelt. Eine endgültige Richtlinie ersetzt sie nach rechtlicher Prüfung.",
      short: [
        "Website-Konto: E-Mail und Passwort.",
        "Code-Zugang: nur über die GitHub App, auf Repositories, die du erlaubst.",
        "Wir verarbeiten den Inhalt von Pull Requests, um ihn zu prüfen, von dir genehmigte Bereinigungen anzuwenden und dir Historie im Produkt zu zeigen.",
        "Wir mergen nicht für dich.",
        "Wir verkaufen den Inhalt deines Repositories nicht.",
      ],
      collectHeadline: "Was wir erheben",
      collect:
        "Konto-E-Mail und Name. GitHub-Installation und Repository-Auswahl. Prüfungsergebnisse und die Historie, die das Produkt braucht.",
      operator: `${PRODUCT_NAME} ist ein Produkt von ${BRAND_NAME}, einem Unternehmen von ${COMPANY_NAME}.`,
      contactHtml: `Datenschutzfragen laufen über <a href="/contact">Kontakt</a>.`,
      changes: "Wenn sich diese Richtlinie ändert, aktualisieren wir diese Seite und das Datum.",
    },
    terms: {
      title: "Nutzungsbedingungen — Refract",
      description:
        "Die Nutzungsbedingungen für Refract: Konten, GitHub-Zugriff, Freigabe, Pläne und was wir mit deinem Code tun und nicht tun.",
      headline: "Nutzungsbedingungen",
      status:
        "Das ist eine vorläufige Beschreibung der Nutzung von Refract. Eine endgültige Vereinbarung ersetzt sie nach rechtlicher Prüfung.",
      updated: "Zuletzt aktualisiert: 15. August 2026",
      operator: `${PRODUCT_NAME} ist ein Produkt von ${BRAND_NAME}, einem Unternehmen von ${COMPANY_NAME}.`,
      short: [
        "Verbinde nur Repositories, die du verbinden darfst.",
        "Du genehmigst jede Bereinigung. Refract merged nicht für dich und schreibt ein Projekt nicht von allein um.",
        "Codezugriff nur über die GitHub App, auf Repositories, die du erlaubst.",
        "Der Code bleibt deiner. Wir verkaufen keine Repository-Inhalte.",
        "Starte kostenlos. Checkout kommt; bei der Anmeldung wirst du nicht belastet.",
      ],
      sections: [
        {
          title: "Diese Bedingungen",
          paragraphs: [
            "Diese Bedingungen gelten, wenn du Refract nutzt: die Website, das Produkt und die GitHub App. Wenn du nicht einverstanden bist, nutze das Produkt nicht.",
            "Die Bedingungen von GitHub gelten weiter für GitHub. Diese Bedingungen gelten für Refract.",
          ],
        },
        {
          title: "Das Produkt",
          paragraphs: [
            "Refract prüft Pull Requests auf Muster, die KI-generierten Code schwer haltbar machen. Wenn eine Bereinigung sicher ist, bereitet es eine Änderung vor, die du auf GitHub genehmigst. Wenn nicht, erklärt es. Es täuscht keinen erfolgreichen Review vor, wenn einer fehlgeschlagen ist.",
            "Refract ersetzt kein menschliches Review, deinen Editor oder GitHub. Es merged nicht für dich.",
          ],
        },
        {
          title: "Dein Konto",
          paragraphs: [
            "Du erstellst ein Konto mit E-Mail und Passwort. Du bist für dieses Konto verantwortlich. Behalte das Passwort für dich.",
            "Wenn du Refract für eine Organisation nutzt, bestätigst du, dass du ihre Repositories verbinden und diese Bedingungen für diese Organisation annehmen darfst.",
          ],
        },
        {
          title: "GitHub und deine Repositories",
          paragraphs: [
            "GitHub-Zugriff ist nur die App, die du installierst, auf den Repositories, die du erlaubst. Wir melden dich nicht mit GitHub an, nur um die Website zu öffnen.",
            "Du erklärst, dass du diese Repositories verbinden darfst. Wenn nicht, verbinde sie nicht.",
            "Du kannst die GitHub App jederzeit deinstallieren oder einschränken, welche Repositories wir sehen.",
          ],
        },
        {
          title: "Freigabe",
          paragraphs: [
            "Wir verarbeiten Pull-Request-Inhalte, um sie zu prüfen, von dir genehmigte Bereinigungen anzuwenden und dir den Verlauf im Produkt zu zeigen.",
            "Eine Bereinigung landet erst, nachdem du sie auf GitHub genehmigt hast. Die Entscheidung bleibt neben dem Code. Du bleibst verantwortlich für das, was du mergen.",
          ],
        },
        {
          title: "Zulässige Nutzung",
          paragraphs: [
            "Verbinde keinen Code, den du nicht verbinden darfst. Versuche nicht, den Dienst zu knacken, zu scrapen oder zu überlasten. Nutze Refract nicht, um Malware zu verbergen oder offengelegte Zugangsdaten zu ignorieren.",
            "Wenn wir Zugangsdaten in einem Pull Request sehen, sagen wir es dir. Das Rotieren des Exponierten liegt bei dir.",
          ],
        },
        {
          title: "Pläne und Abrechnung",
          paragraphs: [
            "Pläne und Limits stehen unter Preise. Der kostenlose Plan existiert, damit du Refract an einem echten Repository ausprobieren kannst.",
            "Bezahlte Pläne sind aufgeführt, damit du weißt, wohin das geht. Checkout kommt; bei der Anmeldung wirst du nicht belastet. Wenn die Abrechnung startet, sagen Website und Checkout das, bevor du zahlst.",
          ],
        },
        {
          title: "Dein Code",
          paragraphs: [
            "Der Code bleibt deiner. Ein Repository zu verbinden überträgt uns kein Eigentum.",
            "Wir verkaufen deine Repository-Inhalte nicht. Wir nutzen sie nicht als Produkt.",
            "Name, Website und Produkt von Refract gehören Devrefract, einem Unternehmen von Lintel.",
          ],
        },
        {
          title: "Verfügbarkeit",
          paragraphs: [
            "Wir arbeiten daran, Refract am Laufen zu halten. Wir versprechen nicht, dass es immer erreichbar ist oder jeder Review vollständig oder korrekt ist.",
            "Behandle ein Ergebnis als etwas, das du noch beurteilen musst. Refract ist ein Werkzeug, keine Garantie.",
          ],
        },
        {
          title: "Wenn etwas schiefläuft",
          paragraphs: [
            "Refract wird bereitgestellt, wie es ist. Soweit gesetzlich zulässig haften wir nicht für entgangenen Gewinn, verlorenen Code, Verzögerung oder andere indirekte Schäden durch die Nutzung — oder Nichtnutzung — des Produkts.",
          ],
        },
        {
          title: "Aufhören",
          paragraphs: [
            "Du kannst Refract jederzeit nicht mehr nutzen. Deinstalliere die GitHub App, um den Zugriff auf deine Repositories zu kappen.",
            "Wir können den Zugang sperren oder beenden, wenn du diese Bedingungen brichst oder den Dienst missbrauchst. Für Kontofragen nutze Kontakt.",
          ],
        },
      ],
      contactHtml: `Rechtliche Fragen gehen über <a href="/contact">Kontakt</a>.`,
      changes:
        "Wenn sich diese Bedingungen ändern, aktualisieren wir diese Seite und das Datum. Wenn du Refract nach einer Änderung weiter nutzt, akzeptierst du die aktualisierten Bedingungen.",
    },
    notFound: {
      title: "Seite nicht gefunden — Refract",
      description: "Diese Seite ist nicht hier.",
      headline: "Diese Seite ist nicht hier.",
      body: "Der Link kann alt sein. Das Produkt ist es nicht.",
      cta: "Zurück zur Startseite",
    },
  },
};
