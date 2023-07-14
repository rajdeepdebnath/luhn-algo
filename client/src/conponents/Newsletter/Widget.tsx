import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const Widget = ({ children, title, description }: Props) => {
  return (
    <div className="flex-1 border-0 mx-1">
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-slate-200 p-2">{children}</div>
        <dt className="mt-4 font-semibold text-slate-500">{title}</dt>
        <dd className="mt-2 leading-7 text-gray-400 text-left">
          {description}
        </dd>
      </div>
    </div>
  );
};

export default Widget;
