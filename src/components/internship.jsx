import InternshipCard from "./internshipCard";
import fullstackImage from "@/assets/intern-fullstack.jpg";
import backendImage from "@/assets/intern-backend.jpg"; // add a new image

const Internships = () => {
    const internships = [
        {
            title: "Full Stack Development Intern",
            company: "Ultimez Technologies Pvt Ltd",
            duration: "Nov 2025 – Dec 2025",
            description:
                "Worked on end-to-end web application development using MERN stack. Built REST APIs, implemented authentication & authorization, developed responsive UI components, and handled database integration and deployment workflows.",
            tags: ["React", "Node.js", "MongoDB", "REST API"],
            imageSrc: fullstackImage,
            certificateLink:
                "https://drive.google.com/file/d/10TmNxLcgRSO-iuAtfJQqwx4XDYc8ExBL/view?usp=sharing",
        },
        {
            title: "Cloud Application Developer Intern",
            company: "Rooman Technologies Pvt Ltd",
            duration: "July 2025 – Aug 2025",
            description:
                "Developed and containerized 3+ cloud-ready backend applications using Docker, reducing environment setup time by 40% and improving deployment consistency.",
            tags: ["Deployment", "MySQL", "Linux Basics", "JWT"],
            imageSrc: backendImage,
            certificateLink: "https://drive.google.com/file/d/1wV7t6B4rdoliDfDYQraeYScrJnaxlYD3/view?usp=sharing",
        },
    ];

    return (
        <section id="internships" className="py-16 px-6">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
                    <span className="gold-text">Internships</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {internships.map((internship, index) => (
                        <InternshipCard
                            key={internship.title}
                            {...internship}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;