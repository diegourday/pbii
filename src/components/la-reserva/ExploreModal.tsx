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
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
      >
        <img
          src="/la-reserva/lotes-detalles.webp"
          className="max-h-[90svh]"
          alt={"Detalles de los lotes de La Reserva"}
        />
      </div>
    </div>
  );
}
