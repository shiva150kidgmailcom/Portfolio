import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold animate-fade-in">
            <span className="text-foreground">D Shivakumar</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="pill" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
