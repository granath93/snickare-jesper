import Form from "./Form";
import Info from "./Info";
import Section from "./Section";

const Contact = () => {
  const showForm = process.env.NEXT_PUBLIC_SHOW_FORM;

  const text = !showForm ? 'Antingen kan du ringa direkt, skicka ett SMS eller skicka ett mail så kontaktar Jesper dig.'
    : 'Antingen kan du ringa direkt, skicka ett SMS eller fylla i formuläret nedanför så kontaktar Jesper dig.';

  return (
    <Section id="contact" title="Kontakt" >
      <p>
        {text}
      </p>
      <div className="inline-flex gap-4 md:gap-6 flex-wrap">
        <Info variant="tel" />
        <Info variant="mail" />
      </div>
      {showForm && <Form />}
    </Section>
  );
};

export default Contact;
