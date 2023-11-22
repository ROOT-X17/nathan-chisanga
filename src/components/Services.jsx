import { Box } from "./Box";
import header from '../assets/hero.jpg'

const Services = () => {
  return (
    <div id="services" className="min-h-screen py-24 gap-5 bg-[#0F1218] text-white w-full items-center justify-center grid px-4 md:px-12">
      <div className=" items-center grid md:grid-cols-2 grid-cols-1 h-full justify-center w-full">
        <Box />
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 items-start rounded-full p-2 border-2 border-slate-700 text-slate-300 w-full">
            {/* Globe icon */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
              <span>Design</span>
            </div>
            <div className="flex gap-2 items-start rounded-full p-2 border-2 border-slate-700 text-slate-300 w-full">
            {/* Globe icon */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
              <span>PenTesting</span>
            </div>
            <div className="flex gap-2 items-start rounded-full p-2 border-2 border-slate-700 text-slate-300 w-full">
            {/* Globe icon */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
              <span>Testing</span>
            </div>
            <div className="flex gap-2 items-start rounded-full p-2 border-2 border-slate-700 text-slate-300 w-full">
            {/* Globe icon */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
              <span>Deployment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-2xl md:text-6xl justify-center w-full">
        <div className="py-16 flex relative group overflow-hidden w-full items-center justify-between border-t-2 border-t-gray-800">
          UI/UX Design{" "}
          {/* Arrow icon */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:h-12 h-8 group-hover:rotate-45 transition-all transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <img src={header} alt="ui/ux" loading="lazy" className="md:h-56 h-24 absolute hover:scale-90 group-hover:translate-y-0 delay-200 duration-300 -translate-y-[600px] transition-all transform right-10 w-24 md:w-56 md:right-24" />
        </div>
        <div className="py-16 flex w-full relative group items-center justify-between border-t-2 border-t-gray-800">
          Web Design{" "}
          {/* Arrow icon */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:h-12 h-8 group-hover:rotate-45 transition-all transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <img src={header} alt="ui/ux" loading="lazy" className="md:h-56 h-24 absolute hover:scale-90 group-hover:translate-y-0 delay-200 duration-300 -translate-y-[600px] transition-all transform right-10 w-24 md:w-56 md:right-24" />
        </div>
        <div className="py-16 flex w-full relative group items-center justify-between border-t-2 border-t-gray-800">
          Web Development{" "}
          {/* Arrow icon */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:h-12 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <img src={header} alt="ui/ux" loading="lazy" className="md:h-56 h-24 absolute hover:scale-90 group-hover:translate-y-0 delay-200 duration-300 -translate-y-[600px] transition-all transform right-10 w-24 md:w-56 md:right-24" />
        </div>
        <div className="py-16 flex w-full relative group items-center justify-between border-t-2 border-t-gray-800">
          App Development{" "}
          {/* Arrow icon */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:h-12 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <img src={header} alt="ui/ux" loading="lazy" className="md:h-56 h-24 absolute hover:scale-90 group-hover:translate-y-0 delay-200 duration-300 -translate-y-[600px] transition-all transform right-10 w-24 md:w-56 md:right-24" />
        </div>
      </div>
    </div>
  );
};

export default Services;
