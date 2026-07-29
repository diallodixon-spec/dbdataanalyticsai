const services = [
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with modern analytics pipelines, custom dashboards, and predictive modeling.",
    points: ["Predictive analytics", "KPI dashboards", "Data warehouse design"],
  },
  {
    title: "Business Intelligence",
    desc: "Empower decision-makers with self-service BI, automated reporting, and visibility into every business function.",
    points: ["Executive dashboards", "Automated reporting", "Self-service BI"],
  },
  {
    title: "AI & Machine Learning",
    desc: "Build and deploy AI solutions that automate decisions, optimize operations, and create personalized customer experiences.",
    points: ["ML model development", "NLP and automation", "AI strategy"],
  },
  {
    title: "Data Strategy",
    desc: "Align your data, people, and technology around a clear roadmap that turns analytics into a sustainable competitive advantage.",
    points: ["Data roadmap", "Team enablement", "Tech stack design"],
  },
  {
    title: "AI Content Intelligence",
    desc: "Turn audio and video content into written format with AI-powered repurposing for creators and media teams.",
    points: [
      "Transcript Cleaner tool", 
      "Written articles from audio and video content",
      "Create social media posts from long-form content",
    ],
  },
  {
    title: "AI Monitoring & Intelligent Alerts",
    desc: "AI-powered monitoring that detects operational anomalies and sends intelligent alerts so your teams respond faster.",
    points: ["Store opened late detection", "AC running while doors or windows are open"],
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
              <h3 className="font-display font-semibold text-lg text-foreground">{s.title}</h3>
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
