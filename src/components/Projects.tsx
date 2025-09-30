import ProjectCard from "./ProjectCard";
import sportlyImage from "@/assets/project-sportly.jpg";
import techflowImage from "@/assets/project-techflow.jpg";
import brandcraftImage from "@/assets/project-brandcraft.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      date: "January 2024",
      description: "Full-stack application with Spring Boot backend and React frontend, featuring secure payment integration and real-time inventory management.",
      tags: ["Java", "Spring Boot", "React"],
      imageSrc: sportlyImage,
    },
    {
      title: "Task Management System",
      date: "March 2024",
      description: "RESTful API-driven task tracker with role-based authentication, allowing teams to collaborate and track project progress efficiently.",
      tags: ["Java", "MySQL", "REST API"],
      imageSrc: techflowImage,
    },
    {
      title: "Social Media Dashboard",
      date: "May 2024",
      description: "Modern web application with responsive design, JWT authentication, and real-time notifications using WebSocket technology.",
      tags: ["Spring Boot", "React", "WebSocket"],
      imageSrc: brandcraftImage,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
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
