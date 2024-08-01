"use client";

import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  contactFormSchema,
  type ContactForm as ContactFormType,
} from "@/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { submitContactForm } from "@/actions/submitContactForm";
import { useToast } from "./ui/use-toast";

const defaultContactFormValues: ContactFormType = {
  message: "",
  email: "",
};

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultContactFormValues,
  });

  const { executeAsync } = useAction(submitContactForm, {
    onSettled: ({ result }) => {
      const didSucceed = result.data;
      if (didSucceed) {
        form.reset();

        toast({
          title: "Thanks for your message!",
          description: "I will reach out to you soon",
        });
      } else {
        toast({
          title: "There was a problem sending your message",
          description: "Please try again, or message me on my socials",
        });
      }
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(executeAsync)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormDescription>
                What do you want to say to me? 🤗
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormDescription>What email should I respond to?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Form>
  );
}
