import { z } from "zod";

const today = new Date().toLocaleDateString("en-CA");

export const contactSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: "El nombre debe tener al menos 6 caracteres.",
    })
    .max(40, {
      message: "El nombre debe tener menos de 40 caracteres.",
    }),
  dni: z
    .string()
    .length(8, {
      message: "El DNI debe tener 8 caracteres.",
    })
    .refine((dni) => !isNaN(Number(dni)), {
      message: "El DNI debe ser un número.",
    }),
  phone: z
    .string()
    .min(9, { message: "El teléfono debe tener al menos 9 dígitos." })
    .max(15, { message: "El teléfono debe tener menos de 15 dígitos." })
    .refine((phone) => /^[\d\s()+-]+$/.test(phone), {
      message: "El teléfono debe ser válido.",
    }),
  email: z.string().email({
    message: "El email debe ser válido.",
  }),
  contact_date: z.string().refine((date) => date >= today, {
    message: "La fecha debe ser válida.",
  }),
  contact_time: z.string().refine(
    (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      return totalMinutes >= 480 && totalMinutes <= 1200;
    },
    { message: "El horario de atención es de 8:00 AM a 8:00 PM." },
  ),
});

export const visitSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: "El nombre debe tener al menos 6 caracteres.",
    })
    .max(40, {
      message: "El nombre debe tener menos de 40 caracteres.",
    }),
  dni: z
    .string()
    .length(8, {
      message: "El DNI debe tener 8 caracteres.",
    })
    .refine((dni) => !isNaN(Number(dni)), {
      message: "El DNI debe ser un número.",
    }),
  phone: z
    .string()
    .min(9, { message: "El teléfono debe tener al menos 9 dígitos." })
    .max(15, { message: "El teléfono debe tener menos de 15 dígitos." })
    .refine((phone) => /^[\d\s()+-]+$/.test(phone), {
      message: "El teléfono debe ser válido.",
    }),
  email: z.string().email({
    message: "El email debe ser válido.",
  }),
  visit_date: z.string().refine((date) => date >= today, {
    message: "La fecha debe ser válida.",
  }),
  visit_time: z.string().refine(
    (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      return totalMinutes >= 480 && totalMinutes <= 1200;
    },
    { message: "El horario de visita es de 8:00 AM a 8:00 PM." },
  ),
});
