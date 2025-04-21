import Info from "./Info";

const mail = "jesperpettersson88@gmail.com";
const tel = "0702309970";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-center mb-8">
      <span className="inline-flex gap-2">
        <p>Jesper Pettersson</p> | <p>Alingsås</p>
      </span>
      <Info variant="tel" />
      <Info variant="mail" />
    </footer>
  );
};

export default Footer;
