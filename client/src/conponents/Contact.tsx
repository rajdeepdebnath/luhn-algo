import Button from "./Button";
import Widget1 from "./Widget1";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container border border-slate-300 mt-4 flex rounded-2xl isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="flex-1 border-0 mx-2 flex flex-col items-start">
        <div className="border-0 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl mb-3">
          Subscribe to our newsletter.
        </div>
        <div className="border-0 text-lg text-slate-600 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          iste.
        </div>
        <div className="mt-6 flex w-4/5 gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border border-slate-400 bg-white/5 px-3.5 py-2
             text-slate-600 shadow-sm ring-1 ring-inset ring-white/5 focus:ring-1 
             focus:ring-inset focus:ring-slate-100 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <Button title="Subscribe" clickHandler={(e) => console.log(e)} />
        </div>
      </div>
      <div className="flex-1 border-0 mx-2 flex">
        <div className="flex-1 border-0 mx-1">
          <Widget1
            title="Weekly articles"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, iure maxime natus aut maiores."
          >
            <svg
              className="h-6 w-6 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              ></path>
            </svg>
          </Widget1>
        </div>
        <div className="flex-1 border-0 mx-1">
          <Widget1
            title="No spam"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, 
            esse doloribus atque in inventore aut?"
          >
            <svg
              className="h-6 w-6 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
              ></path>
            </svg>
          </Widget1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
