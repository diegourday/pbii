import type { BenefitItemProps } from "@/types/Benefits";
import { type FC } from "react";

const BenefitItem: FC<BenefitItemProps> = ({
  benefit: { title, description, icon: Icon },
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className="group/item flex cursor-pointer flex-col items-center px-6 py-7 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/10"
    >
      <div className="mb-2 rounded-full bg-slate-50 p-3 transition-colors duration-300 group-hover/item:bg-slate-100">
        <Icon className="size-10 text-primary group-hover/item:animate-[stroke_2s_ease-in-out_infinite]" />
      </div>
      <h3 className="mb-1 font-medium text-primary">{title}</h3>
      <p
        className="text-center text-sm font-light text-slate-500"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default BenefitItem;
