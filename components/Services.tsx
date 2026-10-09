const services = [
  {
    title: "Business Intelligence",
    href: "/blog/tag/BusinessIntelligence",
    desc: "Our POS Intelligence Report service transforms your Point-of-Sale data into Executive Summaries and Management Reports that explain what changed, what drove the change, and where management should focus.",
    points: ["Executive Summaries", "Management Reports", "Sales trends and performance analysis"],
  },
  {
    title: "Anomaly Intelligence",
    // href: "/blog/turn-your-radio-broadcasts-into-digital-content-with-featherscribe-ai",
    desc: "Identify unusual patterns, unexpected events, and activity that falls outside normal behavior. Our anomaly detection solutions help businesses flag potential risks and investigate activity that might otherwise go unnoticed.",
    points: [
      "Fraud and suspicious activity detection", 
      "Rare event detection",
      "Automated anomaly reports",
    ],
  },
  {
    title: "Predictive Analytics",
    desc: "Anticipate potential outcomes and make more informed decisions. Use historical data to forecast future activity, identify risks, and help your business prepare for what may happen next.",
    points: ["Sales forecasting", "Loan default prediction", "Reservation cancellation prediction"],
  },
  {
    title: "Customer Analytics",
    desc: "Understand who your customers are, how they behave, and what influences their decisions. Use these insights to identify customer groups, anticipate customer needs, and support more targeted marketing and retention strategies.",
    points: ["Customer segmentation", "Customer churn prediction", "Customer behavior analysis"],
  },
  {
    title: "Basket Analytics",
    desc: "Discover patterns in what customers buy. Go beyond individual product sales to uncover purchasing relationships and identify opportunities for promotions, product bundling, and merchandising.",
    points: ["Products performance and trend analysis", "Identify products commonly purchased together", "Label shopping baskets"],
  },
  {
    title: "AI Solutions & Services",
    href: "/blog//did-your-store-open-on-time",
    desc: "Apply AI to business challenges across retail, hospitality and media. From monitoring store and property conditions to transforming audio content into articles, our solutions help businesses uncover opportunities to improve efficiency and automate tasks.",
    points: ["Detect when a store opens later than scheduled", "Identify when air conditioning is running while doors or windows are open", "Generate articles from radio broadcasts, podcasts, and YouTube videos"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">
            Services
          </span>
          <h2 className="font-display text-3xl font-bold mt-3 max-w-2xl mx-auto text-foreground">
            Everything you need to become a data-driven business
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From strategy to implementation, we deliver the full stack of
            analytics, BI, and AI capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 bg-card border border-border rounded-2xl hover:glow-indigo-soft transition-shadow"
            >
              <h3 className="font-display font-semibold text-lg text-foreground">
                {s.href ? (
                  <a href={s.href} className="hover:text-primary transition-colors">
                    {s.title}
                  </a>
                ) : (
                  s.title
                )}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-foreground/90 flex gap-2">
                    <span className="text-primary">-</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
