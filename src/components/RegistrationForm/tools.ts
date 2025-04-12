import { z } from "zod";

const requiredValidationMessage = "Pole jest wymagane";
const maxValidationMessage = "Za duża ilość znakówe";

export const reservationSchema = z.object({
  firstName: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage)
    .max(50, maxValidationMessage),
  lastName: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage)
    .max(50, maxValidationMessage),
  phone: z
    .string({ message: requiredValidationMessage })
    .max(9, "Numer telefonu powinien mieć 9 cyfr")
    .optional(),
  email: z
    .string({ message: requiredValidationMessage })
    .email("Niepoprawny email"),

  message: z
    .string({ message: requiredValidationMessage })
    .min(1, requiredValidationMessage)
    .max(500, maxValidationMessage),
});

export type Reservation = z.infer<typeof reservationSchema>;
