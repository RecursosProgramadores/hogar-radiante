import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const whatsappNumber = "51999999999";
  const whatsappMessage = "Hola! Me gustaría obtener más información.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H&D</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Hogar & Detalles</h3>
                <p className="text-xs text-white/60 tracking-wider uppercase">
                  Productos pensados para ti
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformamos tu hogar con productos de calidad que cuidan y embellecen cada rincón de tu espacio.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white gap-2 w-full md:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Enlaces Rápidos
            </h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-white/70 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Inicio
              </a>
              <a href="#productos" className="block text-white/70 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Productos
              </a>
              <a href="#testimonios" className="block text-white/70 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Testimonios
              </a>
              <a href="#" className="block text-white/70 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Política de envíos
              </a>
              <a href="#" className="block text-white/70 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Devoluciones
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Lima, Perú</p>
                  <p className="text-white/60 text-xs mt-1">Envíos a todo el país</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+51999999999" className="text-white/70 hover:text-primary transition-colors">
                  +51 999 999 999
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contacto@hogarydetalles.com" className="text-white/70 hover:text-primary transition-colors">
                  contacto@hogarydetalles.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-white/60 mb-3">Síguenos en:</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Hogar & Detalles. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
