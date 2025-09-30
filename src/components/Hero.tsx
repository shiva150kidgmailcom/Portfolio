const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
            <span className="block animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Java Full Stack
            </span>
            <span className="block animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Engineer &
            </span>
            <span className="block gradient-text animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Problem Solver
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Building scalable applications with clean architecture and modern technologies. 
            Passionate about crafting solutions that make a real impact.
          </p>
        </div>
      </div>
      
      {/* Services List - Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-right animate-slide-in-right">
        <div className="text-sm font-medium tracking-wide hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.6s' }}>
          JAVA
        </div>
        <div className="text-sm font-medium tracking-wide hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.7s' }}>
          SPRING BOOT
        </div>
        <div className="text-sm font-medium tracking-wide hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.8s' }}>
          REACT
        </div>
        <div className="text-sm font-medium tracking-wide hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.9s' }}>
          FULL STACK
        </div>
      </div>
    </section>
  );
};

export default Hero;
