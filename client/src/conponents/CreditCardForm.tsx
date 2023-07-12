import { ReactNode, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  children: ReactNode;
}

const CreditCardForm = ({ children }: Props) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(recaptchaRef.current?.getValue());
    recaptchaRef.current?.reset();
  };

  const handleChange = (value: any) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lc4jhonAAAAALZX5oEmOOKnZPbOV1a8r3XIrU2W"
        onChange={handleChange}
      />
    </form>
  );
};

export default CreditCardForm;
