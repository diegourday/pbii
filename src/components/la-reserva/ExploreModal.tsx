interface ExploreModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ExploreModal({ open, onClose }: ExploreModalProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 grid place-content-center p-4 transition-colors duration-200 ${open ? "visible bg-black/90" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
      >
        <img
          src="/la-reserva-lotes-detalles.jpg"
          className="max-h-[90svh]"
          alt={"Detalles de los lotes de La Reserva"}
        />
      </div>
    </div>
  );
}
