import { Download } from 'lucide-react';
import { Button } from './ui/button';

const DownloadCV = () => {
  const handleDownload = () => {
    // Create a simple CV content (in a real app, this would be a PDF file)
    const cvContent = `
ABDUL BASIT
Web Developer

Contact:
Email: Soft4211@gmail.com
Twitter: @soft4211
GitHub: github.com/abdulbasit
LinkedIn: linkedin.com/in/abdulbasit

About:
Self-taught web developer passionate about creating functional, clean, and visually appealing websites. 
Currently learning JavaScript deeply while working with HTML, CSS, and modern frameworks like React.

Skills:
- React & React Native
- JavaScript & TypeScript
- HTML5 & CSS3
- TailwindCSS
- Node.js & Express.js
- MongoDB
- Next.js
- Git & GitHub

Experience:
Self-taught Developer (2023 - Present)
- Building responsive web applications
- Learning modern web development technologies
- Creating clean and maintainable code
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abdul_Basit_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button 
      onClick={handleDownload}
      className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-glow hover:shadow-glow-intense transition-all duration-300"
    >
      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
      Download CV
    </Button>
  );
};

export default DownloadCV;