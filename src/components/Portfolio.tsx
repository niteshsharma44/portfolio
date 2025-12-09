import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceProject from "@/assets/project-ecommerce.jpg";
import physiotherapyProject from "@/assets/project-physiotherapy.png";
import taxiProject from "@/assets/project-taxi.png";
import steakyProject from "@/assets/steaky.png";
import { link } from "fs";

const Portfolio = () => {
  const projects = [
    {
      title: "physiotherapy Website",
      description:
        "Modern physiotherapy website with fully responsive and functional with attractive animations.",
      image: physiotherapyProject,
      technologies: ["JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      link:"https://physiotherapydesign.netlify.app/"
    },
    {
      title: "E-commerce Platform",
      description:
        "A fully functional e-commerce website with shopping cart, payment gateway integration, and admin dashboard for product management.",
      image: ecommerceProject,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
      link:"https://nikk-e-commerce.netlify.app/"
    },
    {
      title: "Taxi booking Website",
      description:
        "Creative Taxi booking website with contact form and online booking facility.",
      image: taxiProject,
      technologies: ["JavaScript", "Tailwind CSS", "node.js"],
      link:"https://taxiwebpage.netlify.app/"
    },
    {
      title: "Steaky – Restaurant website",
      description:
        "A premium steakhouse website showcasing fine dining, elegant interiors, signature dishes, and a luxurious culinary experience.",
      image: steakyProject,
      technologies: ["React.js","TypeScript", "Tailwind CSS","Node.js", "Express.js", "MongoDB"],
      link:"https://steaky.netlify.app/"
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary"
                  ><a target="_blank" rel="noopener noreferrer" className="flex" href={project.link}>
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                    </a>

                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
