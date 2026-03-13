export const plans = [
  {
    id: "ronin",
    jp: "浪人", en: "RONIN",
    subtitle: "The wandering seeker",
    desc: "Begin your path. Explore the dojo and discover your calling without commitment.",
    monthly: 0, annual: 0,
    cta: "BEGIN YOUR PATH", ctaType: "ghost",
    color: "#8a7a74", kanji: "浪",
    features: [
      { text: "Browse 50 open positions", yes: true },
      { text: "Basic company profiles", yes: true },
      { text: "1 active application", yes: true },
      { text: "Salary benchmarks (basic)", yes: true },
      { text: "Priority listing", yes: false },
      { text: "Elite company access", yes: false },
      { text: "Insights dashboard", yes: false },
      { text: "Dedicated samurai advisor", yes: false },
    ],
  },
  {
    id: "samurai",
    jp: "侍", en: "SAMURAI",
    subtitle: "The disciplined warrior",
    desc: "Sharpen your edge. Full access to the dojo with tools to conquer any battlefield.",
    monthly: 2800, annual: 2240,
    cta: "DRAW YOUR SWORD", ctaType: "primary",
    color: "#c0273d", kanji: "侍",
    popular: true,
    features: [
      { text: "Unlimited open positions", yes: true },
      { text: "Full company profiles", yes: true },
      { text: "10 active applications", yes: true },
      { text: "Full salary benchmarks", yes: true },
      { text: "Priority listing", yes: true },
      { text: "Elite company access", yes: true },
      { text: "Insights dashboard", yes: false },
      { text: "Dedicated samurai advisor", yes: false },
    ],
  },
  {
    id: "shogun",
    jp: "将軍", en: "SHOGUN",
    subtitle: "The supreme commander",
    desc: "Command the field. Every weapon, every advantage. For those who accept nothing less.",
    monthly: 6800, annual: 5440,
    cta: "CLAIM YOUR THRONE", ctaType: "gold",
    color: "#c9a84c", kanji: "将",
    features: [
      { text: "Unlimited open positions", yes: true },
      { text: "Full company profiles", yes: true },
      { text: "Unlimited applications", yes: true },
      { text: "Full salary benchmarks", yes: true },
      { text: "Priority listing", yes: true },
      { text: "Elite company access", yes: true },
      { text: "Insights dashboard", yes: true },
      { text: "Dedicated samurai advisor", yes: true },
    ],
  },
];

export const faqs = [
  { q: "Can I switch plans mid-cycle?", jp: "途中変更", a: "Yes — upgrade or downgrade at any time. We prorate the difference to the day, so you only pay for what you use." },
  { q: "What counts as an 'Elite' company?", jp: "精鋭企業", a: "Elite companies are hand-vetted dojo partners who meet our standards for culture, compensation, and growth. They are marked with the 精鋭 badge throughout the platform." },
  { q: "Is there a free trial for Samurai or Shogun?", jp: "無料体験", a: "Every paid plan comes with a 7-day full-access trial. No card required until the trial ends." },
  { q: "How does the annual discount work?", jp: "年間割引", a: "Choosing annual billing gives you 2 months free — that is a 20% saving applied immediately at checkout." },
];

export const trust = [
  { icon: "⛩", en: "7-Day Free Trial", jp: "7日間無料" },
  { icon: "⚔", en: "Cancel Anytime", jp: "いつでも解約" },
  { icon: "侍", en: "Secure Payment", jp: "安全な支払い" },
  { icon: "円", en: "Yen Pricing", jp: "円建て価格" },
];