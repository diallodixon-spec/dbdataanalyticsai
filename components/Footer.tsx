import { Gauge } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <a href="/" className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Gauge className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-lg text-foreground">
              DB Data Analytics & AI Services
            </span>
          </a>
          <p className="text-base text-muted-foreground mt-5 max-w-xs">
            Data analytics, business intelligence, and AI services for modern
            enterprises that want to move faster and smarter.
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-foreground">Services</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Data Analytics</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Business Intelligence</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">AI & Machine Learning</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Content Intelligence & Automation</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-foreground">Company</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li><a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a></li>
            <li><a href="#process" className="hover:text-foreground transition-colors">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="/" className="hover:text-foreground transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
