import React, { useState } from "react";
import Input from "../UI/Input";
import ButtonAction from "../UI/ButtonAction";
import Modal from "../UI/Modal";
import axios from "axios";
import Loading from "../UI/Loading";

interface Props {
  creditCard: number;
  result: boolean | null;
  handleReset: () => void;
}

const CommunicationButtons = ({ creditCard, result, handleReset }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [openSmsModal, setOpenSmsModal] = useState(false);
  const [openWhatsappModal, setOpenWhatsappModal] = useState(false);
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailModalOpenClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    reset();
    setOpenEmailModal(true);
  };
  const handleSmsModalOpenClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    setOpenSmsModal(true);
  };
  const handleWhatsappModalOpenClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    reset();
    setOpenWhatsappModal(true);
  };

  const reset = () => {
    setData("");
    setSuccess(false);
    setError(false);
  };

  const handleEmailSend = async () => {
    await handleSend("email", { email: data }, setOpenEmailModal);
  };
  const handleSmsSend = async () => {
    await handleSend("Sms", { number: data }, setOpenSmsModal);
  };
  const handleWhatsAppSend = async () => {
    await handleSend("Whatsapp", { number: data }, setOpenWhatsappModal);
  };

  const handleSend = async (
    type: string,
    data: object,
    setModal: (value: React.SetStateAction<boolean>) => void
  ) => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL as string}/${type}`, {
        ...data,
        text: `Credit card no ${creditCard} is ${
          result ? "Valid" : "Invalid"
        }.`,
        isValid: result,
      });
      setSuccess(true);
      setTimeout(() => {
        setModal(false);
      }, 1000);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {openEmailModal && (
        <Modal
          title="Email"
          setOpen={setOpenEmailModal}
          action={handleEmailSend}
        >
          <>
            <Input
              label="Email"
              name="email"
              id="email"
              placeholder="Enter your email"
              type="email"
              data={data}
              setData={setData}
            />
            <Loading loading={loading} />
            {success && (
              <div className="text-green-500">Send successfully!</div>
            )}
            {error && <div className="text-red-800">Error!</div>}
          </>
        </Modal>
      )}
      {openSmsModal && (
        <Modal title="SMS" setOpen={setOpenSmsModal} action={handleSmsSend}>
          <>
            <Input
              label="Sms"
              name="sms"
              id="sms"
              placeholder="Enter your mobile no with country code"
              type="text"
              data={data}
              setData={setData}
            />
            <Loading loading={loading} />
            {success && (
              <div className="text-green-500">Send successfully!</div>
            )}
            {error && <div className="text-red-800">Error!</div>}
          </>
        </Modal>
      )}
      {openWhatsappModal && (
        <Modal
          title="Whats App"
          setOpen={setOpenWhatsappModal}
          action={handleWhatsAppSend}
        >
          <>
            <Input
              label="Whatsapp"
              name="Whatsapp"
              id="Whatsapp"
              placeholder="Enter your mobile no with country code"
              type="text"
              data={data}
              setData={setData}
            />
            <Loading loading={loading} />
            {success && (
              <div className="text-green-500">Send successfully!</div>
            )}
            {error && <div className="text-red-800">Error!</div>}
          </>
        </Modal>
      )}
      <div
        className={`mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center gap-x-6 transform transition-all duration-300 ease-linear ${
          result !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        <ButtonAction title="Email" onClick={handleEmailModalOpenClick} />
        <ButtonAction title="SMS" onClick={handleSmsModalOpenClick} />
        <ButtonAction
          title="Whats APP"
          onClick={handleWhatsappModalOpenClick}
        />
        <button
          onClick={handleReset}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CommunicationButtons;
