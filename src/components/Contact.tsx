import { content } from "@/content";
import Form from "./Form";
import Info from "./Info";
import Section from "./Section";

const Contact = () => {
  const showForm = process.env.NEXT_PUBLIC_SHOW_FORM;

  return (
    <Section id="contact" title="Kontakt">
      <p>{content.contact}</p>
      <div className="inline-flex gap-4 md:gap-6 flex-wrap">
        <Info variant="tel" />
        <Info variant="mail" />
      </div>
      {showForm && <Form />}
    </Section>
  );
};

export default Contact;
