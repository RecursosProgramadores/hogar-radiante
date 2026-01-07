import { motion } from "framer-motion";
import { Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import cleanKitchenImage from "@/assets/clean-kitchen.jpg";

const UpsellSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4" />
            <span className="text-sm font-semibold">Oferta exclusiva</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            ¡Oferta exclusiva por tu compra de BeeWax!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-card rounded-3xl shadow-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={cleanKitchenImage}
                alt="Cocina limpia con pañitos quitagrasa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                -57% OFF
              </div>
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Pañitos Quitagrasa
              </h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Elimina grasa difícil en segundos</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Ideal para cocinas y electrodomésticos</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Aroma fresco y agradable</span>
                </li>
              </ul>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-muted-foreground line-through text-lg">
                  S/35
                </span>
                <span className="text-3xl font-bold text-primary">S/15</span>
                <span className="text-sm text-muted-foreground">
                  al comprar BeeWax
                </span>
              </div>

              <Button size="lg" className="w-full shadow-elevated">
                Agregar pañitos por solo S/15 extra
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpsellSection;
