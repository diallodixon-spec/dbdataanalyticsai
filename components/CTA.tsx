import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative px-6 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial from-primary/15 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold mt-3 max-w-2xl mx-auto text-foreground">
          Ready to turn your data into decisions?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Start with a complimentary data assessment. We'll identify your
          highest-value opportunities and outline a clear roadmap.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/*
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule your free data assessment
            <ArrowRight className="w-4 h-4" />
          </a>
          */}
          <p
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-xl font-semibold text-foreground hover:bg-card transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contact us at dbdataanalyticsai@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
