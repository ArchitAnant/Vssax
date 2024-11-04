import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NeoBoard({ data }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const horizontalFadeIn = {
    initial: { opacity: 0, x: -50 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const verticalFadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div ref={ref} className="flex flex-row items-center justify-start w-full bg-black">
      <motion.div {...horizontalFadeIn} className="flex flex-col">
        <div className="relative ms-10 pt-10 bg-transparent">
          <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-10 bg-transparent">
            What's
          </h1>
          <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-10 opacity-20 absolute top-0 left-0 translate-y-[52px] translate-x-[-8px] bg-clip-text">
            What's
          </h1>
        </div>
        <div className="relative ms-10 bg-transparent pb-20">
          <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-5 bg-transparent">
            Flying By?
          </h1>
          <h1 className="text-white text-8xl font-semibold text-left ms-10 opacity-20 absolute top-0 left-0 translate-y-[32px] translate-x-[-8px] bg-clip-text">
            Flying By?
          </h1>
          <h1 className="text-white text-2xl text-left ms-10 mt-10 opacity-50 top-0 left-0 bg-clip-text">
            Near Earth Objects
          </h1>
        </div>
      </motion.div>

      <motion.div {...verticalFadeIn} className="flex flex-col ms-10 mt-40 space-y-10 flex-grow">
        <div className="flex-grow flex justify-center space-x-10">
          <NeoCard data={data[0]} />
          <NeoCard data={data[1]} />
        </div>
        <div className="flex-grow flex justify-center space-x-10">
          <NeoCard data={data[2]} />
          <NeoCard data={data[3]} />
        </div>
      </motion.div>
    </div>
  );
}

export function NeoCard({ data }) {
  return (
    <div className="bg-white bg-opacity-10 min-w-[500px]">
      <div className="flex flex-row bg-transparent justify-center items-center h-[285px]">
        <div className="flex flex-col flex-grow bg-transparent -rotate-90 origin-center translate-x-0">
          <h2 className="text-white text-4xl bg-clip-text">{data.name}</h2>
          <h2 className="text-white text-sm bg-clip-text opacity-70 mt-2">
            Object Name
          </h2>
        </div>
        <InnerNeoCard data={data} />
      </div>
    </div>
  );
}

function InnerNeoCard({ data }) {
  return (
    <div className="max-w-sm bg-white bg-opacity-10 px-10 py-8">
      <div className="flex flex-col bg-transparent">
        <h2 className="text-white text-xl bg-clip-text">{data.diameter}</h2>
        <p className="text-white text-base mb-4 bg-clip-text opacity-70">
          Diameter
        </p>
        <h2 className="text-white text-xl bg-clip-text">
          {data.closest_approach}
        </h2>
        <p className="text-white text-base mb-4 bg-clip-text opacity-70">
          Closest Approach
        </p>
        <div className="flex flex-row justify-between bg-transparent">
          <div className="flex flex-col bg-transparent">
            <h2 className="text-white text-xl bg-clip-text">{data.velocity}</h2>
            <p className="text-white text-base mb-4 bg-clip-text opacity-70">
              At Velocity
            </p>
          </div>
          <div className="flex flex-col bg-transparent">
            <h2 className="text-white text-xl bg-clip-text">{data.distance}</h2>
            <p className="text-white text-base mb-4 bg-clip-text opacity-70">
              At Distance
            </p>
          </div>
        </div>
        <h1 className="text-white text-sm bg-clip-text opacity-70">
          {data.isThreat ? "Can pose a threat to Earth!" : "Will pass at a safe distance from Earth!"}
        </h1>
      </div>
    </div>
  );
}

export default NeoBoard;