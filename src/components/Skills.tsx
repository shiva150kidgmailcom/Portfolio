const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "RESTful APIs", "Microservices"],
    },
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Maven", "Jenkins", "AWS", "Agile/Scrum"],
    },
  ];

  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card rounded-3xl p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
