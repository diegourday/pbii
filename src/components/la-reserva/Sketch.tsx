import { useState } from "react";
import SketchModal from "./SketchModal.tsx";

export default function Sketch() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
    window.innerWidth > 768 && (document.body.style.paddingRight = "7px");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };

  return (
    <>
      <div className="mx-auto max-w-[1100px] px-6 pt-28">
        <div className="grid items-center gap-11 md:grid-cols-[3fr_2fr]">
          <div
            onClick={handleOpen}
            className="group/img relative cursor-pointer"
          >
            <img
              className="shadow-lg shadow-primary/15"
              src="/lotes-la-reserva.jpg"
              alt="Lotes de La Reserva - PB Inversiones Inmobiliarias"
            />
            <div className="absolute inset-0 grid place-items-center bg-primary opacity-0 transition-opacity duration-300 group-hover/img:opacity-90">
              <p className="text-center text-xl font-medium text-white">
                Ver detalles
              </p>
            </div>
          </div>

          <div className="grid">
            <h2 className="mb-4 text-center text-2xl font-semibold text-primary">
              Explora La Reserva
            </h2>
            <p className="mb-4 font-light">
              <strong className="font-semibold text-primary">Descubre</strong>{" "}
              la distribución de los lotes en{" "}
              <strong className="font-semibold text-primary">La Reserva</strong>{" "}
              y encuentra{" "}
              <strong className="font-semibold text-primary">
                la ubicación perfecta
              </strong>{" "}
              para tu nuevo hogar.
            </p>
            <p className="mb-6 font-light">
              Cada lote ha sido{" "}
              <strong className="font-semibold text-primary">
                cuidadosamente planificado
              </strong>{" "}
              para ofrecerte la mejor experiencia de vida.
            </p>
            <button
              onClick={handleOpen}
              className="mx-4 bg-primary px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-primary-dark"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      <SketchModal open={open} onClose={handleClose} />
    </>
  );
}
