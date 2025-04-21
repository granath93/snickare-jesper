"use client";

import Button from "./Button";

const Form = () => {
  const sendData = () => {console.log('send data')};

  return (
    <>
      <form className="flex flex-col gap-4">
        <Wrapper>
          <label htmlFor="name" className="w-fit">
            Ditt namn
          </label>
          <input id="name" />
        </Wrapper>
        <Wrapper>
          <label className="w-fit" htmlFor="email">
            Din email adress eller telefonnummer
          </label>
          <input id="email" />
        </Wrapper>
        <Wrapper>
          <label htmlFor="what" className="w-fit">
            Vad vill du ha hjälp med?
          </label>
          <textarea id="what" className="h-80" />
        </Wrapper>
      </form>
      <Button label="Skicka" click={sendData} />
    </>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="flex flex-col gap-2">{children}</span>
);

export default Form;
