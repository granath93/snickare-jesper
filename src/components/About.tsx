import Image from "next/image";
import Section from "./Section";
import { content } from "../content";

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
            loading="lazy"
            sizes="width: 178px, height: 238px"
          />
        </div>
        <div className="flex flex-col shrink gap-4">{content.about()}</div>
      </div>
    </Section>
  );
};

export default About;
