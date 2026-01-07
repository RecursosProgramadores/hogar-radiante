import { motion } from "framer-motion";
import { Brush, SprayCan, Sparkles } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const steps = [
  {
    icon: Brush,
    number: "1",
    title: "Limpia el mueble",
    description: "Retira el polvo con un paño seco o ligeramente húmedo.",
  },
  {
    icon: SprayCan,
    number: "2",
    title: "Rocía BeeWax",
    description: "Aplica uniformemente y deja secar 20 minutos.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "Frota y brilla",
    description: "Pasa un paño limpio para un brillo perfecto.",
  },
];

const HowToUseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Así de fácil lo usas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En solo 3 pasos tendrás tus muebles como nuevos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-elevated">
                  <step.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-primary">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={beforeAfterImage}
              alt="Antes y después de usar BeeWax"
              className="w-full rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-elevated font-medium">
              ¡Resultados reales!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
