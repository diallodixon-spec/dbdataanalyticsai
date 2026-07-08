const features = [
  {
    title: "GA4 Setup",
    desc: "Automatically configure Google Analytics 4 tracking."
  },
  {
    title: "Event Tracking",
    desc: "Track clicks, scrolls, and conversions effortlessly."
  },
  {
    title: "Heatmaps",
    desc: "Understand how users interact with your pages."
  },
  {
    title: "A/B Testing",
    desc: "Test variations and optimize for conversions."
  },
  {
    title: "Dashboards",
    desc: "Visualize key metrics in real-time."
  },
  {
    title: "Conversion Tracking",
    desc: "Measure what actually drives revenue."
  }
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Everything You Need to Understand Your Users
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
