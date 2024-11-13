import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";
import { useEffect, useState } from "react";

const slides = ["parque.webp", "ciclovia.webp", "ninos.webp"];

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((s) => (
            <img src={`/la-reserva/${s}`} alt={s} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="rounded-full bg-primary p-1 text-white shadow transition-all hover:scale-110"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="rounded-full bg-primary p-1 text-white shadow transition-all hover:scale-110"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`size-2 rounded-full transition-all ${curr === i ? "bg-white" : "bg-white/50"} `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
