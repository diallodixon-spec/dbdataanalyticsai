export default function Hero() {
  const trustBadges = ["Free data assessment", "1-month pilot", "Actionable insights"];

  return (
    <section className="relative px-6 py-20 md:py-28 bg-grid overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial from-primary/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide text-primary bg-secondary px-3 py-1 rounded-full mb-6">
            AI-powered analytics for modern businesses
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-foreground">
            Turn data into your competitive edge
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            We help organizations unlock the full value of their data with
            advanced analytics, business intelligence, and AI solutions that
            drive measurable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium glow-indigo hover:opacity-90 transition-opacity"
            >
              Book a strategy call
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-border rounded-xl font-medium text-foreground hover:bg-card transition-colors"
            >
              View services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <img
            src="/hero-analytics.png"
            alt="Data analytics and AI visualization dashboard"
            className="relative rounded-2xl shadow-2xl w-full border border-border"
          />
        </div>
      </div>
    </section>
  );
}
