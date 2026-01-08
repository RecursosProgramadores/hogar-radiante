import { motion } from "framer-motion";
import { Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import productoImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative Background Circle */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110"
                animate={{ 
                  scale: [1.1, 1.3, 1.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Floating Sparkles */}
              <motion.div
                className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full"
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="absolute top-20 right-16 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  y: [-10, -25, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1
                }}
              />
              <motion.div
                className="absolute bottom-32 left-20 w-2.5 h-2.5 bg-blue-400 rounded-full"
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 1.5
                }}
              />
              
              {/* Product Image Container with Float Animation */}
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img
                  src={productoImage}
                  alt="Producto BeeWax"
                  className="w-full max-w-md mx-auto drop-shadow-2xl relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Animated Shadow Effect */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-black/30 to-transparent blur-xl rounded-full"
                  animate={{
                    scale: [1, 0.9, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm z-20"
                >
                  ✓ Producto Natural
                </motion.div>
                
                {/* Animated Rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-primary/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-pink-500/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1.5
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
