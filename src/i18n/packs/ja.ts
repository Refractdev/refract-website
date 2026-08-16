import {
  BRAND_NAME,
  COMPANY_NAME,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const ja: ContentPack = {
  ui: {
    backToHome: "ホームに戻る",
    billingPeriod: "請求サイクル",
    monthly: "月払い",
    yearly: "年払い",
    twoMonthsFree: "2ヶ月分無料",
    individuals: "個人",
    forTeams: "チーム向け",
    allDocs: "すべてのドキュメント",
    documentation: "ドキュメント",
    privacyFooterBefore: "製品の運営に必要なものだけを使います。詳しくは",
    privacyFooterLink: "プライバシー",
    language: "言語",
    skipToContent: "本文へスキップ",
    homeCrumb: "ホーム",
    shortVersion: "要約",
    contactHeading: "お問い合わせ",
    changesHeading: "変更",
    legalLabel: "法務",
    bestFor: "向いている方:",
    homeAria: "Refract ホーム",
    openMenu: "メニューを開く",
    githubHeading: "GitHub",
    connectHeading: "接続",
  },
  seo: {
    defaultTitle: "Refract — AIが書いた。出荷できる状態にしよう。",
    defaultDescription:
      "Refract は、AI が生成したコードを、実際に保守できる、よりきれいで一貫したソフトウェアに変えます。",
    ogTitle: "AIが書いた。出荷できる状態にしよう。",
    ogDescription:
      "生成の次のステップ。Refract は AI 生成コードを整え、引き締め、出荷を続けられるようにします。",
    ogImageAlt: "Refract — AI がコードを書いた、その次のステップ。",
    jsonLdDescription:
      "Refract は、AI が生成したコードを、実際に保守できる、よりきれいで一貫したソフトウェアに変えます。",
  },
  nav: {
    marketingLinks: [
      { label: "プロダクト", href: "/product" },
      { label: "料金", href: "/pricing" },
      { label: "ドキュメント", href: "/docs" },
    ],
    footerSections: [
      {
        title: "プロダクト",
        links: [
          { label: "プロダクト", href: "/product" },
          { label: "料金", href: "/pricing" },
          { label: "セキュリティ", href: "/security" },
        ],
      },
      {
        title: "ドキュメント",
        links: [
          { label: "はじめに", href: "/docs/getting-started" },
          { label: "承認", href: "/docs/approve" },
          { label: "FAQ", href: "/docs/faq" },
          { label: "すべてのドキュメント", href: "/docs" },
        ],
      },
      {
        title: "会社",
        links: [
          { label: "私たちについて", href: "/about" },
          { label: "お問い合わせ", href: "/contact" },
        ],
      },
      {
        title: "法務",
        links: [
          { label: "プライバシー", href: "/privacy" },
          { label: "利用規約", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — AI がコードを書いた、その次のステップ。",
    footerFinePrint: "GitHub 上の React と TypeScript 向け。",
    githubAppLabel: "GitHub を接続",
    discordLabel: "Discord",
    signIn: "ログイン",
    getStarted: "始める",
  },
  brand: {
    attribution: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} が開発しています。`,
    copyrightLine: `${BRAND_NAME}、${COMPANY_NAME} の企業。`,
    operatorSentence: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
    about: {
      title: `私たちについて — ${PRODUCT_NAME}`,
      description: `${PRODUCT_NAME} は、AI がコードを書いた次のステップです。${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
      label: "会社",
      headline: PRODUCT_NAME,
      intro: `${PRODUCT_NAME} は GitHub のプルリクエスト上で AI 生成コードを確認し、安全なときはクリーンアップを用意し、あなたの承認を待ちます。`,
      sections: [
        {
          title: "誰が作っているか",
          body: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
        },
      ],
    },
  },
  home: {
    seo: {
      title: "Refract — AIが書いた。出荷できる状態にしよう。",
      description:
        "Refract は、AI が生成したコードを、よりきれいで整理されたソフトウェアに変えます。混乱がプロジェクトになる前に。",
      ogTitle: "AIが書いた。出荷できる状態にしよう。",
      ogDescription:
        "生成の次のステップ。Refract は AI 生成コードを整え、引き締め、出荷を続けられるようにします。",
    },
    hero: {
      pill: { label: "GitHub Check で承認", href: "/docs/approve" },
      headline: "AIが書いた。出荷できる状態にしよう。",
      subhead:
        "Refract は、AI ツールが生み出したコードを、よりきれいで一貫性があり、保ちやすいものに変えます。プロジェクトが大きくなっても、崩れないように。",
      primary: { label: "始める", href: SIGNUP_PATH },
      secondary: { label: "仕組みを見る", href: "/product" },
      trust: "変更はすべてあなたが承認します。Refract が勝手にプロジェクトを書き換えることはありません。",
      caption: "コードベースになる前に",
      stack: "React · TypeScript · GitHub",
    },
    problem: {
      headline: "動くコードでも、散らかっていることがあります。",
      bullets: [
        "同じ振る舞いが、共有されずコピーされる",
        "そこに置くべきでない仕事をしているインターフェースのコード",
        "その場でしか意味を持たなかった、残った State と Effects",
        "1ファイルには合っても、プロダクトには合わない構造",
      ],
      close: "必要なのは、さらに生成されたコードではありません。生成されたコードが、良い状態のままであることです。",
    },
    turn: {
      headline: "Refract は、AI がコードを書いたあとに起きることです。",
      lede: "不満のリストをもう一つ増やすのではありません。よりきれいなプロジェクトです。",
      more: { label: "仕組みを見る", href: "/product" },
    },
    result: {
      headline: "残るのは、保ち続けられるコードです。",
      points: [
        {
          title: "よりきれい",
          body: "目に見える散らかりは<strong>画面から引き出され</strong>、あるべき場所に置かれます。",
        },
        {
          title: "より一貫している",
          body: "<strong>繰り返されるロジックが増え続けません。</strong>プロジェクトは、12個の初稿ではなく、ひとつのプロダクトに見え始めます。",
        },
        {
          title: "変えやすい",
          body: "誰も意図して作らなかった迷路を踏まずに、<strong>次のものを足せます</strong>。",
        },
        {
          title: "それでもあなたのもの",
          body: "<strong>あなたがはいと言うまで、何も変わりません。</strong>何が起きるかを見られます。マージボタンはあなたが持ち続けます。",
        },
      ],
    },
    does: {
      headline: "問題を指さすだけではありません。コードを良くします。",
      more: { label: "プロダクトを見る", href: "/product" },
      points: [
        {
          number: "1",
          title: "まずプロジェクトを学ぶ",
          body: "Refract は、最後に変わったファイルだけでなく、ソフトウェアが実際にどう組まれているかを見ます。だからクリーンアップは、すでにあるプロジェクトに合います。",
        },
        {
          number: "2",
          title: "AI が残しがちな散らかりを見つける",
          body: "コピーされたロジック。画面の中でのデータ取得。誰も使っていない State。残る Effects。アプリが大きくなった瞬間に痛む構造。",
        },
        {
          number: "3",
          title: "何からきれいにするかを伝える",
          body: "問題が一つでないとき、意味のある順番が届きます。ノイズの壁ではありません。",
        },
        {
          number: "4",
          title: "クリーンアップを代わりにできる",
          body: "変更が安全で範囲が限られているとき、Refract が用意します。あなたが承認します。変更を適用し、プロジェクトがまだまとまっているかを確認します。安全にできないときは、推測する代わりに、そう言います。",
        },
      ],
    },
    world: {
      headline: "コードがプロジェクトになろうとする場所に現れます。",
      lede: "大切なリポジトリを接続してください。新しいコードが提案されると、Refract はその場でレビューします。",
      caption: "結果は一つ。決めるのはあなたです。",
      decide: "はっきりした結果が一つ届きます。",
      close:
        "GitHub 上で承認してください。今ある流れのまま。Refract は、第二の受信箱で暮らすよう求めません。",
    },
    trust: {
      headline: "変更はすべてあなたが承認します。",
      points: [
        {
          title: "あなたが承認します。",
          body: "あなたがするまで、Refract が変更を適用することはありません。",
        },
        {
          title: "間違えるくらいなら、黙っています。",
          body: "問題を証明できないなら、忙しそうに見せるために作りません。",
        },
        {
          title: "安全にきれいにできないなら、できたふりをしません。",
          body: "届くのは説明です。無謀な書き換えではありません。",
        },
        {
          title: "自分の仕事を確認します。",
          body: "クリーンアップが着地したあと、Refract はもう一度見ます。失敗したクリーンアップを成功とは言いません。",
        },
        {
          title: "アプリを書き換えるチャットボットではありません。",
          body: "適用するクリーンアップは具体的で、範囲が限られています。創造的な推測は「修正」ではありません。",
        },
      ],
    },
    steps: {
      headline: "3つのステップ。あとは働きながら動きます。",
      note: "アプリのインストールは、ログインとは違います。Refract のアカウントと GitHub のアクセスは、意図して分けています。",
      cta: { label: "始める", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "アカウントを作る",
          body: "メールとパスワード。それが Refract のログインです。GitHub でのサインインではありません。",
        },
        {
          number: "2",
          title: "GitHub を接続し、リポジトリを選ぶ",
          body: "きれいにしたいプロジェクトに Refract アプリをインストールします。どれにするかはあなたが選びます。",
        },
        {
          number: "3",
          title: "出荷を続ける",
          body: "今までどおりプルリクエストを開きます。Refract はプロジェクトの文脈で変更を読みます。クリーンアップの準備ができたら、承認します。準備ができたらマージします。",
        },
      ],
    },
    audience: {
      headline: "AI で作り、その結果と一緒に暮らす人のためのものです。",
      points: [
        {
          title: "個人",
          body: "Copilot、Cursor、あるいは次のモデルでプロダクトを出荷しています。コードは速く届きます。保守できるものであってほしい。",
        },
        {
          title: "チーム",
          body: "何人かが同時に生成しています。リポジトリが共有の記憶です。Refract は、その記憶がまとまったままであるためのものです。",
        },
        {
          title: "今のために作った",
          body: "GitHub 上の React と TypeScript。今、この問題が一番大きい場所です。他のスタックは、本物になったときに来ます。ホームページの約束としては出しません。",
        },
      ],
    },
    ships: {
      headline: "新着",
      more: { label: "ドキュメントを見る", href: "/docs" },
      items: [
        { date: "2026年8月", title: "GitHub Check で承認", href: "/docs/approve" },
        { date: "2026年8月", title: "Discord に参加", href: "https://discord.gg/SH787P4rP4" },
        { date: "2026年8月", title: "ログイン後に GitHub を接続", href: "/docs/connect-github" },
      ],
    },
    social: {
      headline: "コミュニティに参加",
      line: "質問する、プルリクエストを共有する、Refract を使う人と話す。",
      discord: {
        kicker: "Discord",
        title: "他のビルダーと話す",
        body: "初期チーム、プロダクトの質問、プルリクエストで壊れたものの部屋です。",
        cta: "Discord に参加",
      },
      github: {
        kicker: "GitHub",
        title: "Refract で接続",
        body: "先にサインインしてください。App はオンボーディング中にインストールされ、アカウントに紐づきます。",
        cta: "始める",
      },
    },
    honesty: {
      headline: "Refract ではないもの。",
      paragraphs: [
        "IDE ではありません。AI コーディングツールの代わりでもありません。汎用のリンターでもありません。すべての行に20個のコメントを残すボットでもありません。",
        "プロダクト全体を一晩で組み直しません。すべてのセキュリティ問題を自動修正しません。代わりにマージしません。",
        "React と TypeScript のプロジェクトのうち、AI が生成した部分を、よりきれいで、より明確で、保ちやすくします。主導権はあなたにあります。",
      ],
    },
    cta: {
      headline: "AIが書いた。出荷できる状態にしよう。",
      body: "アカウントを作り、GitHub を接続し、初稿の残りを Refract に任せましょう。",
      primary: { label: "始める", href: SIGNUP_PATH },
      secondary: { label: "料金を見る", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "Refract の仕組み — GitHub 上の AI コードクリーンアップ",
      description:
        "Refract は GitHub のプルリクエスト上で AI 生成コードをレビューし、安全なときにクリーンアップを用意し、あなたの承認を待ちます。",
      ogTitle: "Refract の仕組み",
      ogDescription:
        "GitHub を接続。出荷を続ける。Refract は安全なときに AI 生成コードをきれいにし、触る前に確認します。",
    },
    hero: {
      headline: "生成されたコードから、保ち続けられるコードへ。",
      subhead:
        "Refract はプロジェクトを読み、散らかるものを見つけ、あなたが承認するクリーンアップを用意します。判断のために GitHub を離れる必要はありません。",
      cta: { label: "始める", href: SIGNUP_PATH },
    },
    loop: {
      headline: "シンプルなループ",
      beats: [
        {
          number: "1",
          title: "プロジェクトを見る",
          body: "Refract はソフトウェア全体を見ます。だから一つの画面の変更が、残りを尊重できます。",
        },
        {
          number: "2",
          title: "あとで痛むものを見つける",
          body: "コードが速く生成されたときに出るパターンを探します。コピーされたロジック、絡まった画面、残った State、古びやすい構造。認証情報のような機微なものがコードに残っていれば、伝えます。秘密情報を静かに「直す」ことはしません。",
        },
        {
          number: "3",
          title: "できるものをきれいにする",
          body: "クリーンアップが安全なら、承認できる具体的な変更が届きます。そうでなければ、推測の代わりに、はっきりした説明が届きます。",
        },
        {
          number: "4",
          title: "確認し、覚える",
          body: "承認したあと、Refract は変更を適用してもう一度見ます。時間が経つと、プロジェクトがきれいになっているか、まだ散らかりを出荷しているかが分かります。",
        },
      ],
    },
    places: {
      headline: "判断は GitHub で。残りはウェブサイトで。",
      close: "ウェブサイトは、クリーンアップを受け入れる第二の場所ではありません。判断はコードの隣に残ります。",
      github: {
        title: "GitHub 上",
        items: [
          "プルリクエストで結果を見る",
          "クリーンアップを承認する",
          "当てはまらないときは却下する",
          "準備ができたらマージする",
        ],
      },
      web: {
        title: "ウェブサイト上",
        items: [
          "アカウントを作る",
          "GitHub App を接続する",
          "リポジトリを選ぶ",
          "何が接続されているかを、時間をかけて見る",
        ],
      },
    },
    results: {
      headline: "届くのは、いくつかの正直な結果のうち一つです",
      items: [
        { title: "作業中", body: "待ってください。これは合格ではありません。" },
        { title: "問題なし", body: "この変更について、Refract から必要なことはありません。" },
        { title: "クリーンアップ準備完了", body: "安全なクリーンアップが用意されています。GitHub で承認してください。" },
        {
          title: "確認してほしい",
          body: "大切なことがあり、Refract は代わりに変えません。説明を読んでください。",
        },
        {
          title: "うまくいかなかった",
          body: "分析に失敗しました。Refract はそう言います。偽の成功は塗りません。",
        },
      ],
    },
    cleans: {
      headline: "実務で「きれい」が意味すること",
      body: "React と TypeScript のプロジェクトでは、Refract は速い生成の残り物に特に強いです。",
      bullets: [
        "インターフェースに混ざったデータ取得",
        "同じロジックが二度書かれている",
        "実際には使われていない State",
        "後始末をしない Effects",
        "端でのタイムアウト不足とエラー処理の不足",
        "ほかの場所に置くべき仕事をしている画面",
      ],
      close:
        "その一部は、代わりにきれいにできます。一部は、意図して指摘するだけです。悪い自動書き換えは、正直なメモより悪い。",
    },
    start: {
      headline: "始めるまで約10分",
      steps: [
        "アカウントを作る",
        "GitHub App をインストールし、リポジトリを選ぶ",
        "プルリクエストを開く",
      ],
      note: "GitHub の接続は Refract へのログインではありません。Refract へのログインは GitHub アクセスのインストールでもありません。二つのステップ、二つの役割。",
      cta: { label: "アカウントを作る", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "自分の AI ツールとぶつかりますか？",
        a: "いいえ。生成は続けてください。Refract は、結果を保守できる状態に保つためのパスです。",
      },
      {
        q: "自分なしでコードを変えますか？",
        a: "いいえ。あなたが承認します。あなたがマージします。",
      },
      {
        q: "新しい作業場所を覚える必要がありますか？",
        a: "いいえ。日常は GitHub のままです。",
      },
    ],
  },
  pricing: {
    seo: {
      title: "料金 — Refract | Free、$12 Starter、$24 Pro",
      description:
        "Free $0。Starter $12。Pro $24/月。Ultimate $49。チームプランは $149 から。無料で始める — 登録時に課金されません。",
      ogTitle: "Refract の料金 — Free から Pro $24/月",
      ogDescription:
        "Free $0。Starter $12。Pro $24/月。チームは $149 から。チェックアウトは準備中。登録時に課金されません。",
    },
    hero: {
      headline: "払うのは、よりきれいなソフトウェアに対して — ノイズを増やすためではない。",
      subhead: "本物のリポジトリで始めてください。プロジェクト — あるいはチーム — が余白を必要としたら、アップグレード。",
      priceLine: "Free $0。Starter $12。Pro $24/月。Ultimate $49。チームは $149 から。",
      banner:
        "今日から無料で始められます。有料プランは、これからどこへ向かうかを示すために載せています。チェックアウトは準備中。登録時に課金されません。",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "本物のプロジェクトで Refract を試す。",
        features: [
          "リポジトリ 2 件",
          "レビュー 50 件 / 月",
          "承認できるクリーンアップ 5 件 / 月",
          "GitHub 上の参考結果",
        ],
        cta: "始める",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "自分のコードで確かめる",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "少数のプロジェクトで毎日 AI を使う、一人の開発者向け。",
        features: [
          "リポジトリ 5 件",
          "レビュー 150 件 / 月",
          "そのレビュー上限内でクリーンアップ無制限",
          "最大 2 リポジトリで必須チェック",
        ],
        cta: "始める",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "一人、いくつかの活発なリポジトリ",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "AI で本物のプロダクトを出荷する人向け。",
        features: [
          "リポジトリ 15 件",
          "レビュー 400 件 / 月",
          "そのレビュー上限内でクリーンアップ無制限",
          "接続したすべてのリポジトリで必須チェック",
          "何がきれいになったかの全履歴",
        ],
        cta: "始める",
        href: SIGNUP_PATH,
        badge: "一番人気",
        bestFor: "標準のプラン",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "多くのリポジトリやクライアント案件を持つ運用者向け。",
        features: [
          "リポジトリ 40 件",
          "レビュー 1,000 件 / 月",
          "そのレビュー上限内でクリーンアップ無制限",
          "優先レビュー",
          "すべての保護オプション",
        ],
        cta: "始める",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "多くのプロジェクト、一人の運用者",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "小さな会社、GitHub 組織ひとつ、日常で AI を使う。",
        features: [
          "10 人",
          "リポジトリ 30 件",
          "GitHub 組織 1 件",
          "レビュー 1,000 件 / 月",
        ],
        cta: "相談する",
        href: "/contact",
        badge: null,
        bestFor: "小さな会社",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "より多くのサービス、より大きな量、本格的な取引関係。",
        features: [
          "30 人",
          "リポジトリ 100 件",
          "GitHub 組織 2 件",
          "レビュー 4,000 件 / 月",
          "優先レビュー",
          "オンボーディング通話",
        ],
        cta: "相談する",
        href: "/contact",
        badge: null,
        bestFor: "より大きな量",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "複数プロジェクト、高い量、アカウントを知る担当者がつく。",
        features: [
          "75 人",
          "リポジトリ 250 件",
          "GitHub 組織 5 件",
          "レビュー 12,000 件 / 月",
        ],
        cta: "相談する",
        href: "/contact",
        badge: null,
        bestFor: "高い量",
      },
      {
        name: "Enterprise",
        monthlyPrice: "$2,500 から",
        yearlyPrice: "$2,500 から",
        period: "/ 月",
        yearlyPeriod: "/ 月",
        description: "契約、独自の上限、またはセキュリティレビューが必要なとき。",
        features: [],
        cta: "相談する",
        href: "/contact",
        badge: null,
        bestFor: "契約と独自の上限",
        custom: true,
      },
    ],
    footnote:
      "年払いは2ヶ月分無料です。「レビュー」とは、プルリクエスト上の新しいコードが分析されるたびに1回です。無制限のクリーンアップも、その月のレビュー上限の内側にあります。",
    value: {
      headline: "払っているのは、コメントではありません。",
      paragraphs: [
        "払い続けているのは、生成を続けながらも保守できるプロジェクトです。",
        "Free は、本物のリポジトリで本物のクリーンアップを感じるためのものです。Pro は、それが日常になるためのものです。チームプランは、同時に生成する人たちが、リポジトリを12通りの初稿にしないためのものです。",
        "変更が健全だったからといって、追加では課金しません。沈黙もプロダクトの一部です。",
      ],
    },
    faqs: [
      {
        q: "今日支払えますか？",
        a: "アカウントを作って始めてください。カード決済は順次公開中です。登録時に突然課金されることはありません。",
      },
      {
        q: "GitHub は含まれますか？",
        a: "いいえ。GitHub は別です。Refract は私たちのものです。",
      },
      {
        q: "上限に達したらどうなりますか？",
        a: "はっきりしたアップグレードの案内が出ます。黙って止まり、すべて問題ないふりはしません。",
      },
      {
        q: "Pro は人数課金ですか？",
        a: "いいえ。個人プランはリポジトリ数と月間レビュー数で決まります。何人が入力したかではありません。",
      },
      {
        q: "会社のリポジトリで使えますか？",
        a: "そこに GitHub Apps をインストールできるなら、はい。共有の請求と席には Team を使うか、ご相談ください。",
      },
      {
        q: "Free では承認 / クリーンアップはロックされていますか？",
        a: "Free には毎月少数のクリーンアップが含まれます。コードを決して変えないデモではなく、本物のプロダクトを感じられるように。",
      },
    ],
  },
  docs: {
    seo: {
      title: "ドキュメント — Refract",
      description:
        "Refract のアカウントを作り、GitHub を接続し、すでに開いているプルリクエスト上で AI 生成コードのクリーンアップを始めましょう。",
    },
    headline: "ドキュメント",
    intro: "Refract を使うために必要なすべて。",
    groups: [
      {
        title: "まずここから",
        numbered: true,
        links: [
          { label: "はじめに", href: "/docs/getting-started" },
          { label: "アカウントを作る", href: "/docs/account" },
          { label: "GitHub を接続する", href: "/docs/connect-github" },
          { label: "最初のクリーンアップ", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "Refract を使う",
        links: [
          { label: "プルリクエスト上で見えるもの", href: "/docs/on-github" },
          { label: "承認または却下", href: "/docs/approve" },
          { label: "ウェブサイト", href: "/docs/web" },
          { label: "リポジトリ", href: "/docs/repositories" },
        ],
      },
      {
        title: "リファレンス",
        links: [
          { label: "よくある質問", href: "/docs/faq" },
          { label: "セキュリティ", href: "/security" },
          { label: "上限", href: "/docs/limits" },
          { label: "トラブルシューティング", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "はじめに",
        description: "アカウントを作り、GitHub を接続し、プルリクエストを開きます。およそ10分。",
        blocks: [
          { type: "lede", text: "およそ10分。" },
          {
            type: "p",
            text: "GitHub アカウント、接続できる React / TypeScript のリポジトリ、メールアドレスが必要です。",
          },
          { type: "h2", text: "1. アカウントを作る" },
          {
            type: "p",
            text: "「始める」へ進みます。名前、メール、パスワード。求められたらメールを確認し、ログインします。",
          },
          { type: "p", text: "これは「GitHub でサインイン」ではありません。" },
          { type: "h2", text: "2. GitHub を接続する" },
          {
            type: "p",
            text: "「GitHub を接続」に着きます。GitHub App をインストールし、アカウントとリポジトリを選び、戻って、Refract が見守るプロジェクトを選びます。",
          },
          {
            type: "p",
            text: "これが終わるまで、主な画面は閉じたままです。意図どおりです。",
          },
          { type: "h2", text: "3. プルリクエストを開く" },
          {
            type: "p",
            text: "接続したリポジトリでプルリクエストを開きます。Refract を待ちます。クリーンアップの準備ができたら、GitHub で承認します。",
          },
          { type: "h2", text: "4. 長い視点が欲しいときはウェブサイトを使う" },
          {
            type: "p",
            text: "概要には、何が接続されているかが表示されます。日常はプルリクエストのままです。",
          },
          {
            type: "html",
            html: '次へ: <a href="/docs/connect-github">GitHub を接続する</a> · <a href="/docs/first-cleanup">最初のクリーンアップ</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "Refract アカウント",
        description: "名前、メール、パスワードで登録します。GitHub は別のステップです。",
        blocks: [
          { type: "p", text: "名前、メール、パスワードで登録します。" },
          { type: "html", html: '<a href="/login">ログイン</a>からサインインします。' },
          {
            type: "p",
            text: "パスワードを忘れた場合: そのアドレスにアカウントがあれば、リセット用のリンクをメールします。",
          },
          { type: "p", text: "アプリからログアウトします。" },
          {
            type: "p",
            text: "このアカウントは GitHub の権限ではありません。リポジトリの接続は別のステップです。",
          },
          {
            type: "p",
            text: "設定 → アカウント で、プロダクト内に表示する名前を編集できます。",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "GitHub を接続する",
        description:
          "GitHub App をインストールすると、Refract はプルリクエストを読み、結果を一つ投稿し、承認後にクリーンアップを適用できます。",
        blocks: [
          {
            type: "p",
            text: "Refract がプルリクエストを読み、結果を一つ投稿し — 承認したあとだけ — クリーンアップを適用するには、GitHub App が必要です。",
          },
          {
            type: "html",
            html: `<ol>
          <li>Refract にログインする</li>
          <li>「GitHub を接続」を開く</li>
          <li>そこから GitHub App をインストールする — このサイトからではなく — アカウントに紐づくようにする</li>
          <li>特定のリポジトリを選ぶ（推奨）</li>
          <li>Refract に戻り、見守るものを確認する</li>
        </ol>`,
          },
          { type: "h2", text: "インストール済みと必須" },
          {
            type: "p",
            text: "接続済みとは、Refract が新しいコードをレビューする、という意味です。それ自体がマージを止めません。GitHub に Refract を待たせたいなら、それは GitHub で設定する必須チェックです — 設定から案内できます。インストール中にこちらからオンにすることはありません。",
          },
          { type: "h2", text: "アンインストール" },
          {
            type: "p",
            text: "GitHub → 設定 → Applications で App を削除します。Refract はそれらのリポジトリの監視を止めます。",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "最初のクリーンアップ",
        description: "プルリクエストを開き、Refract を待ち、GitHub でクリーンアップを承認します。",
        blocks: [
          {
            type: "p",
            text: "始める前に: アカウント作成済み、GitHub 接続済み、React / TypeScript のリポジトリを少なくとも一つ選択済み。",
          },
          {
            type: "ol",
            items: [
              "プルリクエストを開く",
              "Checks で Refract を見つける",
              "終わるまで待つ — 保留は成功ではありません",
              "短い結果を読む",
            ],
          },
          { type: "h2", text: "クリーンアップの準備ができているとき" },
          {
            type: "p",
            text: "チェック上で承認します。Refract は変更をブランチに適用します。もう一度見ます。マージするのは、これまでどおりあなたです。",
          },
          { type: "h2", text: "確認を求められたとき" },
          {
            type: "p",
            text: "自動では変えないものを見つけました。説明を読んでください。自分で直すか、残すか — それはあなたの判断です。",
          },
          { type: "h2", text: "うまくいかなかったとき" },
          {
            type: "p",
            text: "そう伝えます。小さなコミットをプッシュして、もう一度試してください。偽の緑の結果は出しません。",
          },
        ],
      },
      {
        slug: "on-github",
        title: "GitHub 上",
        description: "チェックは一つ。要約コメントは一つ、その場で更新されます — ボットのノイズの山ではありません。",
        blocks: [
          {
            type: "p",
            text: "チェックは一つ。要約コメントは一つ、その場で更新されます — ボットのノイズの山ではありません。",
          },
          {
            type: "p",
            text: "チェックは、まだ作業中、問題なし、クリーンアップ準備完了、確認してほしい、またはエラー、のいずれかです。",
          },
          {
            type: "p",
            text: "クリーンアップの準備ができると、チェック上に承認（と却下）が現れます。",
          },
          { type: "h2", text: "必須チェック" },
          {
            type: "p",
            text: "任意です。マージを待たせたいなら、GitHub のブランチルールで設定します。アプリの接続だけでは、これは行われません。",
          },
        ],
      },
      {
        slug: "approve",
        title: "承認または却下",
        description: "承認は GitHub 上でクリーンアップを適用します。却下は、適用しないと決めることです。",
        blocks: [
          {
            type: "p",
            text: "これは GitHub 上、Refract のチェックで起きます — ウェブサイトの主ボタンではありません。",
          },
          { type: "h2", text: "承認" },
          {
            type: "p",
            text: "用意されたクリーンアップをブランチに適用します。チェックが再実行されます。準備ができたらマージします。これは自動マージではありません。",
          },
          { type: "h2", text: "却下" },
          {
            type: "p",
            text: "メモを理解したうえで、適用しないと決めたときに使います。プロジェクト全体の「永遠に無視」ではありません。",
          },
          { type: "h2", text: "承認がないとき" },
          {
            type: "p",
            text: "安全な自動クリーンアップがありません。説明を読むか、チェックが失敗していれば待ってください。",
          },
        ],
      },
      {
        slug: "web",
        title: "ウェブサイト",
        description: "設定後、ウェブサイトは何が接続されているかを示します。承認はこれまでどおり GitHub 上です。",
        blocks: [
          { type: "p", text: "設定後、次のものが見えます。" },
          {
            type: "html",
            html: "<p><strong>概要</strong> — 何が接続されているか。あとから、プロジェクトがきれいになっているかの簡単な絵。初期のアカウントは履歴が少ないことがよくあります。それは正直さであり、壊れではありません。</p>",
          },
          {
            type: "html",
            html: "<p><strong>リポジトリ</strong> — 選んだプロジェクト。</p>",
          },
          {
            type: "html",
            html: "<p><strong>プルリクエスト</strong> — 最近の結果。記憶用です。ライブの承認はこれまでどおり GitHub 上です。</p>",
          },
          {
            type: "html",
            html: "<p><strong>インサイト</strong> — 十分な履歴ができてからの、時間をかけたパターン。健康そうに見せる点数は作りません。</p>",
          },
          {
            type: "html",
            html: "<p><strong>設定</strong> — アカウント、どのリポジトリか、それぞれをどれだけ厳しく扱うか。チェックアウトが始まったら、請求はここに置かれます。</p>",
          },
          { type: "p", text: "ウェブサイトは、第二の承認用受信箱ではありません。" },
        ],
      },
      {
        slug: "repositories",
        title: "リポジトリ",
        description: "App のインストールは権限を与えます。リポジトリの選択は、Refract が見守るものを決めます。",
        blocks: [
          { type: "p", text: "活発なプロダクト用リポジトリ一つから始めてください。追加はあとから設定で。" },
          {
            type: "p",
            text: "GitHub 上で App をインストールすると権限が付きます。Refract でリポジトリを選ぶと、プロダクトが見守るものが決まります。両方必要です。",
          },
          { type: "h2", text: "言語" },
          {
            type: "p",
            text: "React / TypeScript が最も得意です。他のスタックは、ほとんど、あるいはまったくカバーされないことがあります。自信を装うより、そう言います。",
          },
        ],
      },
      {
        slug: "limits",
        title: "上限",
        description: "Refract が得意なこと — そして、できるふりをしないこと。",
        blocks: [
          {
            type: "p",
            text: "Refract は、AI が生成した React と TypeScript に出る具体的な散らかりと、安全なときにクリーンアップを適用することに強いです。",
          },
          {
            type: "p",
            text: "すべてのバグが見つかる保証ではありません。人間のレビューの全部ではありません。アーキテクチャの作り直しでもありません。",
          },
          {
            type: "p",
            text: "問題を証明できないときは、黙っています。安全にきれいにできないときは、承認を出しません。",
          },
          {
            type: "html",
            html: 'とても大きな変更は、時間がかかることがあります。プランの上限は <a href="/pricing">料金</a> のページにあります。',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "トラブルシューティング",
        description: "よくあるセットアップと GitHub チェックの問題、行き詰まりのほどき方。",
        blocks: [
          { type: "h2", text: "「GitHub を接続」に何度も送られる" },
          {
            type: "p",
            text: "App がインストールされ、Refract でリポジトリが少なくとも一つ選ばれるまで、セットアップは終わりません。",
          },
          { type: "h2", text: "GitHub アカウントが違う" },
          {
            type: "p",
            text: "リポジトリを所有するアカウントでログインしたブラウザからインストールしてください。",
          },
          { type: "h2", text: "チェックが現れない" },
          {
            type: "p",
            text: "リポジトリが GitHub 側でインストール済みであり、かつ Refract で選択されていることを確認してください。一分待って、Checks を更新します。",
          },
          { type: "h2", text: "承認しても何も起きなかった" },
          {
            type: "p",
            text: "コメントだけでなく、チェック上の操作を使ってください。App にまだ書き込み権限があることを確認してください。GitHub のブランチルールが適用を止めることがあります — GitHub のエラーを読んでください。",
          },
          { type: "h2", text: "リセットメールが届かない" },
          { type: "p", text: "迷惑メールを確認。アドレスを確認。もう一度試す。" },
          { type: "h2", text: "まだ行き詰っている" },
          {
            type: "html",
            html: '期待したこと、起きたこと、プルリクエストのリンク、時刻（タイムゾーン付き）を添えて <a href="/contact">お問い合わせ</a>。',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "よくある質問 — Refract",
      description:
        "Refract とは何か、GitHub 上での動き、信頼、アカウント、料金についての答え。",
    },
    title: "よくある質問",
    groups: [
      {
        title: "プロダクト",
        items: [
          {
            q: "Refract とは何ですか？",
            a: "AI がコードを書いた、その次のステップです。生成されたソフトウェアを、よりきれいで保守しやすいコードに変えます — すでに開いている GitHub のプルリクエスト上で。",
          },
          {
            q: "AI レビュアーですか？",
            a: "いいえ。差分に長文を残すチャットボットではありません。具体的な散らかりを探し、説明し、できるときは承認用のクリーンアップを用意します。",
          },
          {
            q: "コードを良くしますか、それとも小言だけですか？",
            a: "クリーンアップが安全なら、承認後に適用できます。安全でなければ、そう伝えます。目的はより良いプロジェクトであり、より長いコメントスレッドではありません。",
          },
          {
            q: "Cursor / Copilot / ChatGPT と使えますか？",
            a: "大切な意味では、はい。それらのツールは GitHub に書き込みます。Refract はその結果を見守ります。エディタの中に住む必要はありません。",
          },
          {
            q: "どの言語に対応していますか？",
            a: "まず React と TypeScript です。他のスタックは、黙った「はい」ではありません。",
          },
          {
            q: "コードレビューの代わりになりますか？",
            a: "いいえ。保守性の一群を肩代わりし、人間がまだ人間の目を必要とする仕事をレビューできるようにします。",
          },
        ],
      },
      {
        title: "信頼",
        items: [
          {
            q: "聞かずにリポジトリを変えられますか？",
            a: "いいえ。",
          },
          {
            q: "プルリクエストをマージしますか？",
            a: "いいえ。クリーンアップを承認し、マージするのはあなたです。",
          },
          {
            q: "私たちのコードでモデルを訓練しますか？",
            a: 'いいえ。リポジトリでモデルを訓練しません。プルリクエストの内容は、その変更のレビューと、あなたが承認するクリーンアップの準備のためにだけモデル提供者へ送ります。コードは販売しません。詳しくは <a href="/security">セキュリティ</a>。',
          },
          {
            q: "間違っていたら？",
            a: "作るより、見逃す方を選びます。クリーンアップは却下できます。プロジェクトの一部になる前に、変更は必ず見えます。",
          },
        ],
      },
      {
        title: "アカウント",
        items: [
          {
            q: "GitHub でログインしますか？",
            a: "いいえ。Refract はメールとパスワードです。GitHub アクセスは、インストールする App です。",
          },
          {
            q: "なぜ二つのステップですか？",
            a: "ログインと、リポジトリアクセスの付与は、別の仕事です。分けておくと、権限がはっきりします。",
          },
          {
            q: "GitHub なしで試せますか？",
            a: "アカウントは作れます。リポジトリが接続されるまで、プロダクトは閉じたままです — そうでなければ、きれいにするものがありません。",
          },
        ],
      },
      {
        title: "お金",
        items: [
          {
            q: "料金は本番ですか？",
            a: "プランは本物です。カード決済は順次公開中です。無料で始めてください。",
          },
        ],
      },
      {
        title: "会社",
        items: [
          {
            q: "Refract は誰が作っていますか？",
            a: "Refract は、Lintel の企業である Devrefract が作っています。Lintel は親会社にあたるテクノロジー企業です。Devrefract は開発者向けテクノロジーを作ります。Refract がその現在のプロダクトです。",
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "セキュリティ — Refract",
      description:
        "Refract が GitHub にどうアクセスするか、プルリクエストで何を読むか、承認なしでは決してしないこと。",
      headline: "あなたのコード。あなたの承認。静かな操作はありません。",
      paragraphs: [
        "Refract にはメールとパスワードでログインします。",
        "GitHub アクセスは、許可したリポジトリにインストールする App だけです。",
        "レビューのためにプルリクエストを読みます。結果は一つ投稿します。クリーンアップは、承認したあとだけ適用します。",
        "代わりにマージしません。",
        "ウェブサイトを開くためだけに、GitHub でログインさせません。",
        "リポジトリを商品として販売しません。",
        "失敗したレビューを、成功したふりをしません。",
        "プルリクエストに認証情報があれば、伝えます。露出したものはローテーションしてください。",
        "GitHub App をアンインストールし、見えるリポジトリを絞れます。",
      ],
      operator: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
      reportLabel: "問題を報告する",
      reportHtml: `<a href="/contact">お問い合わせ</a>を使い、セキュリティを選んでください。優先して扱います。`,
    },
    contact: {
      title: "お問い合わせ — Refract",
      description: "Refract、初期チーム、請求、またはプルリクエストで壊れたことについての質問。",
      headline: "お問い合わせ",
      intro: "Refract、初期チーム、請求、またはプルリクエストで壊れたことについての質問。",
      fields: {
        name: "名前",
        email: "メール",
        topic: "トピック",
        message: "メッセージ",
        link: "リポジトリまたはプルリクエストのリンク（任意）",
      },
      topics: ["プロダクト", "請求", "セキュリティ", "その他"],
      submit: "メッセージを送る",
      success: "ありがとうございます — そのメールに返信します。",
      error: "うまくいきませんでした。もう一度試してください。",
      bugs: "不具合の場合は、期待したこと、起きたこと、プルリクエストのリンク、時刻を書いてください。",
    },
    privacy: {
      title: "プライバシー — Refract",
      description:
        "Refract が集めるもの、GitHub App を通じたリポジトリアクセスの扱い、プライバシーの質問の送り方。",
      headline: "プライバシー",
      updated: "最終更新：2026年8月16日",
      short: [
        "ウェブサイトのアカウント: メールとパスワード。",
        "コードへのアクセス: GitHub App 経由のみ。許可したリポジトリに限る。",
        "プルリクエストの内容は、レビュー、承認したクリーンアップの適用、プロダクト内の履歴表示のために処理します。",
        "代わりにマージしません。",
        "リポジトリの中身を販売しません。",
      ],
      collectHeadline: "集めるもの",
      collect:
        "アカウントのメールと名前。GitHub のインストールとリポジトリの選択。レビュー結果と、プロダクトに必要な履歴。",
      operator: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
      contactHtml: `プライバシーの質問は <a href="/contact">お問い合わせ</a> へ。`,
      changes: "この方針が変わったら、このページと日付を更新します。",
    },
    terms: {
      title: "利用規約 — Refract",
      description:
        "Refract の利用条件：アカウント、GitHub アクセス、承認、プラン、そしてコードに対して行うこと・行わないこと。",
      headline: "利用規約",
      updated: "最終更新：2026年8月16日",
      operator: `${PRODUCT_NAME} は、${COMPANY_NAME} の企業である ${BRAND_NAME} のプロダクトです。`,
      short: [
        "接続してよいリポジトリだけを接続してください。",
        "クリーンアップはすべてあなたが承認します。Refract は代わりにマージせず、プロジェクトを勝手に書き換えません。",
        "コードへのアクセスは GitHub App のみ、あなたが許可したリポジトリに限ります。",
        "コードの所有権はあなたに残ります。リポジトリの内容は販売しません。",
        "無料で始められます。決済は準備中です。登録時に課金されません。",
      ],
      sections: [
        {
          title: "この規約",
          paragraphs: [
            "この規約は、ウェブサイト、プロダクト、GitHub App を含む Refract の利用に適用されます。同意しない場合は、プロダクトを使わないでください。",
            "GitHub には GitHub の規約が引き続き適用されます。この規約は Refract を対象とします。",
          ],
        },
        {
          title: "プロダクト",
          paragraphs: [
            "Refract は、AI 生成コードを長く保ちにくくするパターンをプルリクエストから探します。クリーンアップが安全なときは、GitHub 上で承認する変更を用意します。安全でないときは説明します。失敗したレビューを成功したようには見せません。",
            "Refract は人のレビュー、エディタ、GitHub の代わりではありません。代わりにマージしません。",
          ],
        },
        {
          title: "アカウント",
          paragraphs: [
            "メールとパスワードでアカウントを作ります。そのアカウントの責任はあなたにあります。パスワードは自分だけが知っておいてください。",
            "組織のために Refract を使う場合、そのリポジトリを接続する権限があり、その組織のために本規約を承諾できることを確認します。",
          ],
        },
        {
          title: "GitHub とリポジトリ",
          paragraphs: [
            "GitHub へのアクセスは、インストールした App と、許可したリポジトリに限ります。サイトを開くためだけに GitHub でサインインさせることはしません。",
            "それらのリポジトリを接続する権限があることを表明します。権限がなければ接続しないでください。",
            "GitHub App のアンインストールや、見えるリポジトリの絞り込みはいつでもできます。",
          ],
        },
        {
          title: "承認",
          paragraphs: [
            "プルリクエストの内容は、レビュー、承認したクリーンアップの適用、プロダクト内の履歴表示のために処理します。",
            "クリーンアップは GitHub で承認したあとでのみ入ります。判断はコードの横に残ります。マージするものの責任はあなたにあります。",
          ],
        },
        {
          title: "利用上の禁止",
          paragraphs: [
            "権限のないコードを接続しないでください。サービスの破壊、スクレイピング、過負荷を試みないでください。マルウェアを隠したり、露出した認証情報を放置するために Refract を使わないでください。",
            "プルリクエストに認証情報があれば知らせます。ローテーションはあなたが行ってください。",
          ],
        },
        {
          title: "プランと請求",
          paragraphs: [
            "プランと上限は料金ページにあります。無料プランは、実際のリポジトリで Refract を試すためのものです。",
            "有料プランは、これからどこへ向かうかを示すために掲載しています。決済は準備中です。登録時に課金されません。請求が始まるときは、支払う前にサイトと決済画面で示します。",
          ],
        },
        {
          title: "あなたのコード",
          paragraphs: [
            "コードの所有権はあなたに残ります。リポジトリを接続しても所有権は移りません。",
            "リポジトリの内容は販売しません。それを商品として使いません。",
            "Refract という名前、サイト、プロダクトは、Lintel の企業である Devrefract に帰属します。",
          ],
        },
        {
          title: "可用性",
          paragraphs: [
            "Refract を動かし続けるよう努めます。常時稼働や、すべてのレビューが完全・正確であることまでは約束しません。",
            "結果は、あなたがまだ判断すべきものとして扱ってください。Refract はツールであり、保証ではありません。",
          ],
        },
        {
          title: "問題が起きたとき",
          paragraphs: [
            "Refract は現状のまま提供されます。法律が許す範囲で、逸失利益、失われたコード、遅延、その他の間接損害について、プロダクトの利用または不利用から生じる責任を負いません。",
          ],
        },
        {
          title: "利用の終了",
          paragraphs: [
            "Refract の利用はいつでも止められます。リポジトリへのアクセスを切るには GitHub App をアンインストールしてください。",
            "本規約に違反したりサービスを濫用した場合、アクセスを停止または終了することがあります。アカウントの質問はお問い合わせへ。",
          ],
        },
      ],
      contactHtml: `法務の質問は <a href="/contact">お問い合わせ</a> へ。`,
      changes:
        "この規約が変わるときは、このページと日付を更新します。変更後も Refract を使い続ける場合、更新後の規約に同意したものとします。",
    },
    notFound: {
      title: "ページが見つかりません — Refract",
      description: "このページはありません。",
      headline: "このページはありません。",
      body: "リンクが違うか、ページが移動しました。",
      cta: "ホームに戻る",
    },
  },
};
