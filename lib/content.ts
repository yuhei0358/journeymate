// 株式会社Journeymate サイトコンテンツ（日本語 / 英語）
// 注: EN はネイティブ監修前の仮テキスト（次フェーズで精緻化）

export type Lang = "ja" | "en";

export interface NavItem {
  id: string;
  label: string;
}

export interface SiteContent {
  nav: { items: NavItem[]; cta: string };
  hero: {
    badge: string;
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    lead: string;
    body: string[];
  };
  strengths: {
    sectionLabel: string;
    heading: string;
    items: { no: string; title: string; desc: string }[];
  };
  services: {
    sectionLabel: string;
    heading: string;
    lead: string;
    items: { title: string; desc: string }[];
  };
  testimonials: {
    sectionLabel: string;
    heading: string;
    items: { quote: string; author: string; role: string }[];
  };
  company: {
    sectionLabel: string;
    heading: string;
    mission: { label: string; value: string };
    rows: { label: string; value: string }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    lead: string;
    email: string;
    emailCta: string;
  };
  footer: { tagline: string; copyright: string };
}

const ja: SiteContent = {
  nav: {
    items: [
      { id: "about", label: "事業について" },
      { id: "strengths", label: "私たちの強み" },
      { id: "services", label: "サービス" },
      { id: "voices", label: "お客様の声" },
      { id: "company", label: "会社概要" },
    ],
    cta: "お問い合わせ",
  },
  hero: {
    badge: "Kyushu Travel App for International Visitors",
    titleLines: ["「また日本に来たい」を、", "九州から。"],
    subtitle:
      "九州を知り尽くしたツアーガイドのプロが設計した、外国人旅行者のための旅行アプリ。言葉の壁を越えて、九州ならではの体験を、もっと自由に。",
    primaryCta: "サービスを見る",
    secondaryCta: "お問い合わせ",
    note: "九州全域対応 ・ 多言語サポート",
  },
  about: {
    sectionLabel: "About",
    heading: "九州に特化した、旅のパートナー",
    lead:
      "Journeymate は、九州を旅する海外からのお客様の「何を選べばいいか分からない」を解消する旅行アプリです。",
    body: [
      "大手の汎用的な旅行サービスでは拾いきれない、九州ならではの魅力。私たちは現地のツアーガイドのプロとして培った知見を、そのままアプリの体験に落とし込みました。",
      "ITエンジニアとツアーガイド、二つの現場を知る代表が率いるからこそ、テクノロジーと「おもてなし」の両方に妥協しません。",
    ],
  },
  strengths: {
    sectionLabel: "Strengths",
    heading: "選ばれる、3つの理由",
    items: [
      {
        no: "01",
        title: "九州に特化",
        desc: "全国を浅く広くではなく、九州だけを深く。エリアを絞ったからこそ提供できる、密度の高い体験設計。",
      },
      {
        no: "02",
        title: "プロのツアーガイド",
        desc: "現役のツアーガイドが監修。ガイドブックには載らない、地元の人だから知る九州の楽しみ方をご案内します。",
      },
      {
        no: "03",
        title: "アプリで、自由に",
        desc: "多言語対応・予約機能で、スマホひとつで完結。言葉や手配の不安なく、自分のペースで旅を組み立てられます。",
      },
    ],
  },
  services: {
    sectionLabel: "Services",
    heading: "アプリでできること",
    lead: "旅の計画から現地での体験まで、Journeymate ひとつで。",
    items: [
      { title: "多言語対応", desc: "主要言語に対応。言葉の壁を感じさせない、ストレスのない案内。" },
      { title: "かんたん予約", desc: "体験・ツアーをアプリから直接予約。複雑な手配は不要です。" },
      { title: "SNS連携", desc: "旅の思い出をその場でシェア。お気に入りの九州を、世界へ。" },
      { title: "プロの体験提案", desc: "ツアーガイドが選んだ、九州ならではの体験をレコメンド。" },
    ],
  },
  testimonials: {
    sectionLabel: "Voices",
    heading: "お客様の声",
    items: [
      {
        quote: "ローカルな九州を体験できて、選んで良かった。",
        author: "Traveler",
        role: "（仮・実データ差し替え予定）",
      },
      {
        quote: "言葉の心配なく、行きたい場所をすぐ予約できました。",
        author: "Traveler",
        role: "（仮・実データ差し替え予定）",
      },
    ],
  },
  company: {
    sectionLabel: "Company",
    heading: "会社概要",
    mission: {
      label: "私たちの想い",
      value:
        "日本を、九州を、存分に楽しんでほしい。九州をはじめ、日本を代表する観光会社を目指して。",
    },
    rows: [
      { label: "会社名", value: "株式会社Journeymate" },
      { label: "代表者", value: "山田優平" },
      { label: "設立", value: "2023年11月6日" },
      { label: "資本金", value: "1万円" },
      { label: "所在地", value: "福岡県福岡市中央区2-4-19" },
      { label: "対応エリア", value: "九州全域" },
      { label: "事業内容", value: "外国人観光客向け旅行アプリの開発・運営" },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    heading: "お問い合わせ",
    lead: "サービスやお取り組みについてのご相談は、お気軽にご連絡ください。",
    email: "info@journeymate.jp",
    emailCta: "メールで問い合わせる",
  },
  footer: {
    tagline: "九州を、もっと楽しむ旅へ。",
    copyright: "© 2026 Journeymate, Inc.",
  },
};

const en: SiteContent = {
  nav: {
    items: [
      { id: "about", label: "About" },
      { id: "strengths", label: "Strengths" },
      { id: "services", label: "Services" },
      { id: "voices", label: "Voices" },
      { id: "company", label: "Company" },
    ],
    cta: "Contact",
  },
  hero: {
    badge: "Kyushu Travel App for International Visitors",
    titleLines: ["Discover Kyushu,", "your way."],
    subtitle:
      "A travel app for international visitors, designed by professional Kyushu tour guides. Cross the language barrier and explore the real Kyushu, freely.",
    primaryCta: "Explore services",
    secondaryCta: "Contact us",
    note: "All of Kyushu / Multilingual support",
  },
  about: {
    sectionLabel: "About",
    heading: "Your dedicated partner for Kyushu",
    lead:
      'Journeymate is a travel app that helps international visitors stop wondering "what should I choose?" in Kyushu.',
    body: [
      "We turn the local knowledge of professional tour guides into the app experience itself - the charm of Kyushu that generic, large-scale travel services tend to miss.",
      "Led by a founder who works as both an IT engineer and a tour guide, we never compromise on technology or hospitality.",
    ],
  },
  strengths: {
    sectionLabel: "Strengths",
    heading: "Three reasons travelers choose us",
    items: [
      {
        no: "01",
        title: "Focused on Kyushu",
        desc: "Not shallow nationwide coverage, but deep, dense experiences - possible only because we focus on Kyushu alone.",
      },
      {
        no: "02",
        title: "Professional guides",
        desc: "Curated by active tour guides. Discover ways to enjoy Kyushu that no guidebook will tell you.",
      },
      {
        no: "03",
        title: "Freedom in an app",
        desc: "Multilingual support and booking in one app. Plan your trip at your own pace, without language or logistics worries.",
      },
    ],
  },
  services: {
    sectionLabel: "Services",
    heading: "What you can do",
    lead: "From planning to on-the-ground experiences - all in Journeymate.",
    items: [
      { title: "Multilingual", desc: "Support for major languages. Guidance without the language barrier." },
      { title: "Easy booking", desc: "Book experiences and tours directly in the app. No complex arrangements." },
      { title: "Social sharing", desc: "Share your memories on the spot. Bring your favorite Kyushu to the world." },
      { title: "Curated experiences", desc: "Experiences hand-picked by professional guides, unique to Kyushu." },
    ],
  },
  testimonials: {
    sectionLabel: "Voices",
    heading: "Traveler voices",
    items: [
      {
        quote: "I got to experience a local side of Kyushu. So glad I chose this.",
        author: "Traveler",
        role: "(placeholder - to be replaced)",
      },
      {
        quote: "I could book the places I wanted to visit with no language worries.",
        author: "Traveler",
        role: "(placeholder - to be replaced)",
      },
    ],
  },
  company: {
    sectionLabel: "Company",
    heading: "Company",
    mission: {
      label: "Our mission",
      value:
        "We want you to fully enjoy Japan and Kyushu - toward becoming a tourism company that represents Japan, starting from Kyushu.",
    },
    rows: [
      { label: "Company", value: "Journeymate, Inc." },
      { label: "Representative", value: "Yuhei Yamada" },
      { label: "Founded", value: "November 6, 2023" },
      { label: "Capital", value: "JPY 10,000" },
      { label: "Location", value: "2-4-19 Chuo-ku, Fukuoka City, Fukuoka" },
      { label: "Area", value: "All of Kyushu" },
      { label: "Business", value: "Development and operation of a travel app for international visitors" },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    heading: "Contact",
    lead: "Feel free to reach out about our services or partnerships.",
    email: "info@journeymate.jp",
    emailCta: "Email us",
  },
  footer: {
    tagline: "Enjoy Kyushu, your way.",
    copyright: "© 2026 Journeymate, Inc.",
  },
};

export const content: Record<Lang, SiteContent> = { ja, en };

