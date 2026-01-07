import { Heart } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-wide">
        Hogar
      </span>
      <div className="relative my-1">
        <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-primary rounded-lg flex items-center justify-center relative">
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary" />
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-primary font-serif text-lg md:text-xl font-bold">
            &
          </span>
        </div>
      </div>
      <span className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-wide">
        Detalles
      </span>
      <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
        Productos pensados para ti
      </span>
    </div>
  );
};

export default Logo;
