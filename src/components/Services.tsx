import {
  Paintbrush,
  Code,
  ShoppingCart,
  Globe,
  UtensilsCrossed,
  Layers,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Web Design",
      description:
        "Creating visually stunning and user-friendly web designs that capture your brand essence and engage your audience.",
    },
    {
      icon: Code,
      title: "Custom Web Applications",
      description:
        "Building tailored web applications with modern technologies to solve your unique business challenges and requirements.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description:
        "Developing robust e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Full-stack website development from concept to deployment, ensuring responsive design and optimal performance across all devices.",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Website Development",
      description:
        "Specialized restaurant websites with online menus, reservation systems, and food ordering capabilities to boost your business.",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and engaging user interfaces with a focus on user experience, accessibility, and conversion optimization.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <service.icon className="w-14 h-14 text-primary relative" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
