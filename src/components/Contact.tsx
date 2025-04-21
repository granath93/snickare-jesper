import Form from "./Form";
import Info from "./Info";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact" title="Kontakt">
      <p className="w-full md:w-3xl max-w-full">
        Antingen kan du ringa direkt, skicka ett SMS eller fylla i formuläret
        nedanför så kontaktar jag dig.
      </p>
      <div className="inline-flex gap-4 md:gap-6 flex-wrap">
        <Info  variant="tel"/>
        <Info  variant="mail"/>
      </div>
      <Form />
    </Section>
  );
};

export default Contact;
