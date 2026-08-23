import {
  BRAND_NAME,
  COMPANY_NAME,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const es: ContentPack = {
  ui: {
    backToHome: "Volver al inicio",
    billingPeriod: "Periodo de facturación",
    monthly: "Mensual",
    yearly: "Anual",
    twoMonthsFree: "2 meses gratis",
    individuals: "Particulares",
    forTeams: "Para equipos",
    allDocs: "Toda la documentación",
    documentation: "Documentación",
    privacyFooterBefore: "Usamos lo necesario para operar el producto. Consulta",
    privacyFooterLink: "Privacidad",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    homeCrumb: "Inicio",
    shortVersion: "Versión corta",
    contactHeading: "Contacto",
    changesHeading: "Cambios",
    legalLabel: "Legal",
    bestFor: "Ideal para:",
    homeAria: "Inicio de Refract",
    openMenu: "Abrir menú",
    githubHeading: "GitHub",
    connectHeading: "Conectar",
  },
  seo: {
    defaultTitle: "Refract — La IA lo escribió. Déjalo listo para publicar.",
    defaultDescription:
      "Refract convierte el código generado por IA en software más limpio y coherente, que de verdad puedes mantener.",
    ogTitle: "La IA lo escribió. Déjalo listo para publicar.",
    ogDescription:
      "El paso después de generar. Refract limpia y afina el código generado por IA para que sigas publicando.",
    ogImageAlt: "Refract — el paso que sigue cuando la IA escribe el código.",
    jsonLdDescription:
      "Refract convierte el código generado por IA en software más limpio y coherente, que de verdad puedes mantener.",
  },
  nav: {
    marketingLinks: [
      { label: "Producto", href: "/product" },
      { label: "Precios", href: "/pricing" },
      { label: "Documentación", href: "/docs" },
    ],
    footerSections: [
      {
        title: "Producto",
        links: [
          { label: "Producto", href: "/product" },
          { label: "Precios", href: "/pricing" },
          { label: "Seguridad", href: "/security" },
        ],
      },
      {
        title: "Documentación",
        links: [
          { label: "Primeros pasos", href: "/docs/getting-started" },
          { label: "Aprobar", href: "/docs/approve" },
          { label: "FAQ", href: "/docs/faq" },
          { label: "Toda la documentación", href: "/docs" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Acerca de", href: "/about" },
          { label: "Contacto", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidad", href: "/privacy" },
          { label: "Términos", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — el paso que sigue cuando la IA escribe el código.",
    footerFinePrint: "Hecho para React y TypeScript en GitHub.",
    githubAppLabel: "Conectar GitHub",
    discordLabel: "Discord",
    signIn: "Iniciar sesión",
    getStarted: "Empezar",
  },
  brand: {
    attribution: `${PRODUCT_NAME} está creado por ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
    copyrightLine: `${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
    operatorSentence: `${PRODUCT_NAME} es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
    about: {
      title: `Acerca de — ${PRODUCT_NAME}`,
      description: `${PRODUCT_NAME} es el paso después de que la IA escribe el código. Es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
      label: "Empresa",
      headline: PRODUCT_NAME,
      intro: `${PRODUCT_NAME} revisa código generado por IA en pull requests de GitHub, prepara una limpieza cuando es seguro y espera tu aprobación.`,
      sections: [
        {
          title: "Quién lo construye",
          body: `${PRODUCT_NAME} es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
        },
      ],
      founder: {
        label: "La persona detrás",
        name: "Adilson Lopes",
        role: "Fundador de Lintel · Creador de Refract",
        story:
          "Refract lo construye Adilson Lopes, fundador de Lintel. Nacido en Angola y afincado en Portugal, está construyendo el producto alrededor de una convicción simple: si la IA cambia cómo se escribe el software, las herramientas para mantenerlo —revisarlo, limpiarlo, dejarlo crecer— también tienen que cambiar.",
        company: "Lintel es la empresa detrás de Refract.",
        linkedinLabel: "LinkedIn",
      },
    },
  },
  home: {
    seo: {
      title: "Refract — La IA lo escribió. Déjalo listo para publicar.",
      description:
        "Refract toma el código generado por IA y lo convierte en software más limpio y organizado — antes de que el desorden se convierta en el proyecto.",
      ogTitle: "La IA lo escribió. Déjalo listo para publicar.",
      ogDescription:
        "El paso después de generar. Refract limpia y afina el código generado por IA para que sigas publicando.",
    },
    hero: {
      pill: { label: "Aprobar en el GitHub Check", href: "/docs/approve" },
      headline: "La IA lo escribió. Déjalo listo para publicar.",
      subhead:
        "Refract toma el código que producen tus herramientas de IA y lo convierte en algo más limpio, más coherente y más fácil de conservar — para que el proyecto no se desmorone a medida que crece.",
      primary: { label: "Empezar", href: SIGNUP_PATH },
      secondary: { label: "Cómo funciona", href: "/product" },
      trust: "Tú apruebas cada cambio. Refract nunca reescribe tu proyecto por su cuenta.",
      caption: "Antes de que se convierta en el código base",
      stack: "React · TypeScript · GitHub",
    },
    problem: {
      headline: "El código que funciona puede seguir siendo un desastre.",
      bullets: [
        "el mismo comportamiento, copiado en vez de compartido",
        "código de interfaz haciendo trabajo que no le corresponde",
        "estado y efectos sobrantes que solo tenían sentido en ese momento",
        "una estructura que encajaba en un archivo, no en un producto",
      ],
      close: "No necesitas más código generado. Necesitas que el código generado siga siendo bueno.",
    },
    turn: {
      headline: "Refract es lo que ocurre después de que la IA escribe el código.",
      lede: "No otra lista de quejas. Un proyecto más limpio.",
      more: { label: "Cómo funciona", href: "/product" },
    },
    result: {
      headline: "El resultado es código que puedes conservar.",
      points: [
        {
          title: "Más limpio",
          body: "El desorden evidente se <strong>saca de las pantallas</strong> y se pone donde corresponde.",
        },
        {
          title: "Más coherente",
          body: "<strong>La lógica repetida deja de multiplicarse.</strong> El proyecto empieza a parecer un solo producto, no doce primeros borradores.",
        },
        {
          title: "Más fácil de cambiar",
          body: "Puedes <strong>añadir lo siguiente</strong> sin recorrer un laberinto que nadie quiso construir.",
        },
        {
          title: "Sigue siendo tuyo",
          body: "<strong>Nada cambia hasta que dices que sí.</strong> Ves lo que va a ocurrir. Tú conservas el botón de fusionar.",
        },
      ],
    },
    does: {
      headline: "No se limita a señalar problemas. Mejora el código.",
      more: { label: "Ver el producto", href: "/product" },
      points: [
        {
          number: "1",
          title: "Primero entiende el proyecto",
          body: "Refract mira cómo está montado el software de verdad — no solo el último archivo que cambió — para que una limpieza encaje en el proyecto que ya tienes.",
        },
        {
          number: "2",
          title: "Encuentra el desorden que suele dejar la IA",
          body: "Lógica copiada. Carga de datos dentro de la interfaz. Estado que nadie usa. Efectos que se quedan. Estructura que dolerá en cuanto la aplicación crezca.",
        },
        {
          number: "3",
          title: "Te dice qué limpiar primero",
          body: "Cuando hay más de un problema, recibes un orden que tiene sentido — no un muro de ruido.",
        },
        {
          number: "4",
          title: "Puede hacer la limpieza por ti",
          body: "Cuando el cambio es seguro y acotado, Refract lo prepara. Tú apruebas. Aplica el cambio y comprueba que el proyecto sigue en pie. Si no puede hacerlo con seguridad, lo dice, en vez de adivinar.",
        },
      ],
    },
    world: {
      headline: "Aparece donde el código está a punto de convertirse en el proyecto.",
      lede: "Conecta los repositorios que te importan. Cuando se propone código nuevo, Refract lo revisa en su sitio.",
      caption: "Un resultado. Tú decides.",
      decide: "Obtienes un resultado claro:",
      close:
        "Aprueba en GitHub. Quédate en el flujo que ya tienes. Refract no te pide que vivas en una segunda bandeja de entrada.",
    },
    trust: {
      headline: "Apruebas cada cambio.",
      points: [
        {
          title: "Tú apruebas.",
          body: "Refract nunca aplica un cambio hasta que lo haces tú.",
        },
        {
          title: "Prefiere callar a equivocarse.",
          body: "Si no puede demostrar un problema, no inventa uno para parecer ocupado.",
        },
        {
          title: "Si no puede limpiar algo con seguridad, no finge.",
          body: "Recibes una explicación, no una reescritura temeraria.",
        },
        {
          title: "Revisa su propio trabajo.",
          body: "Después de aplicar una limpieza, Refract vuelve a mirar. Una limpieza fallida nunca se describe como un éxito.",
        },
        {
          title: "No es un chatbot reescribiendo tu aplicación.",
          body: "Las limpiezas que aplica son concretas y acotadas. Las conjeturas creativas no son «arreglos».",
        },
      ],
    },
    steps: {
      headline: "Tres pasos. Luego funciona mientras tú trabajas.",
      note: "Instalar la aplicación no es lo mismo que iniciar sesión. Tu cuenta de Refract y tu acceso a GitHub se mantienen separados a propósito.",
      cta: { label: "Empezar", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "Crea una cuenta",
          body: "Correo y contraseña. Ese es tu acceso a Refract — no un inicio de sesión con GitHub.",
        },
        {
          number: "2",
          title: "Conecta GitHub y elige repositorios",
          body: "Instala la aplicación de Refract en los proyectos que quieras limpiar. Tú eliges cuáles.",
        },
        {
          number: "3",
          title: "Sigue publicando",
          body: "Abre un pull request como ya haces. Refract lee el cambio en el contexto del proyecto. Si hay una limpieza lista, la apruebas. Luego fusionas cuando quieras.",
        },
      ],
    },
    audience: {
      headline: "Para quienes construyen con IA y luego tienen que convivir con el resultado.",
      points: [
        {
          title: "Particulares",
          body: "Estás sacando un producto con Copilot, Cursor o el siguiente modelo. El código llega rápido. Quieres que siga siendo algo que puedas mantener.",
        },
        {
          title: "Equipos",
          body: "Varias personas generando a la vez. El repositorio es la memoria compartida. Refract es cómo esa memoria se mantiene coherente.",
        },
        {
          title: "Hecho para hoy",
          body: "React y TypeScript en GitHub. Ahí es donde este problema suena más fuerte ahora. Otros entornos llegarán cuando sean reales — no como promesa en la portada.",
        },
      ],
    },
    ships: {
      headline: "Novedades",
      more: { label: "Ver la documentación", href: "/docs" },
      items: [
        { date: "ago 2026", title: "Aprobar en el GitHub Check", href: "/docs/approve" },
        { date: "ago 2026", title: "Únete a Discord", href: "https://discord.gg/SH787P4rP4" },
        { date: "ago 2026", title: "Conecta GitHub después de iniciar sesión", href: "/docs/connect-github" },
      ],
    },
    social: {
      headline: "Únete a la comunidad",
      line: "Haz preguntas, comparte un pull request, quédate con otras personas que usan Refract.",
      discord: {
        kicker: "Discord",
        title: "Habla con otros builders",
        body: "La sala para equipos al inicio, preguntas de producto, y lo que se rompió en un pull request.",
        cta: "Unirse a Discord",
      },
      github: {
        kicker: "GitHub",
        title: "Conéctalo en Refract",
        body: "Primero crea la cuenta. La App se instala en el onboarding, para quedar ligada a tu cuenta.",
        cta: "Empezar",
      },
    },
    honesty: {
      headline: "Lo que Refract no es.",
      paragraphs: [
        "No es un IDE. No sustituye tus herramientas de código con IA. No es un linter genérico. No es un bot que deja veinte comentarios en cada línea.",
        "No reorganizará todo tu producto de un día para otro. No corregirá automáticamente cada problema de seguridad. No fusionará por ti.",
        "Hará que las partes generadas por IA de un proyecto React y TypeScript sean más limpias, más claras y más fáciles de conservar — con el control en tus manos.",
      ],
    },
    cta: {
      headline: "La IA lo escribió. Déjalo listo para publicar.",
      body: "Crea una cuenta, conecta GitHub y deja que Refract lleve los primeros borradores hasta el final.",
      primary: { label: "Empezar", href: SIGNUP_PATH },
      secondary: { label: "Ver precios", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "Cómo funciona Refract — limpieza de código IA en GitHub",
      description:
        "Refract revisa el código generado por IA en los pull requests de GitHub, prepara una limpieza cuando es seguro y espera tu aprobación.",
      ogTitle: "Cómo funciona Refract",
      ogDescription:
        "Conecta GitHub. Sigue publicando. Refract limpia el código generado por IA cuando es seguro — y pregunta antes de tocar nada.",
    },
    hero: {
      headline: "Del código generado al código que puedes conservar.",
      subhead:
        "Refract lee el proyecto, encuentra lo que se va a ensuciar y prepara una limpieza que tú apruebas. No sales de GitHub para decidir.",
      cta: { label: "Empezar", href: SIGNUP_PATH },
    },
    loop: {
      headline: "Un bucle sencillo",
      beats: [
        {
          number: "1",
          title: "Ver el proyecto",
          body: "Refract mira el software en conjunto, para que un cambio en una pantalla respete el resto.",
        },
        {
          number: "2",
          title: "Encontrar lo que dolerá después",
          body: "Busca los patrones que aparecen cuando el código se genera rápido: lógica copiada, pantallas enmarañadas, estado sobrante, estructura que no envejece bien. Si algo sensible se quedó en el código — como una credencial — te lo dice. No «arregla» secretos en silencio.",
        },
        {
          number: "3",
          title: "Limpiar lo que pueda",
          body: "Cuando la limpieza es segura, recibes un cambio concreto para aprobar. Cuando no lo es, recibes una explicación clara en vez de una conjetura.",
        },
        {
          number: "4",
          title: "Comprobar y recordar",
          body: "Cuando apruebas, Refract aplica el cambio y vuelve a mirar. Con el tiempo puedes ver si el proyecto se está limpiando — o si sigue publicando el desorden.",
        },
      ],
    },
    places: {
      headline: "Decide en GitHub. Usa la web para lo demás.",
      close: "La web no es un segundo sitio para aceptar limpiezas. La decisión se queda junto al código.",
      github: {
        title: "En GitHub",
        items: [
          "Ver el resultado en el pull request",
          "Aprobar una limpieza",
          "Descartar cuando no aplica",
          "Fusionar cuando estés listo",
        ],
      },
      web: {
        title: "En la web",
        items: [
          "Crear tu cuenta",
          "Conectar la GitHub App",
          "Elegir repositorios",
          "Ver qué está conectado, con el tiempo",
        ],
      },
    },
    results: {
      headline: "Verás uno de unos pocos resultados honestos",
      items: [
        { title: "Sigue trabajando", body: "Espera. Esto no es un aprobado." },
        { title: "Se ve limpio", body: "Nada de Refract te necesita en este cambio." },
        { title: "Limpieza lista", body: "Hay una limpieza segura preparada. Apruébala en GitHub." },
        {
          title: "Échale un vistazo",
          body: "Algo importa, y Refract no lo cambiará por ti. Lee la explicación.",
        },
        {
          title: "Algo ha fallado",
          body: "El análisis ha fallado. Refract lo dirá. No pintará un éxito falso.",
        },
      ],
    },
    cleans: {
      headline: "Qué significa «más limpio» en la práctica",
      body: "En proyectos React y TypeScript, Refract se da especialmente bien con los restos de generar rápido:",
      bullets: [
        "carga de datos mezclada en la interfaz",
        "la misma lógica escrita dos veces",
        "estado que en realidad no se usa",
        "efectos que no se limpian a sí mismos",
        "tiempos de espera y manejo de errores que faltan en los bordes",
        "pantallas haciendo trabajo que pertenece a otro sitio",
      ],
      close:
        "Parte de eso puede limpiarlo por ti. Parte solo lo señalará — a propósito. Una reescritura automática mala es peor que una nota honesta.",
    },
    start: {
      headline: "Unos diez minutos para empezar",
      steps: [
        "Crea una cuenta",
        "Instala la GitHub App y elige repositorios",
        "Abre un pull request",
      ],
      note: "Conectar GitHub no inicia sesión en Refract, e iniciar sesión en Refract no instala el acceso a GitHub. Dos pasos, dos tareas.",
      cta: { label: "Crea tu cuenta", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "¿Va a pelearse con mis herramientas de IA?",
        a: "No. Sigue generando. Refract es el pase que mantiene el resultado mantenible.",
      },
      {
        q: "¿Cambiará código sin mí?",
        a: "No. Tú apruebas. Tú fusionas.",
      },
      {
        q: "¿Tengo que aprender otro espacio de trabajo?",
        a: "No. En el día a día, te quedas en GitHub.",
      },
    ],
  },
  pricing: {
    seo: {
      title: "Precios — Refract | Free, Starter $12, Pro $24",
      description:
        "Free $0. Starter $12. Pro $24/mes. Ultimate $49. Planes Team desde $149. Empieza gratis — no te cobraremos al registrarte.",
      ogTitle: "Precios de Refract — de Free a Pro $24/mes",
      ogDescription:
        "Free $0. Starter $12. Pro $24/mes. Equipos desde $149. El pago llega pronto; no te cobraremos al registrarte.",
    },
    hero: {
      headline: "Paga por software más limpio — no por más ruido.",
      subhead: "Empieza en un repositorio de verdad. Mejora el plan cuando el proyecto — o el equipo — necesite más margen.",
      priceLine: "Free $0. Starter $12. Pro $24/mes. Ultimate $49. Equipos desde $149.",
      banner:
        "Empieza gratis hoy. Los planes de pago están listados para que sepas hacia dónde va esto. El pago llega pronto; no te cobraremos al registrarte.",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "Prueba Refract en un proyecto real.",
        features: [
          "2 repositorios",
          "50 revisiones / mes",
          "5 limpiezas que puedes aprobar / mes",
          "Resultados informativos en GitHub",
        ],
        cta: "Empezar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Verlo en tu propio código",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Para un desarrollador en solitario que usa IA cada día en unos pocos proyectos.",
        features: [
          "5 repositorios",
          "150 revisiones / mes",
          "Limpiezas ilimitadas dentro de ese límite de revisiones",
          "Comprobación obligatoria en hasta 2 repositorios",
        ],
        cta: "Empezar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Una persona, unos pocos repositorios activos",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Para quienes publican un producto real con IA.",
        features: [
          "15 repositorios",
          "400 revisiones / mes",
          "Limpiezas ilimitadas dentro de ese límite de revisiones",
          "Comprobación obligatoria en cada repositorio conectado",
          "Historial completo de lo que se ha ido limpiando",
        ],
        cta: "Empezar",
        href: SIGNUP_PATH,
        badge: "El más popular",
        bestFor: "El plan por defecto",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Para quien opera muchos repos o proyectos de clientes.",
        features: [
          "40 repositorios",
          "1.000 revisiones / mes",
          "Limpiezas ilimitadas dentro de ese límite de revisiones",
          "Revisión prioritaria",
          "Todas las opciones de protección",
        ],
        cta: "Empezar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Muchos proyectos, un operador",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Una empresa pequeña, una organización de GitHub, IA en el día a día.",
        features: [
          "10 personas",
          "30 repositorios",
          "1 organización de GitHub",
          "1.000 revisiones / mes",
        ],
        cta: "Habla con nosotros",
        href: "/contact",
        badge: null,
        bestFor: "Una empresa pequeña",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Más servicios, más volumen, una relación comercial de verdad.",
        features: [
          "30 personas",
          "100 repositorios",
          "2 organizaciones de GitHub",
          "4.000 revisiones / mes",
          "Revisión prioritaria",
          "Llamada de incorporación",
        ],
        cta: "Habla con nosotros",
        href: "/contact",
        badge: null,
        bestFor: "Más volumen",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ mes",
        yearlyPeriod: "/ año",
        description: "Varios proyectos, mucho volumen, una persona con nombre que conoce tu cuenta.",
        features: [
          "75 personas",
          "250 repositorios",
          "5 organizaciones de GitHub",
          "12.000 revisiones / mes",
        ],
        cta: "Habla con nosotros",
        href: "/contact",
        badge: null,
        bestFor: "Alto volumen",
      },
      {
        name: "Enterprise",
        monthlyPrice: "Desde $2,500",
        yearlyPrice: "Desde $2,500",
        period: "/ mes",
        yearlyPeriod: "/ mes",
        description: "Cuando necesitas un contrato, límites a medida o una revisión de seguridad.",
        features: [],
        cta: "Habla con nosotros",
        href: "/contact",
        badge: null,
        bestFor: "Contrato y límites a medida",
        custom: true,
      },
    ],
    footnote:
      "El anual son dos meses gratis. «Revisiones» significa cada vez que se analiza código nuevo en un pull request. Las limpiezas ilimitadas siguen dentro de ese límite mensual de revisiones.",
    value: {
      headline: "No pagas por comentarios.",
      paragraphs: [
        "Pagas por un proyecto que sigue siendo mantenible mientras sigues generando.",
        "Free es cómo sientes una limpieza real en un repositorio real. Pro es cómo eso se vuelve lo normal. Team es cómo un grupo generando a la vez no convierte el repo en doce estilos de primer borrador.",
        "No te cobramos de más porque un cambio estuviera sano. El silencio forma parte del producto.",
      ],
    },
    faqs: [
      {
        q: "¿Puedo pagar hoy?",
        a: "Crea una cuenta y empieza. El pago con tarjeta se está activando. No te sorprenderá un cargo al registrarte.",
      },
      {
        q: "¿GitHub está incluido?",
        a: "No. GitHub es aparte. Refract es nuestro.",
      },
      {
        q: "¿Qué pasa si llego a un límite?",
        a: "Verás una invitación clara a mejorar el plan. No nos detenemos en silencio fingiendo que todo va bien.",
      },
      {
        q: "¿Cobráis por persona en Pro?",
        a: "No. Los planes individuales se precifican por repositorios y revisiones mensuales, no por cuántas personas escribieron.",
      },
      {
        q: "¿Puedo usarlo en un repo de empresa?",
        a: "Sí, si puedes instalar GitHub Apps ahí. Para facturación compartida y plazas, usa Team o habla con nosotros.",
      },
      {
        q: "¿Aceptar / la limpieza está bloqueada en Free?",
        a: "Free incluye un número pequeño de limpiezas al mes para que sientas el producto de verdad — no una demo que nunca cambia código.",
      },
    ],
  },
  docs: {
    seo: {
      title: "Documentación — Refract",
      description:
        "Crea una cuenta de Refract, conecta GitHub y empieza a limpiar código generado por IA en los pull requests que ya abres.",
    },
    headline: "Documentación",
    intro: "Todo lo que necesitas para usar Refract.",
    groups: [
      {
        title: "Empieza aquí",
        numbered: true,
        links: [
          { label: "Primeros pasos", href: "/docs/getting-started" },
          { label: "Crear una cuenta", href: "/docs/account" },
          { label: "Conectar GitHub", href: "/docs/connect-github" },
          { label: "Tu primera limpieza", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "Usar Refract",
        links: [
          { label: "Lo que verás en un pull request", href: "/docs/on-github" },
          { label: "Aprobar o descartar", href: "/docs/approve" },
          { label: "La web", href: "/docs/web" },
          { label: "Repositorios", href: "/docs/repositories" },
        ],
      },
      {
        title: "Referencia",
        links: [
          { label: "Preguntas frecuentes", href: "/docs/faq" },
          { label: "Seguridad", href: "/security" },
          { label: "Límites", href: "/docs/limits" },
          { label: "Solución de problemas", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "Primeros pasos",
        description: "Crea una cuenta, conecta GitHub y abre un pull request. Unos 10 minutos.",
        blocks: [
          { type: "lede", text: "Unos 10 minutos." },
          {
            type: "p",
            text: "Necesitas una cuenta de GitHub, un repositorio React / TypeScript que puedas conectar y una dirección de correo.",
          },
          { type: "h2", text: "1. Crea tu cuenta" },
          {
            type: "p",
            text: "Ve a Empezar. Nombre, correo, contraseña. Confirma el correo si te lo pedimos y luego inicia sesión.",
          },
          { type: "p", text: "Esto no es «Iniciar sesión con GitHub»." },
          { type: "h2", text: "2. Conecta GitHub" },
          {
            type: "p",
            text: "Llegarás a Conectar GitHub. Instala la GitHub App, elige la cuenta y los repositorios, vuelve, y decide qué proyectos debe vigilar Refract.",
          },
          {
            type: "p",
            text: "Hasta que esto esté hecho, las pantallas principales se quedan cerradas. Es a propósito.",
          },
          { type: "h2", text: "3. Abre un pull request" },
          {
            type: "p",
            text: "En un repositorio conectado, abre un pull request. Espera a Refract. Si hay una limpieza lista, apruébala en GitHub.",
          },
          { type: "h2", text: "4. Usa la web cuando quieras la vista larga" },
          {
            type: "p",
            text: "Overview muestra qué está conectado. En el día a día, te quedas en el pull request.",
          },
          {
            type: "html",
            html: 'Siguiente: <a href="/docs/connect-github">Conectar GitHub</a> · <a href="/docs/first-cleanup">Tu primera limpieza</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "Tu cuenta de Refract",
        description: "Regístrate con nombre, correo y contraseña. GitHub es un paso aparte.",
        blocks: [
          { type: "p", text: "Regístrate con nombre, correo y contraseña." },
          { type: "html", html: 'Inicia sesión en <a href="/login">Iniciar sesión</a>.' },
          {
            type: "p",
            text: "¿Has olvidado la contraseña? Te enviaremos un enlace de restablecimiento si esa dirección tiene una cuenta.",
          },
          { type: "p", text: "Cierra sesión desde la aplicación." },
          {
            type: "p",
            text: "Esta cuenta no es el permiso de GitHub. Conectar repositorios es un paso aparte.",
          },
          {
            type: "p",
            text: "En Ajustes → Cuenta puedes editar el nombre que mostramos en el producto.",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "Conectar GitHub",
        description:
          "Instala la GitHub App para que Refract pueda leer el pull request, publicar un resultado y aplicar una limpieza cuando apruebes.",
        blocks: [
          {
            type: "p",
            text: "Refract necesita la GitHub App para leer el pull request, publicar un resultado y — solo después de que apruebes — aplicar una limpieza.",
          },
          {
            type: "html",
            html: `<ol>
          <li>Inicia sesión en Refract</li>
          <li>Abre Conectar GitHub</li>
          <li>Instala la App desde ahí — no desde este sitio — para que quede ligada a tu cuenta</li>
          <li>Elige repositorios concretos (recomendado)</li>
          <li>Vuelve a Refract y confirma cuáles vigilar</li>
        </ol>`,
          },
          { type: "h2", text: "Instalado frente a obligatorio" },
          {
            type: "p",
            text: "Conectado significa que Refract revisa el código nuevo. No bloquea las fusiones por sí mismo. Si quieres que GitHub espere a Refract, eso es una comprobación obligatoria que configuras en GitHub — podemos indicarte dónde en Ajustes. Nunca la activamos durante la instalación.",
          },
          { type: "h2", text: "Desinstalar" },
          {
            type: "p",
            text: "Quita la App en GitHub → Settings → Applications. Refract dejará de vigilar esos repositorios.",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "Tu primera limpieza",
        description: "Abre un pull request, espera a Refract y aprueba una limpieza en GitHub.",
        blocks: [
          {
            type: "p",
            text: "Antes de empezar: cuenta creada, GitHub conectado, al menos un repositorio React / TypeScript seleccionado.",
          },
          {
            type: "ol",
            items: [
              "Abre un pull request",
              "Encuentra Refract en Checks",
              "Espera a que termine — pendiente no es un éxito",
              "Lee el resultado breve",
            ],
          },
          { type: "h2", text: "Si hay una limpieza lista" },
          {
            type: "p",
            text: "Aprueba en la comprobación. Refract aplica el cambio a la rama. Vuelve a mirar. Tú sigues fusionando.",
          },
          { type: "h2", text: "Si te pide que mires" },
          {
            type: "p",
            text: "Ha encontrado algo que no cambiará automáticamente. Lee la explicación. Arréglalo tú, o déjalo — es tu decisión.",
          },
          { type: "h2", text: "Si algo ha fallado" },
          {
            type: "p",
            text: "Lo diremos. Empuja un commit pequeño para intentarlo de nuevo. No mostraremos un resultado verde falso.",
          },
        ],
      },
      {
        slug: "on-github",
        title: "En GitHub",
        description: "Una comprobación. Un comentario resumen, actualizado en su sitio — no una pila de ruido de bots.",
        blocks: [
          {
            type: "p",
            text: "Una comprobación. Un comentario resumen, actualizado en su sitio — no una pila de ruido de bots.",
          },
          {
            type: "p",
            text: "La comprobación puede seguir trabajando, verse limpia, tener una limpieza lista, pedirte que mires o informar de un error.",
          },
          {
            type: "p",
            text: "Cuando hay una limpieza lista, aparecen Aceptar (y Descartar) en la comprobación.",
          },
          { type: "h2", text: "Comprobaciones obligatorias" },
          {
            type: "p",
            text: "Opcional. Se configura en las reglas de rama de GitHub si quieres que las fusiones esperen. Conectar la aplicación no lo hace por ti.",
          },
        ],
      },
      {
        slug: "approve",
        title: "Aprobar o descartar",
        description: "Aprobar aplica una limpieza en GitHub. Descartar significa que eliges no aplicarla.",
        blocks: [
          {
            type: "p",
            text: "Esto ocurre en GitHub, en la comprobación de Refract — no como el botón principal de la web.",
          },
          { type: "h2", text: "Aprobar" },
          {
            type: "p",
            text: "Aplica la limpieza preparada a la rama. La comprobación se ejecuta otra vez. Tú fusionas cuando estés listo. Esto no es fusión automática.",
          },
          { type: "h2", text: "Descartar" },
          {
            type: "p",
            text: "Úsalo cuando entiendes la nota y eliges no aplicarla. No es un «ignorar esto para siempre» permanente para todo el proyecto.",
          },
          { type: "h2", text: "Cuando falta Aprobar" },
          {
            type: "p",
            text: "No hay una limpieza automática segura. Lee la explicación, o espera si la comprobación ha fallado.",
          },
        ],
      },
      {
        slug: "web",
        title: "La web",
        description: "Tras la configuración, la web muestra qué está conectado. Aprobar sigue ocurriendo en GitHub.",
        blocks: [
          { type: "p", text: "Tras la configuración, verás:" },
          {
            type: "html",
            html: "<p><strong>Overview</strong> — qué está conectado y, más adelante, una imagen sencilla de si el proyecto se está limpiando. Las cuentas nuevas suelen tener poco historial. Eso es honesto, no un fallo.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Repositories</strong> — los proyectos que elegiste.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Pull requests</strong> — resultados recientes, para la memoria. Aprobar en vivo sigue ocurriendo en GitHub.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Insights</strong> — patrones con el tiempo, cuando hay historial suficiente. No inventamos una puntuación para parecer sanos.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Settings</strong> — cuenta, qué repositorios y con qué rigor se trata cada uno. La facturación vivirá aquí cuando llegue el pago.</p>",
          },
          { type: "p", text: "La web no es una segunda bandeja para aceptar." },
        ],
      },
      {
        slug: "repositories",
        title: "Repositorios",
        description: "Instalar la App da el permiso. Seleccionar repositorios elige lo que vigila Refract.",
        blocks: [
          { type: "p", text: "Empieza con un repo de producto activo. Añade más después en Ajustes." },
          {
            type: "p",
            text: "Instalar la App en GitHub da el permiso. Seleccionar repositorios en Refract elige lo que vigila el producto. Necesitas las dos cosas.",
          },
          { type: "h2", text: "Lenguajes" },
          {
            type: "p",
            text: "Mejor en React / TypeScript. Otros entornos pueden tener poca o ninguna cobertura. Preferimos decirlo a fingir confianza.",
          },
        ],
      },
      {
        slug: "limits",
        title: "Límites",
        description: "En qué es bueno Refract — y qué no pretenderá hacer.",
        blocks: [
          {
            type: "p",
            text: "Refract se da bien con desórdenes concretos que aparecen en React y TypeScript generados por IA — y con aplicar una limpieza cuando esa limpieza es segura.",
          },
          {
            type: "p",
            text: "No es una garantía de que se encuentre cada error. No es una revisión humana completa. No es un rediseño de tu arquitectura.",
          },
          {
            type: "p",
            text: "Si no podemos demostrar un problema, nos quedamos callados. Si no podemos limpiar algo con seguridad, no ofrecemos Aprobar.",
          },
          {
            type: "html",
            html: 'Los cambios muy grandes pueden tardar más. Los límites del plan están en la página de <a href="/pricing">precios</a>.',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "Solución de problemas",
        description: "Problemas habituales de configuración y de la comprobación de GitHub, y cómo desatascarte.",
        blocks: [
          { type: "h2", text: "Sigo acabando en Conectar GitHub" },
          {
            type: "p",
            text: "La configuración no termina hasta que la App está instalada y hay al menos un repositorio seleccionado en Refract.",
          },
          { type: "h2", text: "Cuenta de GitHub equivocada" },
          {
            type: "p",
            text: "Instala desde una sesión del navegador iniciada en la cuenta que posee los repositorios.",
          },
          { type: "h2", text: "La comprobación no aparece nunca" },
          {
            type: "p",
            text: "Confirma que el repositorio está instalado en GitHub y seleccionado en Refract. Espera un minuto. Actualiza Checks.",
          },
          { type: "h2", text: "Aprobar no ha hecho nada" },
          {
            type: "p",
            text: "Usa la acción de la comprobación, no solo el comentario. Confirma que la App sigue teniendo permiso para escribir. Las reglas de rama de GitHub pueden bloquear la aplicación — lee el error de GitHub.",
          },
          { type: "h2", text: "El correo de restablecimiento no llega" },
          { type: "p", text: "Mira el correo no deseado. Confirma la dirección. Vuelve a intentarlo." },
          { type: "h2", text: "Sigo atascado" },
          {
            type: "html",
            html: '<a href="/contact">Contacto</a> con: lo que esperabas, lo que ocurrió, el enlace del pull request y la hora (con zona horaria).',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "Preguntas frecuentes — Refract",
      description:
        "Respuestas sobre qué es Refract, cómo funciona en GitHub, la confianza, las cuentas y los precios.",
    },
    title: "Preguntas frecuentes",
    groups: [
      {
        title: "Producto",
        items: [
          {
            q: "¿Qué es Refract?",
            a: "El paso que sigue cuando la IA escribe el código. Convierte el software generado en código más limpio y mantenible — en los pull requests de GitHub que ya abres.",
          },
          {
            q: "¿Es un revisor de IA?",
            a: "No. No es un chatbot dejando ensayos en tu diff. Busca desórdenes concretos, los explica y, cuando puede, prepara una limpieza que tú apruebas.",
          },
          {
            q: "¿Mejorará mi código o solo me dará la lata?",
            a: "Cuando una limpieza es segura, puede aplicarla después de que apruebes. Cuando no lo es, te lo dice. El objetivo es un proyecto mejor, no un hilo de comentarios más largo.",
          },
          {
            q: "¿Funciona con Cursor / Copilot / ChatGPT?",
            a: "Sí, en la única forma que importa: esas herramientas escriben en GitHub. Refract vigila el resultado. No necesitamos vivir en tu editor.",
          },
          {
            q: "¿Qué lenguajes admitís?",
            a: "React y TypeScript primero. Otros entornos no son un «sí» en silencio.",
          },
          {
            q: "¿Sustituye la revisión de código?",
            a: "No. Te quita de encima una clase de problemas de mantenibilidad para que las personas revisen el trabajo que sigue necesitando a una persona.",
          },
        ],
      },
      {
        title: "Confianza",
        items: [
          {
            q: "¿Puede cambiar mi repositorio sin preguntar?",
            a: "No.",
          },
          {
            q: "¿Fusionaréis mi pull request?",
            a: "No. Aprueba una limpieza y luego fusionas tú.",
          },
          {
            q: "¿Entrenáis modelos con nuestro código?",
            a: 'No. No entrenamos modelos con tu repositorio. Enviamos el contenido del pull request a proveedores de modelos solo para revisar ese cambio y preparar una limpieza que apruebas. No vendemos tu código. Consulta <a href="/security">Seguridad</a>.',
          },
          {
            q: "¿Y si se equivoca?",
            a: "Prefiere fallar por omisión que inventar. Puedes descartar una limpieza. Siempre ves el cambio antes de que forme parte del proyecto.",
          },
        ],
      },
      {
        title: "Cuenta",
        items: [
          {
            q: "¿Inicio sesión con GitHub?",
            a: "No. Correo y contraseña para Refract. El acceso a GitHub es la App que instalas.",
          },
          {
            q: "¿Por qué dos pasos?",
            a: "Iniciar sesión y conceder acceso a repositorios son tareas distintas. Separarlas mantiene los permisos claros.",
          },
          {
            q: "¿Puedo probarlo sin GitHub?",
            a: "Puedes crear una cuenta. El producto se queda cerrado hasta que hay un repositorio conectado — no hay nada que limpiar si no.",
          },
        ],
      },
      {
        title: "Dinero",
        items: [
          {
            q: "¿Los precios ya están activos?",
            a: "Los planes son reales. El pago con tarjeta se está activando. Empieza gratis.",
          },
        ],
      },
      {
        title: "Empresa",
        items: [
          {
            q: "¿Quién hace Refract?",
            a: "Refract lo construye Devrefract, una empresa de Lintel. Lintel es la empresa matriz de tecnología. Devrefract construye tecnología para desarrolladores. Refract es su producto actual.",
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "Seguridad — Refract",
      description:
        "Cómo accede Refract a GitHub, qué lee en un pull request y qué no hará nunca sin tu aprobación.",
      headline: "Tu código. Tu aprobación. Nada en silencio.",
      paragraphs: [
        "Inicias sesión en Refract con correo y contraseña.",
        "El acceso a GitHub es solo la App que instalas, en los repositorios que permites.",
        "Leemos pull requests para revisarlos. Publicamos un resultado. Aplicamos una limpieza solo después de que apruebes.",
        "No fusionamos por ti.",
        "No te hacemos iniciar sesión con GitHub solo para abrir la web.",
        "No vendemos tu repositorio como un producto.",
        "No fingimos que una revisión ha salido bien cuando ha fallado.",
        "Si vemos credenciales en un pull request, te lo decimos. Rota cualquier cosa que se haya expuesto.",
        "Puedes desinstalar la GitHub App y reducir qué repositorios vemos.",
      ],
      operator: `${PRODUCT_NAME} es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
      reportLabel: "Informar de un problema",
      reportHtml: `Usa <a href="/contact">Contacto</a> y elige Seguridad. Lo tratamos como prioridad.`,
    },
    contact: {
      title: "Contacto — Refract",
      description: "Preguntas sobre Refract, equipos pioneros, facturación o algo que se rompió en un pull request.",
      headline: "Contacto",
      intro: "Preguntas sobre Refract, equipos pioneros, facturación o algo que se rompió en un pull request.",
      fields: {
        name: "Nombre",
        email: "Correo",
        topic: "Tema",
        message: "Mensaje",
        link: "Enlace al repositorio o al pull request (opcional)",
      },
      topics: ["Producto", "Facturación", "Seguridad", "Otro"],
      submit: "Enviar mensaje",
      success: "Gracias — responderemos a ese correo.",
      error: "Algo ha fallado. Inténtalo de nuevo.",
      bugs: "Para errores, incluye lo que esperabas, lo que ocurrió, el enlace del pull request y la hora.",
    },
    privacy: {
      title: "Privacidad — Refract",
      description:
        "Qué recoge Refract, cómo trata el acceso a repositorios a través de la GitHub App y cómo contactarnos con preguntas de privacidad.",
      headline: "Privacidad",
      updated: "Última actualización: 16 de agosto de 2026",
      short: [
        "Cuenta de la web: correo y contraseña.",
        "Acceso al código: solo a través de la GitHub App, en los repositorios que permites.",
        "Procesamos el contenido de los pull requests para revisarlo, aplicar las limpiezas que apruebas y mostrarte el historial en el producto.",
        "No fusionamos por ti.",
        "No vendemos el contenido de tu repositorio.",
      ],
      collectHeadline: "Qué recogemos",
      collect:
        "Correo y nombre de la cuenta. Instalación de GitHub y selección de repositorios. Resultados de revisión y el historial que necesita el producto.",
      operator: `${PRODUCT_NAME} es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
      contactHtml: `Las preguntas de privacidad van por <a href="/contact">Contacto</a>.`,
      changes: "Cuando cambie esta política, actualizamos esta página y la fecha.",
    },
    terms: {
      title: "Términos — Refract",
      description:
        "Los términos de uso de Refract: cuentas, acceso a GitHub, aprobación, planes, y qué hacemos y no hacemos con tu código.",
      headline: "Términos",
      updated: "Última actualización: 16 de agosto de 2026",
      operator: `${PRODUCT_NAME} es un producto de ${BRAND_NAME}, una empresa de ${COMPANY_NAME}.`,
      short: [
        "Conecta solo repositorios que tienes permiso para conectar.",
        "Apruebas cada limpieza. Refract no hace merge por ti, y no reescribe un proyecto por su cuenta.",
        "El acceso al código es solo a través de la GitHub App, en los repositorios que autorizas.",
        "El código sigue siendo tuyo. No vendemos el contenido de los repositorios.",
        "Empieza gratis. El pago con tarjeta aún no está activo; no se te cobrará al registrarte.",
      ],
      sections: [
        {
          title: "Estos términos",
          paragraphs: [
            "Estos términos se aplican cuando usas Refract: el sitio, el producto y la GitHub App. Si no estás de acuerdo, no uses el producto.",
            "Los términos de GitHub siguen aplicándose a GitHub. Estos términos cubren Refract.",
          ],
        },
        {
          title: "El producto",
          paragraphs: [
            "Refract revisa pull requests en busca de patrones que hacen que el código generado por IA sea difícil de mantener. Cuando una limpieza es segura, prepara un cambio para que lo apruebes en GitHub. Cuando no lo es, explica. No finge que una revisión tuvo éxito cuando falló.",
            "Refract no sustituye la revisión humana, tu editor ni GitHub. No hace merge por ti.",
          ],
        },
        {
          title: "Tu cuenta",
          paragraphs: [
            "Creas una cuenta con correo y contraseña. Eres responsable de esa cuenta. Guarda la contraseña para ti.",
            "Si usas Refract para una organización, confirmas que tienes derecho a conectar sus repositorios y a aceptar estos términos en nombre de esa organización.",
          ],
        },
        {
          title: "GitHub y tus repositorios",
          paragraphs: [
            "El acceso a GitHub es solo la App que instalas, en los repositorios que autorizas. No iniciamos sesión con GitHub solo para abrir el sitio.",
            "Declaras que tienes permiso para conectar esos repositorios. Si no lo tienes, no los conectes.",
            "Puedes desinstalar la GitHub App o limitar los repositorios que vemos en cualquier momento.",
          ],
        },
        {
          title: "Aprobación",
          paragraphs: [
            "Procesamos el contenido de los pull requests para revisarlo, para aplicar limpiezas que apruebas, y para mostrarte el historial en el producto.",
            "Una limpieza solo entra después de que la apruebes en GitHub. La decisión se queda junto al código. Sigues siendo responsable de lo que haces merge.",
          ],
        },
        {
          title: "Uso aceptable",
          paragraphs: [
            "No conectes código que no tienes derecho a conectar. No intentes romper, hacer scraping ni saturar el servicio. No uses Refract para ocultar malware ni para ignorar credenciales expuestas.",
            "Si vemos credenciales en un pull request, te lo decimos. Rotar lo que se expuso es cosa tuya.",
          ],
        },
        {
          title: "Planes y facturación",
          paragraphs: [
            "Los planes y límites están descritos en Precios. El plan gratuito existe para que pruebes Refract en un repositorio real.",
            "Los planes de pago muestran lo que costará. El pago con tarjeta aún no está activo. No se te cobrará al registrarte. Cuando empiece la facturación, el sitio lo dirá antes de que pagues.",
          ],
        },
        {
          title: "Tu código",
          paragraphs: [
            "El código sigue siendo tuyo. Conectar un repositorio no nos transfiere la propiedad.",
            "No vendemos el contenido de tus repositorios. No los usamos como producto.",
            "El nombre Refract, el sitio y el producto pertenecen a Devrefract, una empresa de Lintel.",
          ],
        },
        {
          title: "Disponibilidad",
          paragraphs: [
            "Trabajamos para mantener Refract en marcha. No prometemos que esté siempre activo, ni que cada revisión sea completa o correcta.",
            "Trata un resultado como algo que aún tienes que juzgar. Refract es una herramienta, no una garantía.",
          ],
        },
        {
          title: "Si algo sale mal",
          paragraphs: [
            "Refract se ofrece tal cual. En la medida en que la ley lo permita, no somos responsables de beneficios perdidos, código perdido, retraso u otros daños indirectos por usar — o no usar — el producto.",
          ],
        },
        {
          title: "Dejar de usarlo",
          paragraphs: [
            "Puedes dejar de usar Refract en cualquier momento. Desinstala la GitHub App para cortar el acceso a tus repositorios.",
            "Podemos suspender o terminar el acceso si incumples estos términos o abusas del servicio. Para preguntas de cuenta, usa Contacto.",
          ],
        },
      ],
      contactHtml: `Las preguntas legales van por <a href="/contact">Contacto</a>.`,
      changes:
        "Cuando cambien estos términos, actualizamos esta página y la fecha. Si sigues usando Refract después de un cambio, aceptas los términos actualizados.",
    },
    notFound: {
      title: "Página no encontrada — Refract",
      description: "Esta página no está aquí.",
      headline: "Esta página no existe.",
      body: "El enlace es incorrecto o la página se movió.",
      cta: "Volver al inicio",
    },
  },
};
