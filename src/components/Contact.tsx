import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            Let's build something
            <br />
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>
          <Button variant="outline" size="lg" className="mb-16" asChild>
            <a href="mailto:dshivakumar2026@gmail.com">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </Button>
          
          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="https://www.linkedin.com/in/shivakumar-d-1bb856253" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="https://github.com/shiva150kidgmailcom" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="mailto:dshivakumar2026@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
