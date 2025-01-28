import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            MediaWeave
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground">Features</Button>
          <Button variant="ghost" className="text-foreground">Pricing</Button>
          <Button variant="ghost" className="text-foreground">About</Button>
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