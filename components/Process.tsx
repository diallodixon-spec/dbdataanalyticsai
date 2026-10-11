import { Target, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Discover",
    desc: "A free conversation to understand your questions, your data and what success looks like.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Pilot",
    desc: "A small, defined trial on your own data, so you see results before committing.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Deliver",
    desc: "Reports or automated analysis delivered on a scheduled basis.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    desc: "We review results with you regularly, refine what’s delivered, and add new analyses as your needs change.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-wide text-primary uppercase">
            Our Process
          </span>
          <h2 className="font-display text-3xl font-bold mt-3 max-w-2xl mx-auto text-foreground">
            A proven path from data chaos to clarity
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="p-8 bg-card rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-2xl font-bold text-primary/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mt-6">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
