import { Gauge } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Gauge className="w-5 h-5" />
          </span>
          <span className="font-display font-bold text-lg text-foreground">
            DB Data Analytics & AI Services
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-base text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a>
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <a href="#contact" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="#cta"
            className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
          >
            Get a free data assessment
          </a>
        </div>
      </div>
    </header>
  );
}
