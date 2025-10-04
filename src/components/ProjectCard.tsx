import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageSrc: string;
  delay?: number;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ title, date, description, tags, imageSrc, delay = 0, githubLink, liveLink }: ProjectCardProps) => {
  return (
    <div 
      className="bg-card rounded-3xl p-6 md:p-8 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 group animate-fade-up border border-border/50 hover:border-primary/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{date}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button key={tag} variant="pill" size="sm" className="hover:scale-105 transition-transform">
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      <p className="text-foreground/80 mb-6 text-sm md:text-base leading-relaxed">
        {description}
      </p>
      
      <div className="relative overflow-hidden rounded-2xl bg-secondary/50 aspect-video shadow-lg group-hover:shadow-xl transition-shadow mb-6">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {(githubLink || liveLink) && (
        <div className="flex flex-col sm:flex-row gap-3">
          {githubLink && (
            <Button variant="outline" size="sm" className="flex-1 min-w-0" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">View Code</span>
              </a>
            </Button>
          )}
          {liveLink && (
            <Button variant="default" size="sm" className="flex-1 min-w-0" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
