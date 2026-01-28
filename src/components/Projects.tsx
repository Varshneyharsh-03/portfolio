import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "CodeBoard-Connect",
    description:
      "A real-time collaborative coding platform with live code editing and chat features. Built peer-to-peer code sharing, messaging, and friend management via Socket.IO and REST APIs.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/harshvarshney",
    featured: true,
  },
  {
    title: "Expense Tracker",
    description:
      "Full-stack expense management application with secure authentication (JWT & bcrypt), RESTful APIs for CRUD operations, and responsive cross-device UI.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/harshvarshney",
    featured: true,
  },
  {
    title: "Billing Automation System",
    description:
      "Automated inpatient billing report generation at Fortis Healthcare using Python. Implemented dynamic billing templates with 70% improved accuracy.",
    tech: ["Python", "fpdf2", "pandas", "openpyxl"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">//</span> Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-2xl p-6 glow-border group transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code2 size={24} className="text-primary" />
              </div>

              {/* Title & Links */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/harshvarshney"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-all duration-300"
          >
            <Github size={18} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
