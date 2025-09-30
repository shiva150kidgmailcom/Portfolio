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
      className="bg-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{date}</p>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Button key={tag} variant="pill" size="sm">
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      <p className="text-foreground mb-6 group-hover:text-foreground/80 transition-colors">
        {description}
      </p>
      
      <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-video">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
