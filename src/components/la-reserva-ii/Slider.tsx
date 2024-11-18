import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";
import { useState } from "react";

const slides = [
  "aerea-1.webp",
  "aerea-2.webp",
  "aerea-3.webp",
  "aerea-4.webp",
  "aerea-5.webp",
  "aerea-6.webp",
  "aerea-7.webp",
  "aerea-8.webp",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative m-auto h-[95svh] w-[90vw]">
      <div
        style={{
          backgroundImage: `url(/la-reserva-ii/${slides[currentIndex]})`,
        }}
        className="h-full rounded-2xl bg-contain bg-center bg-no-repeat duration-500"
      >
        <div className="absolute grid h-full w-full grid-cols-2">
          <div onClick={prevSlide} className="group cursor-pointer">
            <div className="absolute left-0 top-1/2 -translate-x-0 -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 transition md:left-5 md:group-hover:-translate-x-2 md:group-hover:bg-black/30">
              <ChevronLeft className="size-6 text-white md:size-12" />
            </div>
          </div>
          <div onClick={nextSlide} className="group cursor-pointer">
            <div className="absolute right-0 top-1/2 -translate-x-0 -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 transition md:right-5 md:group-hover:translate-x-2 md:group-hover:bg-black/30">
              <ChevronRight className="size-6 text-white md:size-12" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`size-2 cursor-pointer rounded-full transition-all ${
                currentIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
