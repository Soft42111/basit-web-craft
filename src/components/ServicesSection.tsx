import { Code, Palette, Globe, Smartphone, Database, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
      features: ["React/Next.js", "TypeScript", "TailwindCSS", "Responsive Design"]
    },
    {
      icon: Palette,
      title: "UI/UX Design Implementation",
      description: "Converting designs into pixel-perfect, functional websites with attention to detail.",
      features: ["Design to Code", "Cross-browser Compatibility", "Performance Optimization", "Accessibility"]
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Connecting frontend applications with databases and APIs for dynamic functionality.",
      features: ["Supabase", "REST APIs", "Database Design", "Authentication"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Creating websites that work perfectly on all devices, from mobile to desktop.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Touch-friendly UI", "Fast Loading"]
    },
    {
      icon: Globe,
      title: "Website Deployment",
      description: "Deploying and maintaining websites with modern hosting solutions and CI/CD.",
      features: ["Vercel/Netlify", "Domain Setup", "SSL Certificates", "Performance Monitoring"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, SEO, and user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "Image Optimization", "Code Splitting"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 fade-in-up hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-secondary transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss your requirements and create something amazing together.
            </p>
            <a
              href="mailto:Soft4211@gmail.com?subject=Project Inquiry&body=Hi Abdul, I'm interested in discussing a web development project."
              className="glow-button"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;