"use server";

import { contactFormSchema } from "@/schemas/contact";
import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const actionClient = createSafeActionClient();

export const submitContactForm = actionClient
  .schema(contactFormSchema)
  .action(async ({ parsedInput: { message, email } }) => {
    const { error } = await resend.emails.send({
      from: "Personal Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_FORM_EMAIL!],
      subject: `Incoming message from: ${email}`,
      html: `<p>${message}</p>`,
    });

    const didSucceed = !error;
    if (!didSucceed) {
      console.error(error);
    }

    return didSucceed;
  });
