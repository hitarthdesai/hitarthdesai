import { z } from "zod";

export const contactFormSchema = z.object({
  message: z
    .string()
    .min(10, "Message must contain at least 10 characters")
    .max(200, "Message must be at most 200 characters"),
  email: z.string().email("Invalid email address"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
