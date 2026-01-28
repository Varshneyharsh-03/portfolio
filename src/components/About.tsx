import { GraduationCap, MapPin, Briefcase, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-muted-foreground">//</span> About{" "}
              <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a final-year B.Tech student in Computer Science & IoT at 
              <span className="text-primary"> Netaji Subhas University of Technology</span>, 
              passionate about building scalable web applications and solving complex algorithmic problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently working as a Python Developer Intern at Fortis Healthcare, where I automate 
              billing processes and improve operational efficiency. I love collaborating on challenging 
              projects that push the boundaries of what's possible on the web.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                <MapPin size={18} className="text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-foreground font-medium">Delhi, India</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                <Briefcase size={18} className="text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Experience</div>
                <div className="text-foreground font-medium">Fortis Healthcare</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar size={14} />
                  <span>2022 - 2026</span>
                </div>
                <h4 className="font-semibold text-foreground">B.Tech in Computer Science & IoT</h4>
                <p className="text-sm text-muted-foreground">Netaji Subhas University of Technology</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                  CGPA: 8.20
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar size={14} />
                  <span>2022</span>
                </div>
                <h4 className="font-semibold text-foreground">Class XII</h4>
                <p className="text-sm text-muted-foreground">Adarsh Jain School, Delhi</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono">
                  91.6%
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar size={14} />
                  <span>2020</span>
                </div>
                <h4 className="font-semibold text-foreground">Class X</h4>
                <p className="text-sm text-muted-foreground">St Clare's School, Agra</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono">
                  93.6%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
