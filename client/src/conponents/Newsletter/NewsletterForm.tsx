import Button from "../UI/Button";

const NewsletterForm = () => {
  return (
    <div className="flex-1 border-1 mx-2 flex flex-col items-start">
      <div className="border-1 text-2xl font-bold tracking-tight text-slate-700 sm:text-3xl mb-3">
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
        <Button title="Subscribe" clickHandler={async () => console.log("")} />
      </div>
    </div>
  );
};

export default NewsletterForm;
