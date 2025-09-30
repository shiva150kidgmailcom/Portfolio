import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            Let's create something
            <br />
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <Button variant="outline" size="lg" className="mb-16">
            <Mail className="w-5 h-5" />
            Get in Touch
          </Button>
          
          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
