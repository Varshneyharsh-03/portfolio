import { Trophy, Code, Star, Target } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "2000+",
    subtitle: "Problems Solved",
    description: "Across LeetCode, GeeksforGeeks, and other platforms",
    color: "primary",
  },
  {
    icon: Star,
    title: "Level-7",
    subtitle: "Code360 Expert",
    description: "Achieved Expert rank on Coding Ninjas platform",
    color: "accent",
  },
  {
    icon: Target,
    title: "1600",
    subtitle: "Max LeetCode Rating",
    description: "Peak competitive programming rating",
    color: "primary",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_80%_50%_/_0.05)_0%,_transparent_50%)]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">//</span> Achievements{" "}
            <span className="gradient-text">& Stats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones from my competitive programming journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="glass-card rounded-2xl p-8 text-center glow-border group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  achievement.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                } transition-colors`}
              >
                <achievement.icon
                  size={32}
                  className={
                    achievement.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }
                />
              </div>

              <h3
                className={`text-4xl font-bold mb-2 ${
                  achievement.color === "primary"
                    ? "gradient-text"
                    : "gradient-text-accent"
                }`}
              >
                {achievement.title}
              </h3>

              <div className="text-lg font-semibold text-foreground mb-2">
                {achievement.subtitle}
              </div>

              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mt-12 glass-card rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "LeetCode",
                url: "https://leetcode.com/u/harshvarshney_03/",
              },
              {
                name: "GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/profile/harshude0l",
              },
              {
                name: "Code360",
                url: "https://www.naukri.com/code360/profile/harshvarshney",
              },
              {
                name: "Codolio",
                url: "https://codolio.com/profile/harshvarshney_03",
              },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
