import { motion } from "framer-motion";
import { Truck, Lock, MessageCircle, Heart, MapPin, Package } from "lucide-react";

const shippingInfo = [
  {
    icon: MapPin,
    text: "Lima y Callao: Contraentrega gratis",
  },
  {
    icon: Package,
    text: "Distritos lejanos (ej. SJL): Mínimo S/15 de adelanto",
  },
  {
    icon: Truck,
    text: "Provincias: Adelanto S/30 (S/20 en Trujillo)",
  },
  {
    icon: Package,
    text: "Envío gratis por Shalom hasta S/14",
  },
  {
    icon: Heart,
    text: "Promoción: Recoge en 7 días o paga envío extra",
  },
];

const trustIcons = [
  { icon: Truck, label: "Envío seguro" },
  { icon: Lock, label: "Pago protegido" },
  { icon: MessageCircle, label: "Soporte WhatsApp" },
  { icon: Heart, label: "Familia segura" },
];

const ShippingSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Comprar con nosotros es fácil y seguro{" "}
            <span className="text-primary">❤️</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-card mb-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Información de envío
            </h3>

            <ul className="space-y-4">
              {shippingInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustIcons.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 shadow-soft flex flex-col items-center gap-2 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
