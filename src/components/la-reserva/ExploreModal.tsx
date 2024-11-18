import CloseIcon from "@/icons/Close";

interface ExploreModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ExploreModal({ open, onClose }: ExploreModalProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar modal"
        className="absolute right-4 top-4 z-10 text-white"
      >
        <CloseIcon className="size-6" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
      >
        <img
          src="/la-reserva/lotes-3d.webp"
          className="max-h-[95svh] rounded-md"
          alt={"Detalles de los lotes de La Reserva"}
        />
      </div>
    </div>
  );
}
