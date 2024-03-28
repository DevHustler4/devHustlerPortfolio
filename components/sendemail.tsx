"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { myserveraction } from "@/serveraction";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  category: z.string({
    required_error: "Please select an email to display.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export function EmailSend() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await myserveraction(values);
    if (data) {
      toast.success("Your message Successfully sended!");
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <Toaster position="top-center" reverseOrder={true} />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 sm:w-[380px] text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
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
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What You want to develop</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What You want to develop" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Ecommerce Development">
                    Ecommerce Development
                  </SelectItem>
                  <SelectItem value="Eductional website development">
                    Eductional website development
                  </SelectItem>
                  <SelectItem value="Food delivery website">
                    Food delivery website
                  </SelectItem>
                  <SelectItem value="Blogging platform">
                    Blogging platform
                  </SelectItem>
                  <SelectItem value="Real Estate website">
                    Real Estate website
                  </SelectItem>
                  <SelectItem value="Portfolio website">
                    Portfolio website
                  </SelectItem>
                  <SelectItem value="other">other</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write Your Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#6f69cd]" type="submit">
          Send
        </Button>
      </form>
    </Form>
  );
}
