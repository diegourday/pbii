import type { BenefitModalProps } from "@/types/Benefits";
import type { FC } from "react";
import CloseIcon from "@/icons/Close";

const BenefitModal: FC<BenefitModalProps> = ({
  benefit: { title, icon: Icon, img, longDescription },
  open,
  onClose,
}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4 transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-white"
      >
        <CloseIcon className="size-6" />
      </button> */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative h-auto w-full max-w-lg flex-auto overflow-hidden overflow-y-auto rounded-md bg-white p-7 pt-10 shadow-lg transition sm:my-6 sm:pt-7 ${open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="relative">
            <img
              src={img}
              className="max-h-[90svh] rounded-t-md md:rounded-md"
              alt={title}
            />

            {/* <div className="bottom-4 left-4 z-10 rounded-b-md bg-primary/95 p-5 md:absolute md:rounded-md">
              <div className="flex items-center gap-3 pb-3">
                <Icon className="size-10 text-white" />
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <p
                className="text-sm leading-6 text-white md:w-96"
                dangerouslySetInnerHTML={{ __html: longDescription }}
              ></p>
            </div> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitModal;
