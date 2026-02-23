import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award } from "lucide-react";

interface InternshipCardProps {
    title: string;
    company: string;
    duration: string;
    description: string;
    tags: string[];
    imageSrc: string;
    delay?: number;
    githubLink?: string;
    certificateLink?: string;
}

const InternshipCard = ({
    title,
    company,
    duration,
    description,
    tags,
    imageSrc,
    delay = 0,
    githubLink,
    certificateLink,
}: InternshipCardProps) => {
    return (
        <div
            className="bg-card rounded-2xl p-4 md:p-5 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.08)] transition-all duration-300 group animate-fade-up border border-border/30 hover:border-primary/30 hover:-translate-y-1"
            style={{ animationDelay: `${delay}s` }}
        >
            {/* Header */}
            <div className="mb-4">
                <div className="flex flex-col gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                        {company} • {duration}
                    </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary/60 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <p className="text-foreground/70 mb-4 text-sm leading-relaxed line-clamp-3">
                {description}
            </p>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-secondary/40 aspect-[4/3] shadow-md group-hover:shadow-lg transition-shadow mb-4">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Action buttons */}
            {(githubLink || certificateLink) && (
                <div className="flex gap-2">
                    {githubLink && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-xs h-8"
                            asChild
                        >
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3 h-3 mr-1" />
                                Code
                            </a>
                        </Button>
                    )}

                    {certificateLink && (
                        <Button
                            variant="default"
                            size="sm"
                            className="flex-1 text-xs h-8"
                            asChild
                        >
                            <a
                                href={certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Award className="w-3 h-3 mr-1" />
                                Certificate
                            </a>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default InternshipCard;