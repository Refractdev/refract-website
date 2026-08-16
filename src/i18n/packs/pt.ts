import {
  BRAND_NAME,
  COMPANY_NAME,
  LOGIN_PATH,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const pt: ContentPack = {
  ui: {
    backToHome: "Voltar ao início",
    billingPeriod: "Período de faturação",
    monthly: "Mensal",
    yearly: "Anual",
    twoMonthsFree: "2 meses grátis",
    individuals: "Planos individuais",
    forTeams: "Para equipas",
    allDocs: "Toda a documentação",
    documentation: "Documentação",
    privacyFooterBefore: "Usamos o que precisamos para o produto funcionar. Vê",
    privacyFooterLink: "Privacidade",
    language: "Idioma",
    skipToContent: "Saltar para o conteúdo",
    homeCrumb: "Início",
    shortVersion: "Versão curta",
    contactHeading: "Contacto",
    changesHeading: "Alterações",
    legalLabel: "Legal",
    bestFor: "Melhor para:",
    homeAria: "Início Refract",
    openMenu: "Abrir menu",
    githubHeading: "GitHub",
    connectHeading: "Ligar",
  },
  seo: {
    defaultTitle: "Refract — A IA escreveu. Deixa-o pronto a lançar.",
    defaultDescription:
      "O Refract transforma código gerado por IA em software mais limpo e mais consistente, que consegues mesmo manter.",
    ogTitle: "A IA escreveu. Deixa-o pronto a lançar.",
    ogDescription:
      "O passo a seguir a gerar. O Refract limpa e afina o código gerado por IA para continuares a lançar.",
    ogImageAlt: "Refract — o passo depois de a IA escrever o código.",
    jsonLdDescription:
      "O Refract transforma código gerado por IA em software mais limpo e mais consistente, que consegues mesmo manter.",
  },
  nav: {
    marketingLinks: [
      { label: "Produto", href: "/product" },
      { label: "Preços", href: "/pricing" },
      { label: "Documentação", href: "/docs" },
    ],
    footerSections: [
      {
        title: "Produto",
        links: [
          { label: "Produto", href: "/product" },
          { label: "Preços", href: "/pricing" },
          { label: "Segurança", href: "/security" },
        ],
      },
      {
        title: "Documentação",
        links: [
          { label: "Primeiros passos", href: "/docs/getting-started" },
          { label: "Aprovar", href: "/docs/approve" },
          { label: "FAQ", href: "/docs/faq" },
          { label: "Toda a documentação", href: "/docs" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre", href: "/about" },
          { label: "Contacto", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidade", href: "/privacy" },
          { label: "Termos", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — o passo depois de a IA escrever o código.",
    footerFinePrint: "Feito para React e TypeScript no GitHub.",
    githubAppLabel: "Ligar o GitHub",
    discordLabel: "Discord",
    signIn: "Iniciar sessão",
    getStarted: "Começar",
  },
  brand: {
    attribution: `${PRODUCT_NAME} é desenvolvido pela ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
    copyrightLine: `${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
    operatorSentence: `${PRODUCT_NAME} é um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
    about: {
      title: `Sobre — ${PRODUCT_NAME}`,
      description: `${PRODUCT_NAME} é o passo depois de a IA escrever o código. É um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
      label: "Empresa",
      headline: PRODUCT_NAME,
      intro: `${PRODUCT_NAME} revê código gerado por IA nos pull requests do GitHub, prepara uma limpeza quando é seguro, e espera pela tua aprovação.`,
      sections: [
        {
          title: "Quem o constrói",
          body: `${PRODUCT_NAME} é um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
        },
      ],
    },
  },
  home: {
    seo: {
      title: "Refract — A IA escreveu. Deixa-o pronto a lançar.",
      description:
        "O Refract pega no código gerado por IA e transforma-o em software mais limpo e mais organizado — antes de a confusão se tornar o projeto.",
      ogTitle: "A IA escreveu. Deixa-o pronto a lançar.",
      ogDescription:
        "O passo a seguir a gerar. O Refract limpa e afina o código gerado por IA para continuares a lançar.",
    },
    hero: {
      pill: { label: "Aprovar no GitHub Check", href: "/docs/approve" },
      headline: "A IA escreveu. Deixa-o pronto a lançar.",
      subhead:
        "O Refract pega no código que as tuas ferramentas de IA produzem e transforma-o em algo mais limpo, mais consistente e mais fácil de manter — para o projeto não se desfazer à medida que cresce.",
      primary: { label: "Começar", href: SIGNUP_PATH },
      secondary: { label: "Ver como funciona", href: "/product" },
      trust: "Aprovas cada alteração. O Refract nunca reescreve o teu projeto sozinho.",
      caption: "Antes de se tornar o código-base",
      stack: "React · TypeScript · GitHub",
    },
    problem: {
      headline: "Código que funciona pode ser, mesmo assim, uma confusão.",
      bullets: [
        "o mesmo comportamento, copiado em vez de partilhado",
        "código de interface a fazer trabalho que não lhe pertence",
        "estado e efeitos a mais que só faziam sentido naquele momento",
        "estrutura que fazia sentido para um ficheiro, não para um produto",
      ],
      close: "Não precisas de mais código gerado. Precisas que o código gerado continue bom.",
    },
    turn: {
      headline: "O Refract é o que acontece depois de a IA escrever o código.",
      lede: "Não é mais uma lista de queixas. É um projeto mais limpo.",
      more: { label: "Ver como funciona", href: "/product" },
    },
    result: {
      headline: "O resultado é código que podes manter.",
      points: [
        {
          title: "Mais limpo",
          body: "A confusão óbvia é <strong>tirada dos ecrãs</strong> e colocada onde deve estar.",
        },
        {
          title: "Mais consistente",
          body: "<strong>A lógica repetida deixa de se multiplicar.</strong> O projeto começa a parecer um produto, não doze primeiros rascunhos.",
        },
        {
          title: "Mais fácil de alterar",
          body: "Consegues <strong>acrescentar a próxima coisa</strong> sem atravessar um labirinto que ninguém quis construir.",
        },
        {
          title: "Continua a ser teu",
          body: "<strong>Nada muda até tu dizeres que sim.</strong> Vês o que vai acontecer. Ficas com o botão de merge.",
        },
      ],
    },
    does: {
      headline: "Não se limita a apontar problemas. Melhora o código.",
      more: { label: "Ver o produto", href: "/product" },
      points: [
        {
          number: "1",
          title: "Primeiro, percebe o projeto",
          body: "O Refract olha para a forma como o software está mesmo montado — não só para o último ficheiro que mudou — para a limpeza assentar no projeto que já tens.",
        },
        {
          number: "2",
          title: "Encontra a confusão que a IA costuma deixar",
          body: "Lógica copiada. Pedidos de dados dentro da interface. Estado que ninguém usa. Efeitos que ficam para trás. Estrutura que dói assim que a aplicação cresce.",
        },
        {
          number: "3",
          title: "Diz-te o que limpar primeiro",
          body: "Quando há mais do que um problema, recebes uma ordem que faz sentido — não um muro de ruído.",
        },
        {
          number: "4",
          title: "Pode fazer a limpeza por ti",
          body: "Quando a alteração é segura e contida, o Refract prepara-a. Tu aprovas. Ele aplica a alteração e confirma que o projeto continua de pé. Se não puder fazer a alteração em segurança, diz-te — em vez de adivinhar.",
        },
      ],
    },
    world: {
      headline: "Aparece onde o código está prestes a tornar-se o projeto.",
      lede: "Liga os repositórios que te importam. Quando entra código novo, o Refract revê-o ali mesmo.",
      caption: "Um resultado. Tu decides.",
      decide: "Ficas com um resultado claro:",
      close:
        "Aprova no GitHub. Fica no fluxo que já tens. O Refract não te pede para viveres numa segunda caixa de entrada.",
    },
    trust: {
      headline: "Aprovas cada alteração.",
      points: [
        {
          title: "Tu aprovas.",
          body: "O Refract nunca aplica uma alteração até tu aprovares.",
        },
        {
          title: "Prefere ficar calado a estar errado.",
          body: "Se não conseguir provar um problema, não inventa um para parecer ocupado.",
        },
        {
          title: "Se não puder limpar em segurança, não finge.",
          body: "Recebes uma explicação, não uma reescrita irresponsável.",
        },
        {
          title: "Verifica o próprio trabalho.",
          body: "Depois de uma limpeza assentar, o Refract volta a olhar. Uma limpeza falhada nunca é descrita como sucesso.",
        },
        {
          title: "Não é um chatbot a reescrever a tua aplicação.",
          body: "As limpezas que aplica são específicas e limitadas. Palpites criativos não são «correções».",
        },
      ],
    },
    steps: {
      headline: "Três passos. Depois corre enquanto trabalhas.",
      note: "Instalar a aplicação não é o mesmo que iniciar sessão. A tua conta Refract e o acesso ao GitHub ficam separados de propósito.",
      cta: { label: "Começar", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "Cria uma conta",
          body: "E-mail e palavra-passe. Esse é o teu acesso ao Refract — não um início de sessão com o GitHub.",
        },
        {
          number: "2",
          title: "Liga o GitHub e escolhe repositórios",
          body: "Instala a aplicação Refract nos projetos que queres limpar. Tu escolhes quais.",
        },
        {
          number: "3",
          title: "Continua a lançar",
          body: "Abre um pull request como já fazes. O Refract lê a alteração no contexto do projeto. Se houver uma limpeza pronta, aprovas. Depois fazes merge quando estiveres pronto.",
        },
      ],
    },
    audience: {
      headline: "Para quem constrói com IA e ainda tem de viver com o resultado.",
      points: [
        {
          title: "A solo",
          body: "Estás a lançar um produto com Copilot, Cursor, ou o próximo modelo. O código chega depressa. Queres que continue a ser algo que consegues manter.",
        },
        {
          title: "Equipas",
          body: "Várias pessoas a gerar ao mesmo tempo. O repositório é a memória partilhada. O Refract é como essa memória se mantém coerente.",
        },
        {
          title: "Feito para hoje",
          body: "React e TypeScript no GitHub. É aí que este problema se ouve mais alto neste momento. Outras stacks vêm quando forem reais — não como promessa na página inicial.",
        },
      ],
    },
    ships: {
      headline: "Novidades",
      more: { label: "Ver a documentação", href: "/docs" },
      items: [
        { date: "ago 2026", title: "Aprovar no GitHub Check", href: "/docs/approve" },
        { date: "ago 2026", title: "Entra no Discord", href: "https://discord.gg/SH787P4rP4" },
        { date: "ago 2026", title: "Liga o GitHub depois de iniciares sessão", href: "/docs/connect-github" },
      ],
    },
    social: {
      headline: "Entra na comunidade",
      line: "Faz perguntas, partilha um pull request, fica com outras pessoas que usam o Refract.",
      discord: {
        kicker: "Discord",
        title: "Fala com outros builders",
        body: "A sala para equipas no início, perguntas de produto, e o que partiu num pull request.",
        cta: "Entrar no Discord",
      },
      github: {
        kicker: "GitHub",
        title: "Liga-o no Refract",
        body: "Primeiro cria a conta. A App instala-se no onboarding, para ficar associada à tua conta.",
        cta: "Começar",
      },
    },
    honesty: {
      headline: "O que o Refract não é.",
      paragraphs: [
        "Não é um IDE. Não substitui as tuas ferramentas de IA para escrever código. Não é um linter genérico. Não é um bot que deixa vinte comentários em cada linha.",
        "Não vai reorganizar o teu produto inteiro de um dia para o outro. Não vai corrigir automaticamente todos os problemas de segurança. Não faz merge por ti.",
        "Vai tornar as partes geradas por IA de um projeto React e TypeScript mais limpas, mais claras e mais fáceis de manter — e o controlo fica contigo.",
      ],
    },
    cta: {
      headline: "A IA escreveu. Deixa-o pronto a lançar.",
      body: "Cria uma conta, liga o GitHub, e deixa o Refract levar os primeiros rascunhos até ao fim.",
      primary: { label: "Começar", href: SIGNUP_PATH },
      secondary: { label: "Ver preços", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "Como o Refract funciona — limpeza de código de IA no GitHub",
      description:
        "O Refract revê código gerado por IA nos pull requests do GitHub, prepara uma limpeza quando é seguro, e espera pela tua aprovação.",
      ogTitle: "Como o Refract funciona",
      ogDescription:
        "Liga o GitHub. Continua a lançar. O Refract limpa código gerado por IA quando é seguro — e pergunta antes de tocar em qualquer coisa.",
    },
    hero: {
      headline: "De código gerado a código que podes manter.",
      subhead:
        "O Refract lê o projeto, encontra o que se vai tornar uma confusão, e prepara uma limpeza que tu aprovas. Nunca sais do GitHub para decidir.",
      cta: { label: "Começar", href: SIGNUP_PATH },
    },
    loop: {
      headline: "Um ciclo simples",
      beats: [
        {
          number: "1",
          title: "Ver o projeto",
          body: "O Refract olha para o software como um todo, para uma alteração num ecrã poder respeitar o resto.",
        },
        {
          number: "2",
          title: "Encontrar o que vai doer mais tarde",
          body: "Procura os padrões que aparecem quando o código é gerado à pressa: lógica copiada, ecrãs emaranhados, estado a mais, estrutura que não envelhece bem. Se ficou qualquer coisa sensível no código — como uma credencial — diz-te. Não «corrige» segredos em silêncio.",
        },
        {
          number: "3",
          title: "Limpar o que puder",
          body: "Quando a limpeza é segura, recebes uma alteração concreta para aprovar. Quando não é, recebes uma explicação clara em vez de um palpite.",
        },
        {
          number: "4",
          title: "Verificar, e depois lembrar",
          body: "Depois de aprovares, o Refract aplica a alteração e volta a olhar. Com o tempo podes ver se o projeto está a ficar mais limpo — ou se continua a lançar a confusão.",
        },
      ],
    },
    places: {
      headline: "Decide no GitHub. Usa o site para o resto.",
      close: "O site não é um segundo sítio para aceitar limpezas. A decisão fica ao lado do código.",
      github: {
        title: "No GitHub",
        items: [
          "Vê o resultado no pull request",
          "Aprova uma limpeza",
          "Dispensa quando não se aplica",
          "Faz merge quando estiveres pronto",
        ],
      },
      web: {
        title: "No site",
        items: [
          "Cria a tua conta",
          "Liga a GitHub App",
          "Escolhe repositórios",
          "Vê o que está ligado, ao longo do tempo",
        ],
      },
    },
    results: {
      headline: "Vais ver um de poucos resultados honestos",
      items: [
        { title: "Ainda a trabalhar", body: "Espera. Isto ainda não passou." },
        { title: "Parece limpo", body: "Nada do Refract precisa de ti nesta alteração." },
        { title: "Limpeza pronta", body: "Há uma limpeza segura preparada. Aprova-a no GitHub." },
        {
          title: "Dá uma vista de olhos",
          body: "Há qualquer coisa que importa, e o Refract não a vai alterar por ti. Lê a explicação.",
        },
        {
          title: "Algo correu mal",
          body: "A análise falhou. O Refract diz-te. Não pinta um sucesso falso.",
        },
      ],
    },
    cleans: {
      headline: "O que «mais limpo» quer dizer na prática",
      body: "Em projetos React e TypeScript, o Refract é especialmente bom nos restos de uma geração rápida:",
      bullets: [
        "pedidos de dados misturados na interface",
        "a mesma lógica escrita duas vezes",
        "estado que nunca é mesmo usado",
        "efeitos que não se limpam a si próprios",
        "timeouts em falta e tratamento de erros em falta nas extremidades",
        "ecrãs a fazer trabalho que pertence a outro sítio",
      ],
      close:
        "Uma parte disto pode limpar por ti. Outra parte, só aponta — de propósito. Uma reescrita automática má é pior do que uma nota honesta.",
    },
    start: {
      headline: "Cerca de dez minutos para começar",
      steps: [
        "Cria uma conta",
        "Instala a GitHub App e escolhe repositórios",
        "Abre um pull request",
      ],
      note: "Ligar o GitHub não inicia sessão no Refract, e iniciar sessão no Refract não instala o acesso ao GitHub. Dois passos, dois trabalhos.",
      cta: { label: "Criar a tua conta", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "Isto vai lutar com as minhas ferramentas de IA?",
        a: "Não. Continua a gerar. O Refract é o passo que deixa o resultado fácil de manter.",
      },
      {
        q: "Vai alterar código sem mim?",
        a: "Não. Tu aprovas. Tu fazes merge.",
      },
      {
        q: "Tenho de aprender um espaço de trabalho novo?",
        a: "Não. No dia a dia, ficas no GitHub.",
      },
    ],
  },
  pricing: {
    seo: {
      title: "Preços — Refract | Free, Starter $12, Pro $24",
      description:
        "Free $0. Starter $12. Pro $24/mês. Ultimate $49. Planos Team a partir de $149. Começa grátis — não cobramos no registo.",
      ogTitle: "Preços Refract — do Free ao Pro $24/mês",
      ogDescription:
        "Free $0. Starter $12. Pro $24/mês. Equipas a partir de $149. O pagamento com cartão está a chegar; não cobramos no registo.",
    },
    hero: {
      headline: "Paga por software mais limpo — não por mais ruído.",
      subhead: "Começa num repositório a sério. Passa de plano quando o projeto — ou a equipa — precisar de mais espaço.",
      priceLine: "Free $0. Starter $12. Pro $24/mês. Ultimate $49. Equipas a partir de $149.",
      banner:
        "Começa grátis hoje. Os planos pagos estão listados para saberes para onde isto vai. O pagamento com cartão está a chegar; não cobramos no registo.",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "Experimenta o Refract num projeto a sério.",
        features: [
          "2 repositórios",
          "50 revisões / mês",
          "5 limpezas que podes aprovar / mês",
          "Resultados consultivos no GitHub",
        ],
        cta: "Começar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Ver no teu próprio código",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Para um programador a solo que usa IA todos os dias num conjunto pequeno de projetos.",
        features: [
          "5 repositórios",
          "150 revisões / mês",
          "Limpezas ilimitadas dentro desse limite de revisões",
          "Check obrigatório em até 2 repositórios",
        ],
        cta: "Começar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Uma pessoa, poucos repositórios ativos",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Para quem está a lançar um produto a sério com IA.",
        features: [
          "15 repositórios",
          "400 revisões / mês",
          "Limpezas ilimitadas dentro desse limite de revisões",
          "Check obrigatório em todos os repositórios ligados",
          "Histórico completo do que ficou mais limpo ao longo do tempo",
        ],
        cta: "Começar",
        href: SIGNUP_PATH,
        badge: "Mais popular",
        bestFor: "Quem está a lançar um produto",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Para operadores com muitos repositórios ou projetos de clientes.",
        features: [
          "40 repositórios",
          "1,000 revisões / mês",
          "Limpezas ilimitadas dentro desse limite de revisões",
          "Revisão prioritária",
          "Opções de proteção completas",
        ],
        cta: "Começar",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "Muitos projetos, um operador",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Uma empresa pequena, uma organização GitHub, IA no dia a dia.",
        features: [
          "10 pessoas",
          "30 repositórios",
          "1 organização GitHub",
          "1,000 revisões / mês",
        ],
        cta: "Falar connosco",
        href: "/contact",
        badge: null,
        bestFor: "Uma empresa pequena",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Mais serviços, mais volume, uma relação comercial a sério.",
        features: [
          "30 pessoas",
          "100 repositórios",
          "2 organizações GitHub",
          "4,000 revisões / mês",
          "Revisão prioritária",
          "Chamada de arranque",
        ],
        cta: "Falar connosco",
        href: "/contact",
        badge: null,
        bestFor: "Mais volume",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ mês",
        yearlyPeriod: "/ ano",
        description: "Vários projetos, volume alto, uma pessoa com nome que conhece a tua conta.",
        features: [
          "75 pessoas",
          "250 repositórios",
          "5 organizações GitHub",
          "12,000 revisões / mês",
        ],
        cta: "Falar connosco",
        href: "/contact",
        badge: null,
        bestFor: "Volume alto",
      },
      {
        name: "Enterprise",
        monthlyPrice: "A partir de $2,500",
        yearlyPrice: "A partir de $2,500",
        period: "/ mês",
        yearlyPeriod: "/ mês",
        description: "Quando precisas de um contrato, limites à medida, ou uma revisão de segurança.",
        features: [],
        cta: "Falar connosco",
        href: "/contact",
        badge: null,
        bestFor: "Contrato e limites à medida",
        custom: true,
      },
    ],
    footnote:
      "O anual são dois meses grátis. «Revisões» significa cada vez que código novo num pull request é analisado. As limpezas ilimitadas continuam dentro desse limite mensal de revisões.",
    value: {
      headline: "Não estás a pagar por comentários.",
      paragraphs: [
        "Estás a pagar por um projeto que continua fácil de manter enquanto continuas a gerar.",
        "O Free é como sentes uma limpeza a sério num repositório a sério. O Pro é como isso se torna normal. Os planos Team são como um grupo de pessoas a gerar ao mesmo tempo não transforma o repositório em doze estilos de primeiro rascunho.",
        "Não cobramos extra porque uma alteração estava saudável. O silêncio faz parte do produto.",
      ],
    },
    faqs: [
      {
        q: "Posso pagar hoje?",
        a: "Cria uma conta e começa. O pagamento com cartão está a ser lançado. Não vais ser surpreendido com uma cobrança no registo.",
      },
      {
        q: "O GitHub está incluído?",
        a: "Não. O GitHub é à parte. O Refract é nosso.",
      },
      {
        q: "O que acontece se chegar a um limite?",
        a: "Vês um convite claro para passar de plano. Não paramos em silêncio a fingir que está tudo bem.",
      },
      {
        q: "Cobram por pessoa no Pro?",
        a: "Não. Os planos individuais cobram-se por repositórios e revisões mensais, não por quantas pessoas escreveram.",
      },
      {
        q: "Posso usar isto num repositório da empresa?",
        a: "Sim, se puderes instalar GitHub Apps lá. Para faturação partilhada e lugares, usa o Team ou fala connosco.",
      },
      {
        q: "O Aceitar / a limpeza estão bloqueados no Free?",
        a: "O Free inclui um número pequeno de limpezas por mês para sentires o produto a sério — não uma demonstração que nunca altera código.",
      },
    ],
  },
  docs: {
    seo: {
      title: "Documentação — Refract",
      description:
        "Cria uma conta Refract, liga o GitHub, e começa a limpar código gerado por IA nos pull requests que já abres.",
    },
    headline: "Documentação",
    intro: "Tudo o que precisas para usar o Refract.",
    groups: [
      {
        title: "Começa aqui",
        numbered: true,
        links: [
          { label: "Primeiros passos", href: "/docs/getting-started" },
          { label: "Criar uma conta", href: "/docs/account" },
          { label: "Ligar o GitHub", href: "/docs/connect-github" },
          { label: "A tua primeira limpeza", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "Usar o Refract",
        links: [
          { label: "O que vês num pull request", href: "/docs/on-github" },
          { label: "Aprovar ou dispensar", href: "/docs/approve" },
          { label: "O site", href: "/docs/web" },
          { label: "Repositórios", href: "/docs/repositories" },
        ],
      },
      {
        title: "Referência",
        links: [
          { label: "FAQ", href: "/docs/faq" },
          { label: "Segurança", href: "/security" },
          { label: "Limites", href: "/docs/limits" },
          { label: "Resolução de problemas", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "Primeiros passos",
        description: "Cria uma conta, liga o GitHub, e abre um pull request. Cerca de 10 minutos.",
        blocks: [
          { type: "lede", text: "Cerca de 10 minutos." },
          {
            type: "p",
            text: "Precisas de uma conta GitHub, de um repositório React / TypeScript que possas ligar, e de um endereço de e-mail.",
          },
          { type: "h2", text: "1. Cria a tua conta" },
          {
            type: "p",
            text: "Vai a Começar. Nome, e-mail, palavra-passe. Confirma o e-mail se pedirmos, e depois inicia sessão.",
          },
          { type: "p", text: "Isto não é «Iniciar sessão com o GitHub»." },
          { type: "h2", text: "2. Liga o GitHub" },
          {
            type: "p",
            text: "Cais em Ligar o GitHub. Instala a GitHub App, escolhe a conta e os repositórios, volta, e escolhe que projetos o Refract deve acompanhar.",
          },
          {
            type: "p",
            text: "Enquanto isto não estiver feito, os ecrãs principais ficam fechados. É de propósito.",
          },
          { type: "h2", text: "3. Abre um pull request" },
          {
            type: "p",
            text: "Num repositório ligado, abre um PR. Espera pelo Refract. Se houver uma limpeza pronta, aprova-a no GitHub.",
          },
          { type: "h2", text: "4. Usa o site quando quiseres a vista mais longa" },
          {
            type: "p",
            text: "A vista geral mostra o que está ligado. No dia a dia, ficas no pull request.",
          },
          {
            type: "html",
            html: 'Seguinte: <a href="/docs/connect-github">Ligar o GitHub</a> · <a href="/docs/first-cleanup">A tua primeira limpeza</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "A tua conta Refract",
        description: "Regista-te com nome, e-mail e palavra-passe. O GitHub é um passo à parte.",
        blocks: [
          { type: "p", text: "Regista-te com nome, e-mail e palavra-passe." },
          { type: "html", html: `Inicia sessão em <a href="${LOGIN_PATH}">Iniciar sessão</a>.` },
          {
            type: "p",
            text: "Palavra-passe esquecida: enviamos uma ligação de reposição se esse endereço tiver conta.",
          },
          { type: "p", text: "Termina sessão na aplicação." },
          {
            type: "p",
            text: "Esta conta não é permissão do GitHub. Ligar repositórios é um passo à parte.",
          },
          {
            type: "p",
            text: "Em Definições → Conta podes editar o nome que mostramos no produto.",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "Ligar o GitHub",
        description:
          "Instala a GitHub App para o Refract ler o pull request, publicar um resultado, e aplicar uma limpeza depois de aprovares.",
        blocks: [
          {
            type: "p",
            text: "O Refract precisa da GitHub App para ler o pull request, publicar um resultado, e — só depois de aprovares — aplicar uma limpeza.",
          },
          {
            type: "html",
            html: `<ol>
          <li>Inicia sessão no Refract</li>
          <li>Abre Ligar o GitHub</li>
          <li>Instala a App a partir daí — não deste site — para ficar associada à tua conta</li>
          <li>Escolhe repositórios específicos (recomendado)</li>
          <li>Volta ao Refract e confirma quais acompanhar</li>
        </ol>`,
          },
          { type: "h2", text: "Instalado vs obrigatório" },
          {
            type: "p",
            text: "Ligado significa que o Refract revê código novo. Não bloqueia merges por si. Se quiseres que o GitHub espere pelo Refract, isso é um check obrigatório que defines no GitHub — podemos apontar-te o caminho em Definições. Nunca ligamos isso durante a instalação.",
          },
          { type: "h2", text: "Desinstalar" },
          {
            type: "p",
            text: "Remove a App em GitHub → Settings → Applications. O Refract deixa de acompanhar esses repositórios.",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "A tua primeira limpeza",
        description: "Abre um pull request, espera pelo Refract, e aprova uma limpeza no GitHub.",
        blocks: [
          {
            type: "p",
            text: "Antes de começares: conta criada, GitHub ligado, pelo menos um repositório React / TypeScript selecionado.",
          },
          {
            type: "ol",
            items: [
              "Abre um pull request",
              "Encontra o Refract em Checks",
              "Espera até terminar — pendente não é sucesso",
              "Lê o resultado curto",
            ],
          },
          { type: "h2", text: "Se houver uma limpeza pronta" },
          {
            type: "p",
            text: "Aprova no check. O Refract aplica a alteração ao branch. Volta a olhar. O merge continua a ser teu.",
          },
          { type: "h2", text: "Se te pedir para olhares" },
          {
            type: "p",
            text: "Encontrou qualquer coisa que não vai alterar automaticamente. Lê a explicação. Corrige tu, ou deixa ficar — a decisão é tua.",
          },
          { type: "h2", text: "Se alguma coisa correu mal" },
          {
            type: "p",
            text: "Dizemos. Faz push de um commit pequeno para tentar outra vez. Não vamos mostrar um resultado verde falso.",
          },
        ],
      },
      {
        slug: "on-github",
        title: "No GitHub",
        description: "Um check. Um comentário-resumo, atualizado no sítio — não uma pilha de ruído de bots.",
        blocks: [
          {
            type: "p",
            text: "Um check. Um comentário-resumo, atualizado no sítio — não uma pilha de ruído de bots.",
          },
          {
            type: "p",
            text: "O check pode ainda estar a trabalhar, parecer limpo, ter uma limpeza pronta, pedir-te para olhares, ou reportar um erro.",
          },
          {
            type: "p",
            text: "Quando há uma limpeza pronta, Aceitar (e Dispensar) aparecem no check.",
          },
          { type: "h2", text: "Checks obrigatórios" },
          {
            type: "p",
            text: "Opcional. Define nas regras de branch do GitHub se quiseres que os merges esperem. Ligar a aplicação não faz isto por ti.",
          },
        ],
      },
      {
        slug: "approve",
        title: "Aprovar ou dispensar",
        description: "Aprovar aplica uma limpeza no GitHub. Dispensar significa que escolhes não a aplicar.",
        blocks: [
          {
            type: "p",
            text: "Isto acontece no GitHub, no check do Refract — não como o botão principal no site.",
          },
          { type: "h2", text: "Aprovar" },
          {
            type: "p",
            text: "Aplica a limpeza preparada ao branch. O check corre outra vez. Fazes merge quando estiveres pronto. Isto não é auto-merge.",
          },
          { type: "h2", text: "Dispensar" },
          {
            type: "p",
            text: "Usa quando percebes a nota e escolhes não a aplicar. Não é um «ignorar isto para sempre» permanente para o projeto inteiro.",
          },
          { type: "h2", text: "Quando o Aprovar falta" },
          {
            type: "p",
            text: "Não há uma limpeza automática segura. Lê a explicação, ou espera se o check falhou.",
          },
        ],
      },
      {
        slug: "web",
        title: "O site",
        description: "Depois da configuração, o site mostra o que está ligado. Aprovar continua a acontecer no GitHub.",
        blocks: [
          { type: "p", text: "Depois da configuração, vês:" },
          {
            type: "html",
            html: "<p><strong>Vista geral</strong> — o que está ligado, e mais tarde um quadro simples de se o projeto está a ficar mais limpo. Contas recentes muitas vezes têm pouco histórico. Isso é honesto, não está partido.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Repositórios</strong> — os projetos que escolheste.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Pull requests</strong> — resultados recentes, para memória. Aprovar ao vivo continua a acontecer no GitHub.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Insights</strong> — padrões ao longo do tempo, quando já houver histórico suficiente. Não inventamos uma pontuação para parecer saudável.</p>",
          },
          {
            type: "html",
            html: "<p><strong>Definições</strong> — conta, que repositórios, e com que rigor cada um é tratado. A faturação vai viver aqui quando o pagamento com cartão chegar.</p>",
          },
          { type: "p", text: "O site não é uma segunda caixa de entrada para aceitar." },
        ],
      },
      {
        slug: "repositories",
        title: "Repositórios",
        description: "Instalar a App dá permissão. Selecionar repositórios escolhe o que o Refract acompanha.",
        blocks: [
          { type: "p", text: "Começa com um repositório de produto ativo. Acrescenta mais tarde em Definições." },
          {
            type: "p",
            text: "Instalar a App no GitHub dá permissão. Selecionar repositórios no Refract escolhe o que o produto acompanha. Precisas das duas coisas.",
          },
          { type: "h2", text: "Linguagens" },
          {
            type: "p",
            text: "Melhor em React / TypeScript. Outras stacks podem ter pouca ou nenhuma cobertura. Preferimos dizê-lo a fingir confiança.",
          },
        ],
      },
      {
        slug: "limits",
        title: "Limites",
        description: "Aquilo em que o Refract é bom — e o que não vai fingir fazer.",
        blocks: [
          {
            type: "p",
            text: "O Refract é bom em confusões específicas que aparecem em React e TypeScript gerados por IA — e em aplicar uma limpeza quando essa limpeza é segura.",
          },
          {
            type: "p",
            text: "Não é uma garantia de que todos os erros são encontrados. Não é uma revisão humana completa. Não é uma reconstrução da tua arquitetura.",
          },
          {
            type: "p",
            text: "Se não conseguirmos provar um problema, ficamos calados. Se não conseguirmos limpar qualquer coisa em segurança, não oferecemos Aprovar.",
          },
          {
            type: "html",
            html: 'Alterações muito grandes podem demorar mais. Os limites dos planos estão na página de <a href="/pricing">preços</a>.',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "Resolução de problemas",
        description: "Problemas comuns de configuração e de checks do GitHub, e como desbloquear.",
        blocks: [
          { type: "h2", text: "Continuam a mandar-me para Ligar o GitHub" },
          {
            type: "p",
            text: "A configuração não está concluída até a App estar instalada e pelo menos um repositório estar selecionado no Refract.",
          },
          { type: "h2", text: "Conta GitHub errada" },
          {
            type: "p",
            text: "Instala a partir de um navegador com sessão iniciada na conta que é dona dos repositórios.",
          },
          { type: "h2", text: "O check nunca aparece" },
          {
            type: "p",
            text: "Confirma que o repositório está instalado no GitHub e selecionado no Refract. Espera um minuto. Atualiza os Checks.",
          },
          { type: "h2", text: "Aprovar não fez nada" },
          {
            type: "p",
            text: "Usa a ação no check, não só o comentário. Confirma que a App ainda tem permissão para escrever. As regras de branch do GitHub podem bloquear a aplicação — lê o erro do GitHub.",
          },
          { type: "h2", text: "O e-mail de reposição nunca chega" },
          { type: "p", text: "Vê o spam. Confirma o endereço. Tenta outra vez." },
          { type: "h2", text: "Ainda preso" },
          {
            type: "html",
            html: '<a href="/contact">Contacto</a> com: o que esperavas, o que aconteceu, a ligação do pull request e a hora (com fuso horário).',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "FAQ — Refract",
      description:
        "Respostas sobre o que é o Refract, como funciona no GitHub, confiança, contas e preços.",
    },
    title: "FAQ",
    groups: [
      {
        title: "Produto",
        items: [
          {
            q: "O que é o Refract?",
            a: "O passo depois de a IA escrever o código. Transforma software gerado em código mais limpo e mais fácil de manter — nos pull requests do GitHub que já abres.",
          },
          {
            q: "Isto é um revisor de IA?",
            a: "Não. Não é um chatbot a deixar ensaios no teu diff. Procura confusões específicas, explica-as, e quando pode, prepara uma limpeza que tu aprovas.",
          },
          {
            q: "Vai melhorar o meu código ou só chatear-me?",
            a: "Quando uma limpeza é segura, pode aplicá-la depois de aprovares. Quando não é segura, diz-te. O ponto é um projeto melhor, não um fio de comentários mais longo.",
          },
          {
            q: "Funciona com Cursor / Copilot / ChatGPT?",
            a: "Sim, da única forma que importa: essas ferramentas escrevem para o GitHub. O Refract vigia o resultado. Não precisamos de viver no teu editor.",
          },
          {
            q: "Que linguagens suportam?",
            a: "React e TypeScript primeiro. Outras stacks não são um «sim» em silêncio.",
          },
          {
            q: "Substitui a revisão de código?",
            a: "Não. Tira-te um tipo de problemas de manutenção para os humanos poderem rever o trabalho que ainda precisa de um humano.",
          },
        ],
      },
      {
        title: "Confiança",
        items: [
          {
            q: "Pode alterar o meu repositório sem perguntar?",
            a: "Não.",
          },
          {
            q: "Vão fazer merge do meu pull request?",
            a: "Não. Aprova uma limpeza, depois fazes tu o merge.",
          },
          {
            q: "Treinam modelos com o nosso código?",
            a: 'Não. Não treinamos modelos com o teu repositório. Enviamos o conteúdo do pull request a fornecedores de modelos só para rever essa alteração e preparar uma limpeza que aprovas. Não vendemos o teu código. Vê <a href="/security">Segurança</a>.',
          },
          {
            q: "E se estiver errado?",
            a: "Prefere falhar um caso a inventar. Podes dispensar uma limpeza. Vês sempre a alteração antes de ela fazer parte do projeto.",
          },
        ],
      },
      {
        title: "Conta",
        items: [
          {
            q: "Inicio sessão com o GitHub?",
            a: "Não. E-mail e palavra-passe para o Refract. O acesso ao GitHub é a App que instalas.",
          },
          {
            q: "Porquê dois passos?",
            a: "Iniciar sessão e dar acesso a repositórios são trabalhos diferentes. Mantê-los à parte mantém as permissões claras.",
          },
          {
            q: "Posso experimentar sem o GitHub?",
            a: "Podes criar uma conta. O produto fica fechado até um repositório estar ligado — de outra forma não há nada para limpar.",
          },
        ],
      },
      {
        title: "Dinheiro",
        items: [
          {
            q: "Os preços já estão ativos?",
            a: "Os planos são reais. O pagamento com cartão está a ser lançado. Começa grátis.",
          },
        ],
      },
      {
        title: "Empresa",
        items: [
          {
            q: "Quem faz o Refract?",
            a: `O ${PRODUCT_NAME} é desenvolvido pela ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}. A ${COMPANY_NAME} é a empresa-mãe de tecnologia. A ${BRAND_NAME} constrói tecnologia para programadores. O ${PRODUCT_NAME} é o produto atual.`,
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "Segurança — Refract",
      description:
        "Como o Refract acede ao GitHub, o que lê num pull request, e o que nunca fará sem a tua aprovação.",
      headline: "O teu código. A tua aprovação. Nada em silêncio.",
      paragraphs: [
        "Inicias sessão no Refract com e-mail e palavra-passe.",
        "O acesso ao GitHub é só a App que instalas, nos repositórios que autorizas.",
        "Lemos pull requests para os rever. Publicamos um resultado. Aplicamos uma limpeza só depois de aprovares.",
        "Não fazemos merge por ti.",
        "Não iniciamos sessão com o GitHub só para abrir o site.",
        "Não vendemos o teu repositório como produto.",
        "Não fingimos que uma revisão correu bem quando falhou.",
        "Se virmos credenciais num pull request, dizemos-te. Substitui qualquer coisa que tenha ficado exposta.",
        "Podes desinstalar a GitHub App e restringir que repositórios vemos.",
      ],
      operator: `${PRODUCT_NAME} é um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
      reportLabel: "Comunicar um problema",
      reportHtml: `Usa <a href="/contact">Contacto</a> e escolhe Segurança. Tratamos isso como prioridade.`,
    },
    contact: {
      title: "Contacto — Refract",
      description: "Perguntas sobre o Refract, primeiras equipas, faturação, ou qualquer coisa que partiu num pull request.",
      headline: "Contacto",
      intro: "Perguntas sobre o Refract, primeiras equipas, faturação, ou qualquer coisa que partiu num pull request.",
      fields: {
        name: "Nome",
        email: "E-mail",
        topic: "Assunto",
        message: "Mensagem",
        link: "Ligação do repositório ou pull request (opcional)",
      },
      topics: ["Produto", "Faturação", "Segurança", "Outro"],
      submit: "Enviar mensagem",
      success: "Obrigado — respondemos para esse e-mail.",
      error: "Algo correu mal. Tenta outra vez.",
      bugs: "Para erros, inclui o que esperavas, o que aconteceu, a ligação do pull request e a hora.",
    },
    privacy: {
      title: "Privacidade — Refract",
      description:
        "O que o Refract recolhe, como trata o acesso a repositórios através da GitHub App, e como nos contactar com perguntas de privacidade.",
      headline: "Privacidade",
      updated: "Última atualização: 16 de agosto de 2026",
      short: [
        "Conta no site: e-mail e palavra-passe.",
        "Acesso ao código: só através da GitHub App, nos repositórios que autorizas.",
        "Processamos o conteúdo dos pull requests para o rever, para aplicar limpezas que aprovas, e para te mostrar o histórico no produto.",
        "Não fazemos merge por ti.",
        "Não vendemos o conteúdo do teu repositório.",
      ],
      collectHeadline: "O que recolhemos",
      collect:
        "E-mail e nome da conta. Instalação do GitHub e seleção de repositórios. Resultados de revisão e o histórico de que o produto precisa.",
      operator: `${PRODUCT_NAME} é um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
      contactHtml: `Perguntas de privacidade passam por <a href="/contact">Contacto</a>.`,
      changes: "Quando esta política mudar, atualizamos esta página e a data.",
    },
    terms: {
      title: "Termos — Refract",
      description:
        "Os termos de uso do Refract: contas, acesso ao GitHub, aprovação, planos, e o que fazemos e não fazemos com o teu código.",
      headline: "Termos",
      updated: "Última atualização: 16 de agosto de 2026",
      operator: `${PRODUCT_NAME} é um produto da ${BRAND_NAME}, uma empresa da ${COMPANY_NAME}.`,
      short: [
        "Liga só repositórios que tens autorização para ligar.",
        "Aprovas cada limpeza. O Refract não faz merge por ti, e não reescreve um projeto sozinho.",
        "O acesso ao código é só através da GitHub App, nos repositórios que autorizas.",
        "O código continua a ser teu. Não vendemos o conteúdo dos repositórios.",
        "Começa grátis. O pagamento com cartão ainda não está ativo; não serás cobrado no registo.",
      ],
      sections: [
        {
          title: "Estes termos",
          paragraphs: [
            "Estes termos aplicam-se quando usas o Refract: o site, o produto e a GitHub App. Se não concordas, não uses o produto.",
            "Os termos do GitHub continuam a aplicar-se ao GitHub. Estes termos cobrem o Refract.",
          ],
        },
        {
          title: "O produto",
          paragraphs: [
            "O Refract revê pull requests em busca de padrões que tornam o código gerado por IA difícil de manter. Quando uma limpeza é segura, prepara uma alteração para aprovares no GitHub. Quando não é, explica. Não finge que uma revisão correu bem quando falhou.",
            "O Refract não substitui a revisão humana, o teu editor, nem o GitHub. Não faz merge por ti.",
          ],
        },
        {
          title: "A tua conta",
          paragraphs: [
            "Crias uma conta com e-mail e palavra-passe. És responsável por essa conta. Guarda a palavra-passe para ti.",
            "Se usas o Refract por uma organização, confirmas que tens o direito de ligar os repositórios dela e de aceitar estes termos em nome dessa organização.",
          ],
        },
        {
          title: "GitHub e os teus repositórios",
          paragraphs: [
            "O acesso ao GitHub é só a App que instalas, nos repositórios que autorizas. Não iniciamos sessão com GitHub só para abrires o site.",
            "Declaras que tens autorização para ligar esses repositórios. Se não tens, não os ligues.",
            "Podes desinstalar a GitHub App ou restringir os repositórios que vemos a qualquer momento.",
          ],
        },
        {
          title: "Aprovação",
          paragraphs: [
            "Processamos o conteúdo dos pull requests para o rever, para aplicar limpezas que aprovas, e para te mostrar o histórico no produto.",
            "Uma limpeza só entra depois de a aprovares no GitHub. A decisão fica ao lado do código. Continuas responsável pelo que fazes merge.",
          ],
        },
        {
          title: "Uso aceite",
          paragraphs: [
            "Não ligues código que não tens o direito de ligar. Não tentes partir, fazer scrape ou sobrecarregar o serviço. Não uses o Refract para esconder malware ou para ignorar credenciais expostas.",
            "Se virmos credenciais num pull request, dizemos-te. Rodar o que foi exposto é contigo.",
          ],
        },
        {
          title: "Planos e faturação",
          paragraphs: [
            "Planos e limites estão descritos em Preços. O plano gratuito existe para experimentares o Refract num repositório real.",
            "Os planos pagos mostram o que isto vai custar. O pagamento com cartão ainda não está ativo. Não serás cobrado no registo. Quando a faturação começar, o site diz-no antes de pagares.",
          ],
        },
        {
          title: "O teu código",
          paragraphs: [
            "O código continua a ser teu. Ligar um repositório não nos transfere a propriedade.",
            "Não vendemos o conteúdo dos teus repositórios. Não os usamos como produto.",
            "O nome Refract, o site e o produto pertencem à Devrefract, uma empresa da Lintel.",
          ],
        },
        {
          title: "Disponibilidade",
          paragraphs: [
            "Trabalhamos para manter o Refract a funcionar. Não prometemos que esteja sempre no ar, nem que cada revisão seja completa ou correta.",
            "Trata um resultado como algo que ainda tens de julgar. O Refract é uma ferramenta, não uma garantia.",
          ],
        },
        {
          title: "Se algo correr mal",
          paragraphs: [
            "O Refract é oferecido como está. Na medida em que a lei o permite, não somos responsáveis por lucros perdidos, código perdido, atraso, ou outros danos indiretos por usar — ou não usar — o produto.",
          ],
        },
        {
          title: "Parar",
          paragraphs: [
            "Podes deixar de usar o Refract a qualquer momento. Desinstala a GitHub App para cortar o acesso aos teus repositórios.",
            "Podemos suspender ou terminar o acesso se quebrares estes termos ou se abusares do serviço. Para perguntas de conta, usa Contacto.",
          ],
        },
      ],
      contactHtml: `Perguntas jurídicas passam por <a href="/contact">Contacto</a>.`,
      changes:
        "Quando estes termos mudarem, atualizamos esta página e a data. Se continuares a usar o Refract depois de uma alteração, aceitas os termos atualizados.",
    },
    notFound: {
      title: "Página não encontrada — Refract",
      description: "Esta página não está aqui.",
      headline: "Esta página não existe.",
      body: "A ligação está errada ou a página mudou.",
      cta: "Voltar ao início",
    },
  },
};
