const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "RESTful APIs", "Microservices", "JEE", "JDBC", "JUnit", "JSP", "Data Access Object(DAO)"," Node.js"],
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "Docker", "Maven", "Jenkins", "Agile/Scrum"],
    },
    {
      title: "Core Subjects",
      skills: ["OOPS", "Computer Networks", "DSA", "DBMS"],
    },
    {
      title: "Programming Languages",
      skills: ["C", "Java", "C++"],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-16 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center">
            Technical <span className="gold-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card rounded-3xl p-6 md:p-8 animate-fade-up border border-border/50 hover:border-primary/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="px-3 md:px-4 py-2 bg-secondary/80 dark:bg-secondary rounded-full text-xs md:text-sm font-medium hover:scale-105 hover:bg-primary/10 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
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
