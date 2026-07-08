const cases = [
  {
    tag: "Fintech",
    title: "Reduced churn by 28% with predictive ML",
    desc: "Built a customer churn prediction model and retention dashboard that helped a fintech unicorn reduce churn by 28% in one quarter.",
    stat: "28%",
    statLabel: "Churn reduction",
  },
  {
    tag: "E-commerce",
    title: "Unified data drove 3x revenue growth",
    desc: "Consolidated siloed data into a single source of truth, enabling real-time merchandising decisions and personalization.",
    stat: "3x",
    statLabel: "Revenue growth",
  },
  {
    tag: "Healthcare",
    title: "Cut reporting time by 90%",
    desc: "Automated clinical and operational reporting for a healthcare provider, freeing teams to focus on patient outcomes.",
    stat: "90%",
    statLabel: "Faster reporting",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-wide text-primary uppercase">
            Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-3xl font-extrabold mt-4 text-foreground text-balance">
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cases.map((c) => (
            <div key={c.title} className="flex flex-col p-8 bg-card rounded-2xl min-h-[22rem]">
              <span className="inline-block w-fit text-sm font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">
                {c.tag}
              </span>
              <h3 className="font-display font-bold text-2xl text-foreground mt-6">
                {c.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-auto pt-8">
                <p className="font-display text-4xl font-extrabold text-primary">{c.stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{c.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
