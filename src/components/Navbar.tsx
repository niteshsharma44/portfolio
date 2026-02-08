import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/transparent-logo.webp";

type NavItem = {
  label: string;
  id?: string;
  path?: string;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems: NavItem[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    // { label: "Blog", path: "/blog" },
    { label: "Contact", id: "contact" },
  ];

  const goToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
      setIsMobileMenuOpen(false);
      return;
    }

    if (item.id) {
      goToSection(item.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => goToSection("home")}
          className="text-2xl font-serif font-bold gradient-text"
        >
          <img src={logo} className="w-4 h-4" alt="Nitesh Sharma - NS44" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => goToSection("contact")}
          className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-4 rounded-lg animate-fade-in-up">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium block w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                onClick={() => goToSection("contact")}
                className="w-full bg-gradient-to-r from-primary to-secondary"
              >
                Let's Talk
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
