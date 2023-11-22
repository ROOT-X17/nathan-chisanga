import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import plant1 from "../assets/hero-2.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
export const AnimatedHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageValue = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      className="grid items-center w-full h-full bg-[#0F1218] text-white justify-center"
      ref={containerRef}
    >
      <div className="flex w-full relative items-center px-4 md:px-12 rounded-3xl pb-20 overflow-hidden justify-center">
        <motion.div
          className="rounded-3xl  z-10 "
          style={{ translateX: imageValue }}
        >
          <img
            src={plant1}
            alt="CODE"
            loading="lazy"
            className="rounded-3xl object-cover object-center w-full"
          />
        </motion.div>
        <div className="absolute z-0 rounded-full p-10 border border-dashed border-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f6e500"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24 animate-pulse text-yellow-300 fill-yellow-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>
      </div>
      <div className="w-full py-10 bg-[#1B1D20] relative text-xs justify-around overflow-x-hidden gap-3 px-4 md:px-12 md:text-4xl lg:text-5xl flex text-[#f6e500] font-bold">
        <div className=" animate-marquee flex gap-8 whitespace-nowrap">
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
          <span>#DISCUSS YOUR IDEAS</span>
        </div>
      </div>
    </section>
  );
};
