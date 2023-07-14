import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "./Loading";
import Success from "./Success";
import Invalid from "./Invalid";
import axios from "axios";
import CommunicationButtons from "./CommunicationButtons";

const CreditCardForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<boolean | null>(null);
  const [creditCard, setCreditCard] = useState<number | null>(null);
  const [recaptcha, setRecaptcha] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      let val = recaptchaRef.current?.getValue();
      if (val && val.length > 0 && creditCard) {
        let { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/validation?creditCardNo=${creditCard}`
        );

        setResult(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value: any) => {
    setRecaptcha(value);
    if (value === null) {
      handleReset();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let pattern = /^[0-9]*$/;
    let val = e.target.value;
    if (val.length > 0 && pattern.test(val)) {
      setCreditCard(Number(val));
    } else if (val.length === 0) {
      setCreditCard(null);
    }
  };

  const buttonDisabled = () => {
    // return creditCard === null || isNaN(creditCard) || recaptcha === null;
    return creditCard !== null && recaptcha === null;
  };
  const buttonDisabledClass = () => {
    return buttonDisabled()
      ? "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      : "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  };

  const handleReset = () => {
    setCreditCard(null);
    setResult(null);
    recaptchaRef.current?.reset();
    setCreditCard(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-6 text-lg leading-8 text-gray-600 flex items-center gap-1">
        <label htmlFor="credit-card" className="sr-only">
          Credit card
        </label>
        <input
          value={creditCard ?? ""}
          onChange={handleTextChange}
          id="credit-card"
          name="creditcard"
          type="text"
          required
          className="w-4/5 flex-auto rounded-md border border-slate-400 bg-gray-100 px-3.5 py-2
             text-slate-600 shadow-sm sm:text-sm sm:leading-6"
          placeholder="Enter Credit card number"
        />
        <Loading loading={loading} />
        <Success success={result === true} />
        <Invalid error={result === false} />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          disabled={buttonDisabled()}
          type="submit"
          className={buttonDisabledClass()}
        >
          Validate now <span aria-hidden="true">→</span>
        </button>
      </div>
      <div
        className={`transform transition-all duration-150 ease-linear ${
          creditCard ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mt-5 flex items-center justify-center gap-x-6">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lc4jhonAAAAALZX5oEmOOKnZPbOV1a8r3XIrU2W"
            onChange={handleChange}
            aria-required
          />
        </div>
      </div>
      {creditCard && (
        <CommunicationButtons
          creditCard={creditCard}
          result={result}
          handleReset={handleReset}
        />
      )}
    </form>
  );
};

export default CreditCardForm;
