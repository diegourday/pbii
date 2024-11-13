import CloseIcon from "@/icons/Close";
import { onClose, onOpen } from "@/utils/ModalOptions";
import { useEffect, useState } from "react";
import Slider from "@/components/la-reserva-ii/Slider";

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

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    const buttonStrategic = document.getElementById("button-strategic");
    buttonStrategic?.addEventListener("click", handleOpen);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      buttonStrategic?.removeEventListener("click", handleOpen);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 backdrop-blur-md transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <button
        onClick={handleClose}
        aria-label="Cerrar modal"
        className="absolute right-4 top-4 z-10 text-white"
      >
        <CloseIcon className="size-6" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"} `}
      >
        <Slider />
      </div>
    </div>
  );
}
