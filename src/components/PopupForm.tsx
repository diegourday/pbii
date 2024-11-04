import { useEffect, useState } from "react";
import CloseIcon from "@/icons/Close";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations/schemas";
import { toast } from "sonner";
import { API_URL } from "astro:env/client";
import CalendarTime from "@/icons/CalendarTime";
import FormButton from "./common/FormButton";
import { onClose, onOpen } from "@/utils/ModalOptions";
import PbiiLogo from "./common/PbiiLogo";

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

export default function PopupForm() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
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
      localStorage.setItem("formSubmitted", "true");
      handleClose();
      reset();
    } catch (error) {
      toast.warning("Ocurrió un error. Inténtalo de nuevo.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
    clearErrors();
  };

  useEffect(() => {
    setOpen(!localStorage.getItem("formSubmitted"));
  }, []);

  useEffect(() => {
    if (open) onOpen();
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-black/50 transition ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className={`relative h-auto w-full max-w-lg flex-auto overflow-hidden overflow-y-auto rounded-md bg-white p-7 pt-10 shadow-lg transition sm:my-6 sm:pt-7 ${open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-primary"
          >
            <CloseIcon className="size-6" />
          </button>
          <PbiiLogo className="mx-auto mb-4 h-8 text-primary" />
          <p className="mb-4 text-center text-sm font-light text-slate-700">
            La casa de sus sueños a un formulario de distancia.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[800px]"
          >
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name">Nombres</label>
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
                <label htmlFor="dni">DNI</label>
                <input
                  id="dni"
                  type="text"
                  placeholder="DNI"
                  className="contactForm__input"
                  {...register("dni")}
                />
                {errors.dni?.message && (
                  <p className="contactForm__inputMessage">
                    {errors.dni?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Teléfono</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="contact_date">Fecha</label>
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
                <label htmlFor="contact_time">Hora</label>
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
              <FormButton className="col-span-2" isSubmitting={loading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
