import Image from "next/image";

const mail = "xxxxxxxxxxxxxxx@gmail.com";
const tel = "xxxxxxxxxx";

const variants = {
  tel: {
    href: `tel:${tel}`,
    imgSrc: "/phone.svg",
    alt: "mail icon",
    text: tel,
  },
  mail: {
    href: `mailto:${mail}`,
    imgSrc: "/mail.svg",
    alt: "phone icon",
    text: mail,
  },
};

const Info: React.FC<{ variant: "mail" | "tel" }> = ({ variant }) => (
  <a href={variants[variant].href} className="inline-flex items-center gap-1.5">
    <Image
      src={variants[variant].imgSrc}
      alt={variants[variant].alt}
      width={38}
      height={38}
      priority
    />
    {variants[variant].text}
  </a>
);

export default Info;
