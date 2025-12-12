import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/nikki-anime.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-primary font-medium mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Nitesh <span className="gradient-text">Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6">
              UI/UX Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Creating custom, user-centric websites with modern UI/UX and front-end technologies. Specializing in clean interfaces, seamless interactions, and high-quality digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-float"></div>
              <img
                src={profileImage}
                alt="Nitesh Sharma - UI/UX Designer & Developer"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <p className="text-4xl font-bold gradient-text">2+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
