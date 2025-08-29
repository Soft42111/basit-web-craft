import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Empire Resume",
      description: "A modern resume builder with clean UI and easy customization options.",
      link: "https://empireresume.vercel.app"
    },
    {
      name: "Mark Resume",
      description: "Simple, professional resume builder focused on quick exports and clarity.",
      link: "https://markresume.vercel.app"
    },
    {
      name: "Winston Resume",
      description: "A polished personal resume website with a focus on professional presentation.",
      link: "https://winstonresume.pro"
    },
    {
      name: "About Saad",
      description: "Personal portfolio site showcasing skills, projects, and achievements with a sleek responsive design.",
      link: "https://aboutsaad.vercel.app"
    },
    {
      name: "Marketing Nexus",
      description: "Landing page for a Web3-focused marketing startup, designed with clean sections and strong branding.",
      link: "https://mktingnexus.com"
    },
    {
      name: "Gynae Telecare",
      description: "Healthcare-focused platform built for online gynecology consultation and telemedicine services.",
      link: "https://gynaetelecare.com"
    },
    {
      name: "E-Commerce Store",
      description: "A demo online store featuring product listings, a responsive shopping layout, and cart functionality.",
      link: "https://e-commerce-store-by-saad.vercel.app"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications I've built, showcasing different technologies and design approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button inline-flex items-center space-x-2 text-sm font-medium"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;