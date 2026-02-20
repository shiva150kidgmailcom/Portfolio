import ProjectCard from "./ProjectCard";
import sportlyImage from "@/assets/project-sportly.jpg";
import techflowImage from "@/assets/project-techflow.jpg";
import brandcraftImage from "@/assets/project-brandcraft.jpg";
// import quickcart from "@assets/project-sportlyImage.jpg";
import quickcartImage from "@/assets/project-Quickcart.jpg";

const Projects = () => {
  const projects = [
    {
      title: "QuickCart - Real-Time Grocery Ordering Platform",
      date: "November 2025",
      description: "Full-stack application with Node.js backend and React frontend, featuring secure payment integration and real-time inventory management.",
      tags: ["Node.js", "Stripe", "React"],
      imageSrc: quickcartImage,
      githubLink: "https://github.com/shiva150kidgmailcom/Quickcart",
      // frontendLiveLink: "https://quickcart-frontend-pi.vercel.app/",
      liveLink: "https://quickcart-frontend-pi.vercel.app/",
    },
    {
      title: "Task Management System",
      date: "March 2024",
      description: "RESTful API-driven task tracker with role-based authentication, allowing teams to collaborate and track project progress efficiently.",
      tags: ["Java", "MySQL", "REST API"],
      imageSrc: techflowImage,
      githubLink: "https://github.com/shiva150kidgmailcom",
      liveLink: "https://github.com/shiva150kidgmailcom",
    },
    {
      title: "Social Media Dashboard",
      date: "May 2024",
      description: "Modern web application with responsive design, JWT authentication, and real-time notifications using WebSocket technology.",
      tags: ["Spring Boot", "React", "WebSocket"],
      imageSrc: brandcraftImage,
      githubLink: "https://github.com/shiva150kidgmailcom",
      liveLink: "https://github.com/shiva150kidgmailcom",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
          <span className="gold-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
