import CloseIcon from "@/icons/Close";
import Eye from "@/icons/Eye";
import { onClose, onOpen } from "@/utils/ModalOptions";
import { useState } from "react";

export default function StrategicModal() {
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
      <button
        type="button"
        onClick={handleOpen}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm text-white transition-all hover:bg-primary-dark md:-bottom-10 md:group-hover:bottom-3"
      >
        <Eye className="size-5" />
        Ver completo
      </button>

      <div
        onClick={handleClose}
        className={`fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 text-white"
        >
          <CloseIcon className="size-6" />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`transition ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
        >
          <img
            src="/la-reserva/lotes-detalles.webp"
            className="max-h-[95svh] rounded-md"
            alt={"Detalles de los lotes de La Reserva"}
          />
        </div>
      </div>
    </>
  );
}
