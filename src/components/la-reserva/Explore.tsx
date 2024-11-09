import { useState } from "react";
import SketchModal from "./ExploreModal.tsx";
import Eye from "@/icons/Eye.tsx";
import { onClose, onOpen } from "@/utils/ModalOptions.tsx";

export default function Explore() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1200px] px-6 md:mt-28">
        <div className="grid items-center gap-11 md:grid-cols-[3fr_2fr]">
          <div
            onClick={handleOpen}
            className="group/img relative order-2 h-80 cursor-pointer overflow-hidden rounded-md md:order-1"
          >
            <img
              className="h-full w-full object-cover object-top transition-transform group-hover/img:scale-105"
              src="/la-reserva/lotes-3d.webp"
              alt="Lotes de La Reserva - PB Inversiones Inmobiliarias"
            />
            <div className="absolute inset-0 grid place-items-center bg-primary opacity-0 transition-opacity group-hover/img:opacity-90">
              <p className="flex items-center gap-1.5 text-center font-medium text-white">
                <Eye className="size-6" />
                Ver detalles
              </p>
            </div>
          </div>

          <div className="order-1 flex flex-col">
            <h2 className="mb-4 text-center text-2xl font-semibold text-primary">
              Explore La Reserva
            </h2>
            <p className="mb-4 font-light">
              <strong className="font-semibold text-primary">Descubra</strong>{" "}
              la distribución de los lotes en{" "}
              <strong className="font-semibold text-primary">La Reserva</strong>{" "}
              y encuentre{" "}
              <strong className="font-semibold text-primary">
                el lugar perfecto
              </strong>{" "}
              para su nuevo hogar.
            </p>
            <p className="mb-6 font-light">
              Cada lote ha sido{" "}
              <strong className="font-semibold text-primary">
                cuidadosamente planificado
              </strong>{" "}
              para ofrecerte la mejor experiencia de vida.
            </p>
            <button onClick={handleOpen} className="button-primary mx-2">
              <Eye className="size-6" />
              Ver detalles
            </button>
          </div>
        </div>

        <hr className="border-secondary-light mt-20" />
      </section>

      <SketchModal open={open} onClose={handleClose} />
    </>
  );
}
