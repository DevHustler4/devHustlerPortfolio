"use server";
import { Resend } from "resend";
import EmailTemplate from "./components/email-template";
interface valuesprop {
  email: string;
  name: string;
  category: string;
  message: string;
}
const resend = new Resend(process.env.RESEND_API_KEY);
if (!resend) {
  console.log("resend api key is not added");
}
export const myserveraction = async ({
  email,
  name,
  category,
  message,
}: valuesprop) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "devhustler4@gmail.com",
    subject: "freelance client email",
    react: EmailTemplate({
      name,
      email,
      category,
      message,
    }) as React.ReactElement,
  });
  if (error) {
    console.error(error);
  }
  return data;
};
