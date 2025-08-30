import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import ConnectButton from "./ConnectButton";

const ProfileSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">{/* Added pt-20 for spacing */}
        {/* Profile Picture */}
        <div className="relative inline-block mb-12 fade-in-up">{/* Increased margin from mb-8 to mb-12 */}
          <div className="profile-glow">
            <img
              src="/profile.png"
              alt="Abdul Basit - Web Developer"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-glow relative z-10"
            />
          </div>
        </div>
        
        {/* Name & Title */}
        <div className="fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>{/* Added mb-8 for spacing */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-name">
            Abdul Basit
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-light">
            <TypewriterEffect 
              text="Web Developer | Building sleek, responsive websites"
              delay={1000}
              speed={80}
            />
          </div>
        </div>
        
        {/* Bio */}
        <div className="fade-in-up max-w-2xl mx-auto mb-8" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a self-taught web developer passionate about creating functional, clean, and visually appealing websites. 
            Currently learning JavaScript deeply while working with HTML, CSS, and modern frameworks like React.
          </p>
        </div>
        
        {/* Connect Button */}
        <div className="fade-in-up mb-8" style={{ animationDelay: '0.6s' }}>
          <ConnectButton />
        </div>
        
        {/* Social Links */}
        <div className="fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.8s' }}>
          <a
            href="https://x.com/soft4211"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-icon bg-card hover:bg-card-hover border border-border hover:border-primary"
          >
            <div className="tech-icon-inner">
              <Twitter className="w-6 h-6 text-primary" />
            </div>
          </a>
          
          <a
            href="mailto:Soft4211@gmail.com"
            className="tech-icon bg-card hover:bg-card-hover border border-border hover:border-primary"
          >
            <div className="tech-icon-inner">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </a>
          
          <a
            href="https://github.com/abdulbasit"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-icon bg-card hover:bg-card-hover border border-border hover:border-primary"
          >
            <div className="tech-icon-inner">
              <Github className="w-6 h-6 text-primary" />
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/abdulbasit"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-icon bg-card hover:bg-card-hover border border-border hover:border-primary"
          >
            <div className="tech-icon-inner">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;