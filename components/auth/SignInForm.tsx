"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod/v3";
import FooterLink from "../FooterLink";
import { signInFormSchema, signInInputFields } from "@/lib/constants";

const SignInForm = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        {signInInputFields.map(({ name, label, placeholder, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="form-label">{label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className="form-input"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="yellow-btn w-full"
        >
          {form.formState.isSubmitting ? "Signing In" : "Sign In"}
        </Button>
        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </Form>
  );
};

export default SignInForm;
