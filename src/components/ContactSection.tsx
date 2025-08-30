import { Mail, MessageSquare, Calendar, Clock } from "lucide-react";

const ContactSection = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const pakistanTime = new Date(now.getTime() + (5 * 60 * 60 * 1000)); // UTC+5
    return pakistanTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Karachi'
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      subtitle: "Soft4211@gmail.com",
      description: "Best for detailed project discussions",
      action: "mailto:Soft4211@gmail.com?subject=Let's Work Together!&body=Hi Abdul, I'm interested in discussing a project with you.",
      actionText: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Quick Message",
      subtitle: "Twitter DM",
      description: "For quick questions and updates",
      action: "https://x.com/soft4211",
      actionText: "Message on X"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      subtitle: "Let's talk",
      description: "Perfect for complex project planning",
      action: "mailto:Soft4211@gmail.com?subject=Schedule a Call&body=Hi Abdul, I'd like to schedule a call to discuss my project. My preferred time slots are:",
      actionText: "Schedule Call"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          {/* Current Time Display */}
          <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-card border border-border rounded-full">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Current time in Lahore: 
              </span>
              <span className="text-sm font-medium text-foreground">
                {getCurrentTime()} (UTC+5)
              </span>
            </div>
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 fade-in-up text-center hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-primary mb-2 font-medium">
                    {method.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 text-sm">
                    {method.description}
                  </p>
                  
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glow-button text-sm"
                  >
                    {method.actionText}
                  </a>
                </div>
              );
            })}
          </div>
          
          {/* Quick Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Quick Message
              </h3>
              <p className="text-muted-foreground">
                Send me a quick message and I'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  onClick={() => {
                    const name = (document.getElementById('name') as HTMLInputElement)?.value;
                    const email = (document.getElementById('email') as HTMLInputElement)?.value;
                    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
                    
                    const subject = `Project Inquiry from ${name}`;
                    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                    
                    window.open(`mailto:Soft4211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                  }}
                  className="w-full glow-button"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;