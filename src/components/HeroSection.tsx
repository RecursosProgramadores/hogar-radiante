import { motion } from "framer-motion";
import { Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beewax.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mujer aplicando BeeWax a mueble de madera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Revive el brillo natural de tu hogar con productos pensados para ti{" "}
              <span className="text-primary">❤️</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            <span className="font-semibold text-foreground">BeeWax:</span> cera natural que hidrata, 
            protege y da brillo instantáneo a tus muebles. Seguro para niños y mascotas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-elevated hover:shadow-glow transition-all animate-pulse-soft"
              asChild
            >
              <a href="#productos">¡Quiero mi BeeWax ahora!</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 text-sm bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-foreground">Envío gratis en compras calificadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-foreground">Contraentrega en Lima y Callao</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
