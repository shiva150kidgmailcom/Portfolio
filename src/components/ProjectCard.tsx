import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageSrc: string;
  delay?: number;
}

const ProjectCard = ({ title, date, description, tags, imageSrc, delay = 0 }: ProjectCardProps) => {
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
      
      <div className="relative overflow-hidden rounded-2xl bg-secondary/50 aspect-video shadow-lg group-hover:shadow-xl transition-shadow">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default ProjectCard;
