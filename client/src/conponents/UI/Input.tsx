import React from "react";

interface Props {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  type: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ label, name, id, placeholder, type, data, setData }: Props) {
  return (
    <div className="mt-6 flex w-96 gap-x-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        id={id}
        name={name}
        type={type}
        required
        className="min-w-0 flex-auto rounded-md border border-slate-400 bg-white/5 px-3.5 py-2
             text-slate-600 shadow-sm ring-1 ring-inset ring-white/5 focus:ring-1 
             focus:ring-inset focus:ring-slate-100 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
