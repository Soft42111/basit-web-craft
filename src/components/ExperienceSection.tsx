import { CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    "Build responsive websites that look great on desktop and mobile.",
    "Convert clean designs into functional code.",
    "Explore and integrate backend services like Supabase.",
    "Always learning new technologies to improve as a developer."
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="experience">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My approach to web development and the value I bring to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <p className="text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {experience}
                </p>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Let's Build Something Amazing
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
              </p>
              <a
                href="mailto:Soft4211@gmail.com"
                className="glow-button"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;