import header from "../assets/header.png";
const Header = () => {
  return (
    <div className="items-center min-h-screen justify-center py-36 bg-[#0F1218] px-4 md:px-12 text-white relative w-full md:gap-4 grid">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-3 w-full items-center justify-center">

      {/* Name Left*/}
        <div className="flex w-full text-gray-300 flex-col col-span-2">
          <h1 className="md:text-9xl text-5xl font-bold">
            NATHAN <span className="text-[#f6e500]">#</span>
          </h1>
          <h1 className="md:text-9xl text-5xl font-bold">CHISANGA</h1>
        </div>


        <div className="flex w-full group pt-4 md:pt-0 gap-4 flex-col col-span-1">

        {/* Right side info */}
          <div className="relative p-2 group-hover:scale-105 transition-all transform overflow-hidden flex w-full rounded-full h-20 md:h-24 bg-slate-800">
            <img
              src={header}
              alt="header"
              loading="lazy"
              className=" w-full h-full object-cover object-center rounded-full"
            />
            <div className="absolute inset-0 font-bold group-hover:translate-x-0 delay-300 duration-500 transition-all ease-in-out translate-x-full bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-[#f6e500]"># </span>ONE MAN CREATIVE AGENCY
              😂
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-3 justify-start pt-2 md:justify-center text-black fill-[#f6e500]">
            <svg
              className="h-4 md:h-8 group-hover:rotate-[80deg] transition-all duration-700 delay-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 350"
            >
              <path d="M327.7 116.4c-1.4-4.5-6.3-6.5-10.7-6.1-2.5.3-3.8.6-11 1.1-21.5 1.2-41.4-.9-88.4 1.1-13.9-40.1-22.7-82.1-33.2-89.3-6.5-4.4-14.4-3-18.8 5.7-2.6 5-7.5 16.2-9.7 21.3-8.7 20.1-17.2 44.1-24.1 64.8-78.3-.5-99.5-4.2-106.1.8-3.9 2.9-4.7 6.8-3.1 10.2 1.1 2.4 1.9 2.4 13.3 14.1 29.4 30.4 40.6 44.5 66.9 64.9-11.2 34-25.1 69.8-22.8 63.6-3.4 8.7-6.9 17.3-10.4 25.9-5.1 12.5-8 18.8-10.1 24.9-1.6 4.5 2.5 9.6 8.1 9.6 3.6 0 5.9-2.2 8.9-4.2s5.4-4.2 8-6c17.3-12.1 33.8-25.6 51.1-37.8 14-9.9 28-19.9 41.8-30.1 38.9 21.6 36.8 20.1 54 29.6 37.7 20.7 45.5 27.8 53.7 25.7 3.9-1 7-3.9 7.6-7.9.4-3-.6-6.2-1.8-10.7-12.1-44.7-20.7-61.8-38.1-94.8 14.8-11.9 58.3-47.8 69.8-62.8 2.9-3.8 6.7-8.4 5.1-13.6zm-43.5 28c-9.1 8.2-31.7 30.2-48.7 41.6-3 2-4 4.6-2 9 10 21.6 20.1 27 38.3 89.7-53.3-30.5-41-22.5-75.3-41.8-7-3.9-18-12.9-24-9.9-5.3 2.7-41.3 31.1-56.6 41.8l-28.2 19.7c7.9-19.1 13-32 24-62.6 1.7-4.8 10.8-26.9 9.8-31.9-.5-2.5-1.3-5-9-10-21.5-14-37-33.2-63.6-60.6 19 .2 37.6 1.6 85.6 1.6 6 0 11 0 13-2 4.9-4.9 3.8-18.8 16.4-51.9 4.1-10.4 7.4-18.7 13.6-32.4 4.1 10.3 13.6 42.1 16.9 52.7 1.7 5.4 6.1 27.6 8.1 29.6s4.8 2.5 10 2 32.7-1.2 43.7-1.3c14.5-.1 33.7.5 45.7 0-5.7 5.7-11.7 11.3-17.7 16.7z"></path>
            </svg>
            <svg
              className="h-4 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 350"
            >
              <path d="M327.7 116.4c-1.4-4.5-6.3-6.5-10.7-6.1-2.5.3-3.8.6-11 1.1-21.5 1.2-41.4-.9-88.4 1.1-13.9-40.1-22.7-82.1-33.2-89.3-6.5-4.4-14.4-3-18.8 5.7-2.6 5-7.5 16.2-9.7 21.3-8.7 20.1-17.2 44.1-24.1 64.8-78.3-.5-99.5-4.2-106.1.8-3.9 2.9-4.7 6.8-3.1 10.2 1.1 2.4 1.9 2.4 13.3 14.1 29.4 30.4 40.6 44.5 66.9 64.9-11.2 34-25.1 69.8-22.8 63.6-3.4 8.7-6.9 17.3-10.4 25.9-5.1 12.5-8 18.8-10.1 24.9-1.6 4.5 2.5 9.6 8.1 9.6 3.6 0 5.9-2.2 8.9-4.2s5.4-4.2 8-6c17.3-12.1 33.8-25.6 51.1-37.8 14-9.9 28-19.9 41.8-30.1 38.9 21.6 36.8 20.1 54 29.6 37.7 20.7 45.5 27.8 53.7 25.7 3.9-1 7-3.9 7.6-7.9.4-3-.6-6.2-1.8-10.7-12.1-44.7-20.7-61.8-38.1-94.8 14.8-11.9 58.3-47.8 69.8-62.8 2.9-3.8 6.7-8.4 5.1-13.6zm-43.5 28c-9.1 8.2-31.7 30.2-48.7 41.6-3 2-4 4.6-2 9 10 21.6 20.1 27 38.3 89.7-53.3-30.5-41-22.5-75.3-41.8-7-3.9-18-12.9-24-9.9-5.3 2.7-41.3 31.1-56.6 41.8l-28.2 19.7c7.9-19.1 13-32 24-62.6 1.7-4.8 10.8-26.9 9.8-31.9-.5-2.5-1.3-5-9-10-21.5-14-37-33.2-63.6-60.6 19 .2 37.6 1.6 85.6 1.6 6 0 11 0 13-2 4.9-4.9 3.8-18.8 16.4-51.9 4.1-10.4 7.4-18.7 13.6-32.4 4.1 10.3 13.6 42.1 16.9 52.7 1.7 5.4 6.1 27.6 8.1 29.6s4.8 2.5 10 2 32.7-1.2 43.7-1.3c14.5-.1 33.7.5 45.7 0-5.7 5.7-11.7 11.3-17.7 16.7z"></path>
            </svg>
            <svg
              className="h-4 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 350"
            >
              <path d="M327.7 116.4c-1.4-4.5-6.3-6.5-10.7-6.1-2.5.3-3.8.6-11 1.1-21.5 1.2-41.4-.9-88.4 1.1-13.9-40.1-22.7-82.1-33.2-89.3-6.5-4.4-14.4-3-18.8 5.7-2.6 5-7.5 16.2-9.7 21.3-8.7 20.1-17.2 44.1-24.1 64.8-78.3-.5-99.5-4.2-106.1.8-3.9 2.9-4.7 6.8-3.1 10.2 1.1 2.4 1.9 2.4 13.3 14.1 29.4 30.4 40.6 44.5 66.9 64.9-11.2 34-25.1 69.8-22.8 63.6-3.4 8.7-6.9 17.3-10.4 25.9-5.1 12.5-8 18.8-10.1 24.9-1.6 4.5 2.5 9.6 8.1 9.6 3.6 0 5.9-2.2 8.9-4.2s5.4-4.2 8-6c17.3-12.1 33.8-25.6 51.1-37.8 14-9.9 28-19.9 41.8-30.1 38.9 21.6 36.8 20.1 54 29.6 37.7 20.7 45.5 27.8 53.7 25.7 3.9-1 7-3.9 7.6-7.9.4-3-.6-6.2-1.8-10.7-12.1-44.7-20.7-61.8-38.1-94.8 14.8-11.9 58.3-47.8 69.8-62.8 2.9-3.8 6.7-8.4 5.1-13.6zm-43.5 28c-9.1 8.2-31.7 30.2-48.7 41.6-3 2-4 4.6-2 9 10 21.6 20.1 27 38.3 89.7-53.3-30.5-41-22.5-75.3-41.8-7-3.9-18-12.9-24-9.9-5.3 2.7-41.3 31.1-56.6 41.8l-28.2 19.7c7.9-19.1 13-32 24-62.6 1.7-4.8 10.8-26.9 9.8-31.9-.5-2.5-1.3-5-9-10-21.5-14-37-33.2-63.6-60.6 19 .2 37.6 1.6 85.6 1.6 6 0 11 0 13-2 4.9-4.9 3.8-18.8 16.4-51.9 4.1-10.4 7.4-18.7 13.6-32.4 4.1 10.3 13.6 42.1 16.9 52.7 1.7 5.4 6.1 27.6 8.1 29.6s4.8 2.5 10 2 32.7-1.2 43.7-1.3c14.5-.1 33.7.5 45.7 0-5.7 5.7-11.7 11.3-17.7 16.7z"></path>
            </svg>
            <svg
              className="h-4 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 350"
            >
              <path d="M327.7 116.4c-1.4-4.5-6.3-6.5-10.7-6.1-2.5.3-3.8.6-11 1.1-21.5 1.2-41.4-.9-88.4 1.1-13.9-40.1-22.7-82.1-33.2-89.3-6.5-4.4-14.4-3-18.8 5.7-2.6 5-7.5 16.2-9.7 21.3-8.7 20.1-17.2 44.1-24.1 64.8-78.3-.5-99.5-4.2-106.1.8-3.9 2.9-4.7 6.8-3.1 10.2 1.1 2.4 1.9 2.4 13.3 14.1 29.4 30.4 40.6 44.5 66.9 64.9-11.2 34-25.1 69.8-22.8 63.6-3.4 8.7-6.9 17.3-10.4 25.9-5.1 12.5-8 18.8-10.1 24.9-1.6 4.5 2.5 9.6 8.1 9.6 3.6 0 5.9-2.2 8.9-4.2s5.4-4.2 8-6c17.3-12.1 33.8-25.6 51.1-37.8 14-9.9 28-19.9 41.8-30.1 38.9 21.6 36.8 20.1 54 29.6 37.7 20.7 45.5 27.8 53.7 25.7 3.9-1 7-3.9 7.6-7.9.4-3-.6-6.2-1.8-10.7-12.1-44.7-20.7-61.8-38.1-94.8 14.8-11.9 58.3-47.8 69.8-62.8 2.9-3.8 6.7-8.4 5.1-13.6zm-43.5 28c-9.1 8.2-31.7 30.2-48.7 41.6-3 2-4 4.6-2 9 10 21.6 20.1 27 38.3 89.7-53.3-30.5-41-22.5-75.3-41.8-7-3.9-18-12.9-24-9.9-5.3 2.7-41.3 31.1-56.6 41.8l-28.2 19.7c7.9-19.1 13-32 24-62.6 1.7-4.8 10.8-26.9 9.8-31.9-.5-2.5-1.3-5-9-10-21.5-14-37-33.2-63.6-60.6 19 .2 37.6 1.6 85.6 1.6 6 0 11 0 13-2 4.9-4.9 3.8-18.8 16.4-51.9 4.1-10.4 7.4-18.7 13.6-32.4 4.1 10.3 13.6 42.1 16.9 52.7 1.7 5.4 6.1 27.6 8.1 29.6s4.8 2.5 10 2 32.7-1.2 43.7-1.3c14.5-.1 33.7.5 45.7 0-5.7 5.7-11.7 11.3-17.7 16.7z"></path>
            </svg>
            <svg
              className="h-4 md:h-8 group-hover:animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 350"
            >
              <path d="M327.7 116.4c-1.4-4.5-6.3-6.5-10.7-6.1-2.5.3-3.8.6-11 1.1-21.5 1.2-41.4-.9-88.4 1.1-13.9-40.1-22.7-82.1-33.2-89.3-6.5-4.4-14.4-3-18.8 5.7-2.6 5-7.5 16.2-9.7 21.3-8.7 20.1-17.2 44.1-24.1 64.8-78.3-.5-99.5-4.2-106.1.8-3.9 2.9-4.7 6.8-3.1 10.2 1.1 2.4 1.9 2.4 13.3 14.1 29.4 30.4 40.6 44.5 66.9 64.9-11.2 34-25.1 69.8-22.8 63.6-3.4 8.7-6.9 17.3-10.4 25.9-5.1 12.5-8 18.8-10.1 24.9-1.6 4.5 2.5 9.6 8.1 9.6 3.6 0 5.9-2.2 8.9-4.2s5.4-4.2 8-6c17.3-12.1 33.8-25.6 51.1-37.8 14-9.9 28-19.9 41.8-30.1 38.9 21.6 36.8 20.1 54 29.6 37.7 20.7 45.5 27.8 53.7 25.7 3.9-1 7-3.9 7.6-7.9.4-3-.6-6.2-1.8-10.7-12.1-44.7-20.7-61.8-38.1-94.8 14.8-11.9 58.3-47.8 69.8-62.8 2.9-3.8 6.7-8.4 5.1-13.6zm-43.5 28c-9.1 8.2-31.7 30.2-48.7 41.6-3 2-4 4.6-2 9 10 21.6 20.1 27 38.3 89.7-53.3-30.5-41-22.5-75.3-41.8-7-3.9-18-12.9-24-9.9-5.3 2.7-41.3 31.1-56.6 41.8l-28.2 19.7c7.9-19.1 13-32 24-62.6 1.7-4.8 10.8-26.9 9.8-31.9-.5-2.5-1.3-5-9-10-21.5-14-37-33.2-63.6-60.6 19 .2 37.6 1.6 85.6 1.6 6 0 11 0 13-2 4.9-4.9 3.8-18.8 16.4-51.9 4.1-10.4 7.4-18.7 13.6-32.4 4.1 10.3 13.6 42.1 16.9 52.7 1.7 5.4 6.1 27.6 8.1 29.6s4.8 2.5 10 2 32.7-1.2 43.7-1.3c14.5-.1 33.7.5 45.7 0-5.7 5.7-11.7 11.3-17.7 16.7z"></path>
            </svg>
          </div>

          {/* description */}
          <p className="md:text-lg text-base text-gray-300">
            The art of technological communication creatively impacting the
            world around us-one good design at a time, design like you mean it !
          </p>
        </div>
      </div>


      <div className=" w-full gap-1 text-[#f6e500] md:gap-3 flex items-center">
        <div className=" font-medium rounded-full md:text-base text-sm py-2 px-3 md:px-4 border-2 border-[#f6e500] border-opacity-20">
          #Creative
        </div>
        <div className=" font-medium rounded-full md:text-base text-sm py-2 px-3 md:px-4 border-2 border-[#f6e500] border-opacity-20">
          #Cyber Security
        </div>
        <div className="h-1 rounded-full flex-1 bg-[#f6e500] bg-opacity-25"></div>
        <div className="flex gap-1 md:gap-2 items-center">
          <div className="md:h-4 h-3 md:w-4 w-3 rounded-full bg-[#f6e500] bg-opacity-20"></div>
          <div className="md:h-4 h-3 md:w-4 w-3 rounded-full bg-[#f6e500] bg-opacity-30"></div>
          <div className="md:h-4 h-3 md:w-4 w-3 rounded-full bg-[#f6e500] bg-opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;