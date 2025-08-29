const TechStackSection = () => {
  const technologies = [
    { name: "HTML", icon: "🔤" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TailwindCSS", icon: "💨" },
    { name: "Git", icon: "📂" },
    { name: "GitHub", icon: "🐙" },
    { name: "Supabase", icon: "🗄️" },
    { name: "Vite", icon: "⚡" }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="tech">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-icon group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-icon-inner text-center">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <div className="w-8 h-8 bg-primary rounded-full" />
        </div>
        <div className="absolute top-1/4 right-20 opacity-20 animate-float" style={{ animationDelay: '-2s' }}>
          <div className="w-6 h-6 bg-secondary rounded-full" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20 animate-float" style={{ animationDelay: '-4s' }}>
          <div className="w-10 h-10 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;