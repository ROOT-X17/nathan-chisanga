import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity } from "framer-motion";

const Navbar = () => {
  const slideDistance = 80; // if we are sliding out a nav bar at the top of the screen, this will be it's height
  const threshold = 200; // only slide it back when scrolling back at velocity above this positive (or zero) value

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(
    () =>
      scrollVelocity.onChange((latest) => {
        if (latest > 0) {
          setIsScrollingBack(false);
          return;
        }
        if (latest < -threshold) {
          setIsScrollingBack(true);
          return;
        }
      }),
    [threshold, scrollVelocity]
  );

  useEffect(
    () => scrollY.onChange((latest) => setIsAtTop(latest <= 0)),
    [scrollY]
  );

  useEffect(
    () => setIsInView(isScrollingBack || isAtTop),
    [isScrollingBack, isAtTop]
  );

  const navVariants = {
    hidden: {
      scaleY: 0,
      transition: {
        type: "spring",
        ease: "easeOut",
        stiffness: 1,
        duration: 3,
        delay: 2,
      },
    },
    show: {
      scaleY: "100%",
      transition: {
        type: "spring",
        ease: "easeInOut",
        stiffness: 25,
        duration: 6,
        delay: 0.1,
      },
    },
  };

  const menuVariants = {
    hidden: {
      translateY: "100%",
      transition: {
        type: "tween",
        ease: "easeOut",
        delay: 4,
        stiffness: 1,
        duration: 6,
      },
    },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: "easeInOut",
        stiffness: 25,
        duration: 3,
        delay: 0.5,
      },
    },
  };
  const handleServices = () => {
    setOpen(false);
    const service = document.getElementById("services");
    setTimeout(() => {
      service.scrollIntoView({ behavior: "smooth" });
    }, 700);
  };
  const handleProjects = () => {
    setOpen(false);
    const service = document.getElementById("projects");
    setTimeout(() => {
      service.scrollIntoView({ behavior: "smooth" });
    }, 700);
  };
  const handleHome = () => {
    setOpen(false);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 700);
  };
  return (
    <motion.div
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
      style={{ height: slideDistance }}
      className="z-50 fixed top-0 w-full"
    >
      <nav className=" w-full px-4 relative md:px-12 bg-[#0F1218] text-white bg-opacity-50 backdrop-blur-sm shadow flex justify-between py-6 items-center">
        <button
          onClick={() => handleHome()}
          className="text-xl group relative font-medium md:text-2xl"
        >
          Nate
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1729 149"
              fill="#fff"
              className="absolute -bottom-2 group-hover:translate-x-0 -translate-x-[600px] transition-all transform delay-200 duration-700 group-hover:rotate-3"
            >
              <path d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z"></path>
            </svg>
          </span>
        </button>
        <div className="lg:flex hidden text-lg md:text-xl gap-12 items-center justify-center">
          <span>About</span>
          <button onClick={() => handleProjects()}>Projects</button>
          <button onClick={() => handleServices()}>Services</button>
          <span>Let&#39;s Talk</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col relative gap-3 lg:hidden"
        >
          <span
            className={`h-1 w-9 ${
              open ? "rotate-45 translate-y-2" : ""
            } rounded-full transition-all ease-in-out duration-300 delay-200 bg-white`}
          ></span>
          <span
            className={`h-1 w-9 ${
              open ? "-rotate-45 -translate-y-2" : ""
            } rounded-full transition-all ease-in-out duration-300 delay-200 bg-white`}
          ></span>
        </button>
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate={open ? "show" : ""}
          exit=""
          className="absolute inset-0 origin-bottom gap-5 z-50 text-2xl lg:hidden bg-[#0F1218] py-20 bg-opacity-95 backdrop-blur-md items-center flex flex-col top-[100%] min-h-screen font-medium text-white"
        >
          <button className=" overflow-hidden flex items-center justify-center">
            <motion.span
              variants={menuVariants}
              initial="hidden"
              animate={open ? "show" : ""}
              exit=""
            >
              About
            </motion.span>
          </button>
          <button
            onClick={() => handleProjects()}
            className=" overflow-hidden flex items-center justify-center"
          >
            <motion.span
              variants={menuVariants}
              initial="hidden"
              animate={open ? "show" : ""}
              exit=""
            >
              Projects
            </motion.span>
          </button>
          <button
            onClick={() => handleServices()}
            className=" overflow-hidden flex items-center justify-center"
          >
            <motion.span
              variants={menuVariants}
              initial="hidden"
              animate={open ? "show" : ""}
              exit=""
            >
              Services
            </motion.span>
          </button>
          <button className=" overflow-hidden flex items-center justify-center">
            <motion.span
              variants={menuVariants}
              initial="hidden"
              animate={open ? "show" : ""}
              exit=""
            >
              Let&#39;s talk
            </motion.span>
          </button>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
