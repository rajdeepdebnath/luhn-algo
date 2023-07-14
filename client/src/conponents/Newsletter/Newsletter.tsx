import NewsletterForm from "./NewsletterForm";
import Widgets from "./Widgets";

const Contact = () => {
  return (
    <div
      id="newsletter"
      className="container mx-auto border border-slate-300 mt-4 flex gap-10 md:gap-1
      rounded-2xl isolate bg-white px-6 py-24 sm:py-16 lg:px-8 flex-col md:flex-row"
    >
      <NewsletterForm />
      <Widgets />
    </div>
  );
};

export default Contact;
