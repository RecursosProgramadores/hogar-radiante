import { motion } from "framer-motion";
import { Check } from "lucide-react";
import whatsappIcon from "../assets/logos/whatsapp.svg";
import { Button } from "@/components/ui/button";
import beewaxProduct from "@/assets/producto.png";

const features = [
  "Cera de abejas 100% natural",
  "Restaura, protege y da brillo",
  "Seguro para niños y mascotas",
  "Aroma natural",
];

const FinalCTASection = () => {
  const whatsappNumber = "51987902933";
  const message = encodeURIComponent("¡Hola! Me encantó el BeeWax y me gustaría realizar un pedido. ¿Me ayudan con el proceso? 🐝");

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl shadow-elevated overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative p-8 flex items-center justify-center bg-secondary/30">
                <motion.img
                  src={beewaxProduct}
                  alt="BeeWax - Cera para madera"
                  className="w-full max-w-xs rounded-2xl shadow-card"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                  ⭐ Más vendido
                </div>
              </div>

              <div className="p-6 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">
                  Producto estrella
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  BeeWax
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Cera natural para madera
                </p>

                <ul className="space-y-2.5 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-sm md:text-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-primary">S/39.90</span>
                  <span className="text-sm text-muted-foreground ml-2">+ envío</span>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-base md:text-lg py-5 md:py-6 shadow-elevated hover:shadow-glow transition-all"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0 invert" />
                      Pedir ahora por WhatsApp
                    </a>
                  </Button>

                  <div className="w-full bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-center gap-3 shadow-soft transition-colors hover:bg-primary/10">
                    <span className="text-xl drop-shadow-sm">✨</span>
                    <p className="text-sm md:text-base text-foreground/80 font-medium">
                      Opción adicional: <strong className="text-foreground">Pañitos de aplicación</strong> por solo <strong className="text-foreground font-extrabold">S/15</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
