import Info from "./Info";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center mb-3 md:gap-5 gap-7">
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-center">
        <span className="inline-flex gap-2">
          <p>Jesper Pettersson</p> | <p>Alingsås</p>
        </span>
        <Info variant="tel" />
        <Info variant="mail" />
      </div>
      <small> © {year} Designad & skapad av Amanda Granath </small>
    </footer>
  );
};

export default Footer;
