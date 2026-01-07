import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8 [&_span]:text-background [&_.text-primary]:text-primary [&_.text-muted-foreground]:text-background/60">
            <Logo />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Política de envíos
            </a>
            <a
              href="#"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Devoluciones
            </a>
            <a
              href="#contacto"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <p className="text-sm text-background/60 mb-4">
            Contacto: Luis - Lima, Perú
          </p>

          {/* Copyright */}
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Hogar & Detalles. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
