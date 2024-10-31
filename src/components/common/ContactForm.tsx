import CalendarTime from "@/icons/CalendarTime";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations/schemas";
import { API_URL } from "astro:env/client";
import FormButton from "./FormButton";
import { useState } from "react";
import { toast } from "sonner";

type Inputs = {
  name: string;
  dni: string;
  phone: string;
  email: string;
  contact_date: string;
  contact_time: string;
};

const today = new Date().toISOString().split("T")[0];
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const maxDate = `${nextYear}-12-31`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("¡Gracias! Te contactaremos pronto.");
      reset();
    } catch (error) {
      toast.error("Ocurrió un error. Inténtalo de nuevo.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="formulario-de-contacto"
      className="mx-auto max-w-[1200px] px-6 py-20 md:py-24"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-primary">
        Su futuro hogar le espera
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[800px]">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="pb-1">
              Nombres
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nombres"
              className="contactForm__input"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="contactForm__inputMessage">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="dni" className="pb-1">
              DNI
            </label>
            <input
              id="dni"
              type="text"
              placeholder="DNI"
              className="contactForm__input"
              {...register("dni")}
            />
            {errors.dni?.message && (
              <p className="contactForm__inputMessage">{errors.dni?.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="pb-1">
              Teléfono
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Teléfono"
              className="contactForm__input"
              {...register("phone")}
            />
            {errors.phone?.message && (
              <p className="contactForm__inputMessage">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="contactForm__input"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="contactForm__inputMessage">
                {errors.email?.message}
              </p>
            )}
          </div>
          <p className="col-span-2 flex gap-1 text-sm font-semibold text-primary">
            <CalendarTime className="size-5 flex-shrink-0" />
            Elija la fecha y hora en la que le gustaría ser contactado.
          </p>
          <div className="flex flex-col">
            <label htmlFor="contact_date" className="pb-1">
              Fecha
            </label>
            <input
              id="contact_date"
              type="date"
              className="contactForm__input"
              min={today}
              max={maxDate}
              {...register("contact_date")}
            />
            {errors.contact_date?.message && (
              <p className="contactForm__inputMessage">
                {errors.contact_date?.message}
              </p>
            )}
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="contact_time" className="pb-1">
              Hora
            </label>
            <input
              id="contact_time"
              type="time"
              className="contactForm__input"
              {...register("contact_time")}
            />
            {errors.contact_time?.message && (
              <p className="contactForm__inputMessage">
                {errors.contact_time?.message}
              </p>
            )}
          </div>
          <div className="hidden md:block"></div>
          <FormButton isSubmitting={loading} />
        </div>
      </form>
    </section>
  );
}