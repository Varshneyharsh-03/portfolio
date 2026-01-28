const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "REST APIs", level: 85 },
      { name: "Socket.IO", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(280_80%_60%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">//</span> Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'var(--gradient-primary)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coursework */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-6 text-center">Relevant Coursework</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Operating Systems",
              "Algorithm Design",
              "Object Oriented Programming",
              "Database Management",
            ].map((course) => (
              <span
                key={course}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
