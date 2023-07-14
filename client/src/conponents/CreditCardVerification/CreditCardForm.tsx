import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "../UI/Loading";
import Success from "../UI/Success";
import Invalid from "../UI/Invalid";
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
      const val = recaptchaRef.current?.getValue();
      if (val && val.length > 0 && creditCard) {
        const { data }: { data: boolean | null } = await axios.get(
          `${
            import.meta.env.VITE_API_URL as string
          }/validation?creditCardNo=${creditCard}`
        );

        setResult(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value: string | null) => {
    setRecaptcha(value);
    if (value === null) {
      // handleReset();
      recaptchaRef.current?.reset();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]*$/;
    const val = e.target.value;
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
      <div className="relative mt-6 text-lg leading-8 text-gray-600 flex justify-center gap-1">
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
          className="w-full md:w-4/5 flex-initial rounded-md border border-slate-400 bg-gray-100 px-3.5 py-2
             text-slate-600 shadow-sm text-sm sm:text-xs sm:leading-6"
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
