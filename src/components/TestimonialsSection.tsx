import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import mariaImage from "@/assets/testimonial-maria.jpg";
import rosaImage from "@/assets/testimonial-rosa.jpg";
import carmenImage from "@/assets/testimonial-carmen.jpg";

const testimonials = [
  {
    name: "María García",
    location: "San Isidro, Lima",
    image: mariaImage,
    text: "Mis muebles lucen como nuevos y huele delicioso natural. ¡No puedo creer la diferencia! Lo recomiendo a todas mis amigas.",
    rating: 5,
  },
  {
    name: "Rosa Mendoza",
    location: "Trujillo",
    image: rosaImage,
    text: "Lo mejor: es seguro para mis nietos y mi perrito. Antes me preocupaba usar productos químicos en casa, pero con BeeWax tengo total tranquilidad.",
    rating: 5,
  },
  {
    name: "Carmen Torres",
    location: "Arequipa",
    image: carmenImage,
    text: "Fácil de usar y resultados inmediatos. Mi comedor de cedro quedó espectacular, como cuando lo compramos hace 15 años.",
    rating: 5,
  },
  {
    name: "Patricia Quispe",
    location: "Miraflores, Lima",
    image: mariaImage,
    text: "Compré para probar y terminé pidiendo tres más para regalar a mi mamá y hermanas. ¡Producto estrella!",
    rating: 5,
  },
  {
    name: "Lucía Fernández",
    location: "Cusco",
    image: carmenImage,
    text: "La entrega llegó perfecta a Cusco. El producto cumple todo lo que promete. Mi escritorio de madera brilla increíble.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Casos de Éxito
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de hogares peruanos ya confían en Hogar & Detalles para cuidar lo que más quieren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 w-full max-w-[1600px] mx-auto px-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-5 shadow-card relative border border-border/50 hover:border-primary/30 hover:-translate-y-2 hover:shadow-elevated transition-all duration-300 flex flex-col group justify-between"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />

              <div className="flex flex-col gap-1 mb-4 mt-2 flex-grow">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic text-sm">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover shadow-soft relative z-10 border-2 border-background flex-shrink-0"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight truncate">{testimonial.name}</h3>
                  <p className="text-xs font-medium text-primary truncate">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
