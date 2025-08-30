import { MapPin, Clock, Coffee, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate self-taught web developer from Lahore, Pakistan, dedicated to crafting 
                  exceptional digital experiences. My journey into web development started with curiosity 
                  and has evolved into a deep love for creating functional, beautiful, and user-friendly websites.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or enjoying a good cup of coffee while planning my next project. I believe in 
                  continuous learning and staying updated with the latest industry trends.
                </p>
                <p>
                  My goal is to help businesses and individuals establish their digital presence through 
                  clean, responsive, and modern web solutions that not only look great but perform excellently.
                </p>
              </div>
            </div>
            
            {/* Location & Time Info */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Current Status
                </h3>
                
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-muted-foreground">Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  {/* Timezone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Timezone</h4>
                      <p className="text-muted-foreground">UTC+5 (PKT)</p>
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Status</h4>
                      <p className="text-muted-foreground">Available for projects</p>
                    </div>
                  </div>
                  
                  {/* Passion */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Passion</h4>
                      <p className="text-muted-foreground">Creating amazing web experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground text-sm">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">2+</div>
              <div className="text-muted-foreground text-sm">Years Learning</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Passion Mode</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Self-Taught</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;