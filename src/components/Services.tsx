import Section from "./Section";
import { content } from "../content";

const Services = () => {
  return (
    <Section id="services" title="Tjänster">
      <div className="flex flex-col gap-4">
        {content.services()}
      </div>
    </Section>
  );
};

export default Services;
