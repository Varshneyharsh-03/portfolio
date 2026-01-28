import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">//</span> Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <div className="grid gap-6">
              {/* Email */}
              <a
                href="mailto:harsh.varshney.ug22@nsut.ac.in"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    harsh.varshney.ug22@nsut.ac.in
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918630010917"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +91-8630010917
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harsh-varshney-01773a27b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    linkedin.com/in/harshvarshney
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Varshneyharsh-03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    github.com/harshvarshney
                  </div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="mailto:harsh.varshney.ug22@nsut.ac.in"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Send size={18} />
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
