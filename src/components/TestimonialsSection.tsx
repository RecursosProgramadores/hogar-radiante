import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de hogares peruanos ya confían en Hogar & Detalles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover shadow-soft flex-shrink-0"
                />

                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-card transition-all hover:bg-primary/5"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-card transition-all hover:bg-primary/5"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
