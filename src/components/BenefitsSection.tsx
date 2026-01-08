import { motion } from "framer-motion";
import { Sparkles, Sun, Shield, Baby, Leaf, Layers } from "lucide-react";
import beewaxProductImage from "@/assets/producto2.png";

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
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Right Column - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card rounded-3xl shadow-elevated overflow-hidden">
                <motion.img
                  src={beewaxProductImage}
                  alt="Producto BeeWax en uso"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-primary to-pink-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⭐ Más Vendido
                </motion.div>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-primary to-pink-600 text-white rounded-2xl p-6 shadow-elevated"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">2000+</div>
                  <div className="text-sm text-white/80">Clientes Felices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/80">Natural</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">5★</div>
                  <div className="text-sm text-white/80">Calificación</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">48h</div>
                  <div className="text-sm text-white/80">Entrega Lima</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
