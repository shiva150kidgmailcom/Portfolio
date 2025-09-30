import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold animate-fade-in">
            <span className="text-foreground">D Shivakumar</span>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#home" className="text-2xl font-medium hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#projects" className="text-2xl font-medium hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-2xl font-medium hover:text-primary transition-colors">
                  Technical Skills
                </a>
                <a href="#about" className="text-2xl font-medium hover:text-primary transition-colors">
                  About Me
                </a>
                <a href="#contact" className="text-2xl font-medium hover:text-primary transition-colors">
                  Get in Touch
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
