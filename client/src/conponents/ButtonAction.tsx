interface Props {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonAction = ({ onClick, title }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      {title}
    </button>
  );
};

export default ButtonAction;
