interface Props {
  success: boolean;
}

const Success = ({ success }: Props) => {
  return (
    <div
      role="status"
      className={`absolute right-0 top-1/3 transform transition-all duration-300 ease-linear ${
        success ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="w-6 h-6 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      <span className="sr-only">Credit card valid</span>
    </div>
  );
};

export default Success;
