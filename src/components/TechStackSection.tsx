const TechStackSection = () => {
  const technologies = [
    { 
      name: "HTML", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Express.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "TailwindCSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    { 
      name: "GitHub", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    { 
      name: "Supabase", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
    },
    { 
      name: "Vite", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    }
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-icon-enhanced group fade-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                zIndex: technologies.length - index 
              }}
            >
              <div className="tech-icon-inner text-center">
                <div className="w-12 h-12 mx-auto mb-3 relative">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg"
                    style={{
                      filter: 'invert(0.8) sepia(0.2) saturate(1.5) hue-rotate(200deg)'
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
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