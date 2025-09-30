const About = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Crafting <span className="gradient-text">digital experiences</span> that inspire and engage
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            With a passion for clean design and user-centered thinking, I help brands establish their digital presence through thoughtful design solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
