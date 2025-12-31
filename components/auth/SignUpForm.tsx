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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  signUPFormSchema,
  signUpInputFields,
  signUpSelectFields,
} from "@/lib/constants";
import { CountrySelectField } from "../CountrySelectField";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUPFormSchema>>({
    resolver: zodResolver(signUPFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
      country: "",
    },
  });
  const onSubmit = (data: z.infer<typeof signUPFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {signUpInputFields.map(({ name, label, placeholder, type }) => (
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
        <CountrySelectField
          name="country"
          label="Country"
          control={form.control}
          error={form.formState.errors.country}
          required
        />

        {signUpSelectFields.map(({ name, label, placeholder, options }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="form-label">{label}</FormLabel>

                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="select-trigger">
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="bg-gray-800 border-gray-600 text-white">
                    {options.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="focus:bg-gray-600 focus:text-white"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
          {form.formState.isSubmitting
            ? "Creating Account"
            : "Start Your Investing Journey"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
