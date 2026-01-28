import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(173_80%_50%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10">
        <div className="text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 opacity-0 animate-fade-in-up">
            <Code2 size={16} className="text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Full Stack Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text text-shadow-glow">Harsh</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-200">
            A passionate developer crafting elegant solutions with 
            <span className="text-primary"> React</span>, 
            <span className="text-primary"> Node.js</span>, and 
            <span className="text-primary"> modern web technologies</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 opacity-0 animate-fade-in-up delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2000+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">1600</div>
              <div className="text-sm text-muted-foreground">LeetCode Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">8.2</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
            <a
              href="https://github.com/Varshneyharsh-03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-varshney-01773a27b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:harsh.varshney.ug22@nsut.ac.in"
              className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-500">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs font-mono">scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
