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
            <SheetContent side="top" className="h-full flex items-center justify-center bg-background/40 backdrop-blur-xl border-border/20">
              <nav className="flex flex-col gap-8 items-center">
                <a href="#home" className="text-3xl md:text-4xl font-medium hover:text-primary transition-all hover:scale-110 duration-300">
                  Home
                </a>
                <a href="#projects" className="text-3xl md:text-4xl font-medium hover:text-primary transition-all hover:scale-110 duration-300">
                  Projects
                </a>
                <a href="#skills" className="text-3xl md:text-4xl font-medium hover:text-primary transition-all hover:scale-110 duration-300">
                  Technical Skills
                </a>
                <a href="#about" className="text-3xl md:text-4xl font-medium hover:text-primary transition-all hover:scale-110 duration-300">
                  About Me
                </a>
                <a href="#contact" className="text-3xl md:text-4xl font-medium hover:text-primary transition-all hover:scale-110 duration-300">
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
