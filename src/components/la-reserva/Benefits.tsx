import BenefitItem from "@/components/la-reserva/BenefitItem.tsx";
import { useState } from "react";
import BenefitModal from "./BenefitModal.tsx";
import MapPin from "@/icons/MapPin.tsx";
import Trees from "@/icons/Trees.tsx";
import Bulb from "@/icons/Bulb.tsx";
import Dollar from "@/icons/Dollar.tsx";
import type { Benefit } from "@/types/Benefits.ts";
import Bike from "@/icons/Bike.tsx";
import Monkeybar from "@/icons/Monkeybar.tsx";

const BENEFITS: Benefit[] = [
  {
    title: "Parques",
    description: "Áreas verdes para relajarse <br /> y disfrutar en familia.",
    longDescription:
      "Disfruta de <strong class='font-semibold'>amplias áreas verdes</strong> diseñadas para el descanso y esparcimiento de toda la familia. Espacios <strong class='font-semibold'>llenos de naturaleza</strong> que promueven la vida saludable y el bienestar de los residentes.",
    icon: Trees,
    img: "/la-reserva/parque.webp",
  },
  {
    title: "Servicios completos",
    description: "Conexiones de agua, luz <br /> y desagüe listas.",
    longDescription:
      "Todos los <strong class='font-semibold'>servicios básicos</strong> están completamente habilitados, desde agua potable y electricidad hasta sistemas de desagüe, para que puedas disfrutar de <strong class='font-semibold'>la comodidad</strong> desde el primer día.",
    icon: Bulb,
    img: "/la-reserva/servicios.webp",
  },
  {
    title: "Excelente ubicación",
    description: "Cerca de centros comerciales,<br /> colegios y más.",
    longDescription:
      "<strong class='font-semibold'>Ubicado estratégicamente</strong> para brindarte cercanía a todo lo que necesitas: centros comerciales, colegios, clínicas y mucho más, haciendo tu vida diaria más <strong class='font-semibold'>práctica y conveniente</strong>.",
    icon: MapPin,
    img: "/la-reserva/ubicacion.webp",
  },
  {
    title: "Ciclovía",
    description: "Rutas seguras para el <br />ciclismo y movilidad.",
    longDescription:
      "Disfruta de rutas <strong class='font-semibold'>diseñadas especialmente</strong> para ciclistas, asegurando un ambiente seguro para que puedas moverte de manera <strong class='font-semibold'>ecológica y saludable</strong> dentro de la urbanización.",
    icon: Bike,
    img: "/la-reserva/ciclovia.webp",
  },
  {
    title: "Juegos para niños",
    description: "Zonas seguras y divertidas <br /> para niños.",
    longDescription:
      "Los más pequeños tendrán a su disposición áreas de juegos <strong class='font-semibold'>equipadas y diseñadas</strong> para garantizar su seguridad y diversión, promoviendo el juego activo y la <strong class='font-semibold'>socialización</strong>.",
    icon: Monkeybar,
    img: "/la-reserva/ninos.webp",
  },
  {
    title: "Facilidades de pago",
    description: "Opciones de pago flexibles <br /> para tu comodidad.",
    longDescription:
      "Ofrecemos una amplia gama de opciones de financiamiento para que adquieras tu terreno de manera cómoda y accesible. ¡Encuentra la opción de pago que mejor se adapte a tus necesidades!",
    icon: Dollar,
    img: "/la-reserva/parque.webp",
  },
];

export default function Benefits() {
  const [open, setOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

  const handleSelect = (benefit: Benefit) => {
    setSelectedBenefit(benefit);
    setOpen(true);
    document.body.style.overflow = "hidden";
    window.innerWidth > 768 && (document.body.style.paddingRight = "7px");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };

  return (
    <section className="mx-auto mt-20 max-w-[1200px] px-6">
      <h2 className="mb-6 text-center text-2xl font-semibold text-primary">
        Beneficios de vivir en La Reserva
      </h2>
      <div className="mx-auto grid max-w-4xl md:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <BenefitItem
            key={benefit.title}
            benefit={benefit}
            onSelect={() => handleSelect(benefit)}
          />
        ))}
      </div>

      {selectedBenefit && (
        <BenefitModal
          benefit={selectedBenefit}
          open={open}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
