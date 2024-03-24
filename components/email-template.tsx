import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  category: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  category,
  message,
}) => (
  <div>
    <h1>client Name {name}!</h1>
    <p> client email is - {email}!</p>
    <p>client want to develop a {category}!</p>
    <p> {message}!</p>
  </div>
);

export default EmailTemplate;
