import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import logoRadiante from "../assets/logos/logoradiante.png";
import whatsappIcon from "../assets/logos/whatsapp.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Testimonios", href: "#testimonios" },
  ];

  const whatsappNumber = "51987902933";
  const whatsappMessage = "¡Hola! Estoy visitando la página de Hogar & Detalles y me gustaría recibir más información sobre sus productos, por favor.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo Left */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 group"
          >
            <div className={`flex items-center gap-3 transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <img 
                src={logoRadiante} 
                alt="Hogar & Detalles Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* WhatsApp Button Right */}
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
            Contactar
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2"
          >
            <img 
              src={logoRadiante} 
              alt="Hogar & Detalles Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>

          <Button 
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white p-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors py-3 px-4 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="bg-green-600 hover:bg-green-700 text-white gap-2 mt-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
                Contactar por WhatsApp
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
