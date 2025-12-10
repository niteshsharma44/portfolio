import { Code2, Database, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Figma", level: 95 },
    { name: "Webflow", level: 94 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 97 },
    { name: "Tailwind CSS", level: 93 },
    { name: "JavaScript", level: 92 },
    { name: "React.js", level: 96 },
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 87 },
    { name: "MERN Stack", level: 90 },
    { name: "PHP", level: 90 },
    { name: "WordPress", level: 94 },
  ];

  const highlights = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with Figma & Tailwind CSS",
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React.js, HTML5, CSS3, and modern JavaScript frameworks",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, and RESTful API integration",
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "End-to-end development with MERN stack and payment gateway integration",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a UI/UX developer with expertise in Figma, Webflow, HTML, CSS, JS, React.js,
            Express.js, Node.js, Tailwind CSS, payment gateway integration,
            frontend and backend development. I create custom and eye-catching
            websites.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-6 rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
