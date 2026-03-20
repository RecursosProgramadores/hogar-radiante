import whatsappIcon from "../assets/logos/whatsapp.svg";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "51987902933";
  const message = encodeURIComponent("¡Hola! Me interesan los productos de Hogar & Detalles para mantener impecables mis muebles. ¿Podrían asesorarme, por favor? 🏠");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3.5 rounded-full shadow-elevated hover:shadow-glow transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert drop-shadow-sm" />
      <span className="hidden sm:inline font-medium">Escríbenos</span>
    </motion.a>
  );
};

export default WhatsAppButton;
