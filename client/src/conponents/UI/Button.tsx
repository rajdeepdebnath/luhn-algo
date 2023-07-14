interface Props {
  title: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const Button = ({ title, clickHandler }: Props) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      {title}
    </button>
  );
};

export default Button;
