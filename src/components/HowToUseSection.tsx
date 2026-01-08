import { motion } from "framer-motion";
import { Brush, SprayCan, Sparkles, MoveHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import viejoImage from "@/assets/viejo.jpg";
import nuevoImage from "@/assets/nuevo.jpg";

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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

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
            {/* Comparador Antes/Después */}
            <div 
              ref={containerRef}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-card cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* Imagen DESPUÉS (derecha) - fondo completo */}
              <div className="absolute inset-0">
                <img
                  src={nuevoImage}
                  alt="Después de usar BeeWax"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-lg shadow-lg font-semibold text-sm">
                  DESPUÉS
                </div>
              </div>

              {/* Imagen ANTES (izquierda) - con clip-path */}
              <div 
                className="absolute inset-0 transition-all duration-75"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={viejoImage}
                  alt="Antes de usar BeeWax"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-lg font-semibold text-sm">
                  ANTES
                </div>
              </div>

              {/* Línea divisora y control */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Control deslizante */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-elevated flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                  onMouseDown={handleMouseDown}
                  onTouchStart={() => setIsDragging(true)}
                >
                  <MoveHorizontal className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MoveHorizontal className="w-4 h-4" />
                Arrastra el control para ver el antes y después
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
