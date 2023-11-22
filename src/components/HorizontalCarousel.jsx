/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import crypto from '../assets/crypto.png'
import foodBay from '../assets/foodBay.png'
import kitchen from '../assets/kitchen.png'
import sampo from '../assets/sampo.png'
import tokpay from '../assets/tokpay.png'

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#0F1218]">
      <h1 id="projects" className=" text-white text-center font-bold lg:text-8xl text-5xl">
        PROJECTS
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a
      href={card.url}
      key={card.id}
      className="group relative h-[300px] md:h-[450px] w-[300px] md:w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-black/40 to-black/70 p-8 text-4xl md:text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    img: crypto,
    title: "CryptoBay",
    url:"https://crypto-bay-blond.vercel.app",
    id: 1,
  },
  {
    img: foodBay,
    title: "FoodBay",
    url:"https://food-bay-mu.vercel.app/",
    id: 2,
  },
  {
    img: kitchen,
    title: "TastEat",
    url:"https://food-bay-mu.vercel.app/",
    id: 3,
  },
  {
    img: sampo,
    title: "E-sampo",
    url:"https://e-sampo.vercel.app",
    id: 4,
  },
  {
    img: tokpay,
    title: "TokPay",
    url:"https://www.tokpayapp.xyz/",
    id: 5,
  },
];
