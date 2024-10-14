export interface Benefit {
  title: string;
  description: string;
  longDescription: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  img: string;
}

export interface BenefitItemProps {
  benefit: Benefit;
  onSelect: () => void;
}

export interface BenefitModalProps {
  benefit: Benefit;
  open: boolean;
  onClose: () => void;
}
