import { z } from "zod";

// const defaultToDate = dayjs().add(1, "day").toDate();

const requiredValidationMessage = "Pole jest wymagane";
const maxValidationMessage = "Za duża ilość znakówe";

export const reservationSchema = z.object({
  name: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage)
    .max(50, maxValidationMessage),
  buildType: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage),
  phone: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage)
    .max(9, "Numer telefonu powinien mieć 9 cyfr"),
  email: z
    .string({ message: requiredValidationMessage })
    .email("Niepoprawny email")
    .optional(),
  from: z.date(),
  to: z.date(),
  withAnimal: z.boolean().default(false),
  withBreakfast: z.boolean().default(false),
  adultAmount: z.string().min(1, requiredValidationMessage),
  childAmount: z.string(),
  message: z
    .string({ message: requiredValidationMessage })
    .max(500, maxValidationMessage),
});

export type Reservation = z.infer<typeof reservationSchema>;
