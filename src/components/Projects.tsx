import ProjectCard from "./ProjectCard";
import sportlyImage from "@/assets/project-sportly.jpg";
import techflowImage from "@/assets/project-techflow.jpg";
import brandcraftImage from "@/assets/project-brandcraft.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sportly",
      date: "May 5, 2023",
      description: "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UI/UX", "Branding"],
      imageSrc: sportlyImage,
    },
    {
      title: "TechFlow",
      date: "June 12, 2023",
      description: "Mobile App Design: Creating intuitive interfaces for productivity.",
      tags: ["Mobile App", "UI/UX"],
      imageSrc: techflowImage,
    },
    {
      title: "BrandCraft",
      date: "July 20, 2023",
      description: "Brand Identity: Developing cohesive visual language and guidelines.",
      tags: ["Branding"],
      imageSrc: brandcraftImage,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
