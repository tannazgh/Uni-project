import img from "../../dist/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h6 className="footer-title text-lg font-semibold">Students</h6>
            <nav className="flex flex-col gap-2">
              <a className="link link-hover hover:text-primary transition-colors">
                Academic calendar
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Student Enrolment Services
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Student opportunities
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Student services
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Study here
              </a>
            </nav>
          </div>

          <div className="space-y-2">
            <h6 className="footer-title text-lg font-semibold">
              Information for
            </h6>
            <nav className="flex flex-col gap-2">
              <a className="link link-hover hover:text-primary transition-colors">
                Alumni
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Donors
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Visitors and community
              </a>
            </nav>
          </div>

          <div className="space-y-2">
            <h6 className="footer-title text-lg font-semibold">Campus</h6>
            <nav className="flex flex-col gap-2">
              <a className="link link-hover hover:text-primary transition-colors">
                Careers at Ulethbridge
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Events
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Faculty and staff intranet
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                Maps and tours
              </a>
              <a className="link link-hover hover:text-primary transition-colors">
                News
              </a>
            </nav>
          </div>

          <div className="space-y-4 text-gray-700">
            <img
              src={img}
              alt="University Logo"
              className="w-32 h-auto filter  brightness-0 invert"
            />

            <div className="flex gap-4">
              <a className="btn btn-circle btn-ghost hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              <a className="btn btn-circle btn-ghost hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>

              <a className="btn btn-circle btn-ghost hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} University of Lethbridge. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
