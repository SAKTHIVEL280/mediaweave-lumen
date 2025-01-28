import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToFeatures = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'features' } });
    } else {
      document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'about' } });
    } else {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            MediaWeave
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground" onClick={scrollToFeatures}>Features</Button>
          <Button variant="ghost" className="text-foreground" onClick={() => navigate("/pricing")}>Pricing</Button>
          <Button variant="ghost" className="text-foreground" onClick={scrollToAbout}>About</Button>
          <ThemeToggle />
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}