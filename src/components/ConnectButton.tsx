import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const ConnectButton = () => {
  const handleConnect = () => {
    window.open('mailto:Soft4211@gmail.com?subject=Let\'s Connect!&body=Hi Abdul, I came across your portfolio and would love to connect!');
  };

  return (
    <Button 
      onClick={handleConnect}
      className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-glow hover:shadow-glow-intense transition-all duration-300"
    >
      <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
      Let's Connect
    </Button>
  );
};

export default ConnectButton;