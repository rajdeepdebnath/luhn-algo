interface Props {
  error: boolean;
}

const Invalid = ({ error }: Props) => {
  return (
    <div
      role="status"
      className={`absolute right-0 top-1/3 transform transition-all duration-300 ease-linear ${
        error ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="w-6 h-6 text-red-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
      <span className="sr-only">Credit card invalid</span>
    </div>
  );
};

export default Invalid;
