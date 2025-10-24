import Image from "next/image";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="Om mig">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="relative w-[178px] h-[238px] shrink-0">
          <Image
            src="/jesper.png"
            alt="Jesper Pettersson"
            className="object-cover"
            fill
            priority
            sizes="width: 178px, height: 238px"
          />
        </div>
        <div className="flex flex-col shrink gap-4">
          <p>
            Letar du efter en snickare som verkligen bryr sig om resultatet? Då
            har du hittat rätt. Jesper Pettersson är inte bara en skicklig
            hantverkare – han är en problemlösare med öga för detaljer och en
            passion för sitt yrke. Oavsett om du planerar en omfattande
            renovering, ett nytt altanbygge eller behöver hjälp med finsnickeri,
            så levererar Jesper alltid en bra kvalitet.
          </p>

          <p>
            Med många nöjda kunder bakom sig och ett rykte om att vara både
            trevlig och noggrann, är Jesper det trygga valet för dig som vill
            ha jobbet gjort – på rätt sätt, från start till mål.
          </p>

          <p>Utgår från Alingsås.</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
