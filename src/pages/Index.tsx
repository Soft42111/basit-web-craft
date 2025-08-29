import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Set the home section for navigation
    document.body.setAttribute('id', 'home');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProfileSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Abdul Basit. Built with React, TypeScript & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
