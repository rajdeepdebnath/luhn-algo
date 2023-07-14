export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Rajdeep - Credit card verification</span>
            <img className="h-8 w-auto" src="email2.png" alt="" />
          </a>
        </div>
        <div className="flex gap-x-4 lg:gap-x-12 sm:gap-x-6">
          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Features
          </a>
          <a
            href="#Pricing"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#aboutus"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </a>
          <a
            href="#newsletter"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Newsletter
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
