import type { BenefitModalProps } from "@/types/Benefits";
import type { FC } from "react";

const BenefitModal: FC<BenefitModalProps> = ({
  benefit: { title, icon: Icon, img, longDescription },
  open,
  onClose,
}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
      >
        <div className="relative">
          <img src={img} className="max-h-[90svh]" alt={title} />

          <div className="bottom-7 z-10 bg-primary/95 p-5 md:absolute">
            <div className="flex items-center gap-3 pb-3">
              <Icon className="size-10 text-white" />
              <h3 className="text-lg font-medium text-white">{title}</h3>
            </div>
            <p
              className="text-sm leading-6 text-white md:w-96"
              dangerouslySetInnerHTML={{ __html: longDescription }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitModal;
