import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9d574e47-e0c9-481f-9249-9e3c1583fe43/files/457ac19d-06e5-4bc5-aa56-da9e55f7ff46.jpg"
          alt="Премия ТРАНСФОРМА"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4 opacity-80">Национальная премия</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ТРАНСФОРМА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Премия для организаций, которые меняют культуру и создают будущее через инновационные разработки
        </p>
        <button className="mt-10 border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Номинировать организацию
        </button>
      </div>
    </div>
  );
}