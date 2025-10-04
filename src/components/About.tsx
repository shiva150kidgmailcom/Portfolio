const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="gold-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            I'm a dedicated Java Full Stack Developer with a strong foundation in building robust, scalable applications. My journey in software engineering is driven by curiosity and a genuine love for solving complex problems through elegant code.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether it's architecting backend systems with Spring Boot or crafting responsive frontends with React, I approach every project with attention to detail and a commitment to best practices. I believe great software is not just about functionality—it's about creating experiences that are reliable, maintainable, and delightful to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
