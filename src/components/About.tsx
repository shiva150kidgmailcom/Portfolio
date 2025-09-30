const About = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            I'm a dedicated Java Full Stack Developer with a strong foundation in building robust, scalable applications. My journey in software engineering is driven by curiosity and a genuine love for solving complex problems through elegant code.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Whether it's architecting backend systems with Spring Boot or crafting responsive frontends with React, I approach every project with attention to detail and a commitment to best practices. I believe great software is not just about functionality—it's about creating experiences that are reliable, maintainable, and delightful to use.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Committed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
