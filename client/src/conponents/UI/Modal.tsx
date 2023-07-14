import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  title: string;
  children: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  action: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const Modal = ({ setOpen, action, title, children }: Props) => {
  return (
    <div
      className="absolute z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <div className="flex min-h-full items-center sm:items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:ml-4 sm:mt-0 text-left">
                  <h3
                    className="text-2xl font-semibold leading-6 text-gray-900 sm:text-base"
                    id="modal-title"
                  >
                    {title}
                  </h3>

                  {children}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6 gap-2">
              <Button title={`Send ${title}`} clickHandler={action} />
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-0 w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
