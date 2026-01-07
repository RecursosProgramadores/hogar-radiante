import { motion } from "framer-motion";
import { Sparkles, Sun, Shield, Baby, Leaf, Layers } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Renovación Total",
    description: "Hidrata y rejuvenece muebles opacos en segundos.",
  },
  {
    icon: Sun,
    title: "Brillo Instantáneo",
    description: "Resalta la veta natural sin residuos grasos.",
  },
  {
    icon: Shield,
    title: "Protección Duradera",
    description: "Repele polvo y agua para mantener tus muebles impecables.",
  },
  {
    icon: Baby,
    title: "100% Seguro",
    description: "No tóxico, ideal para hogares con niños y mascotas.",
  },
  {
    icon: Leaf,
    title: "Aroma Agradable",
    description: "Suave y fresco, sin químicos fuertes ni olores artificiales.",
  },
  {
    icon: Layers,
    title: "Versátil",
    description: "Para madera, melamina, laminados y cuero.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Por qué amarás <span className="text-primary">BeeWax</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre los beneficios de nuestra fórmula natural con cera de abejas pura
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group cursor-default"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
