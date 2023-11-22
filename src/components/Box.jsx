import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Box() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97 ]);

  return (
    <motion.div
      ref={ref}
      className=" text-white md:text-left text-center w-full flex flex-col"
      style={{ scale }}
    >
      <h1 className="lg:text-8xl text-gray-300 text-5xl font-bold">SERVICES</h1>
      <p className="md:text-lg text-base text-gray-300 my-2">
        Every one of us loves something different. So explore the world through
        the lens of my visual capabilities
      </p>
    </motion.div>
  );
}
