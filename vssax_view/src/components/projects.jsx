import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState,useRef, useEffect, } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectBase({ data }) {
  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [behindCurrentIndex, behindSetCurrentIndex] = useState(1);
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

  const onLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    behindSetCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const onRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    behindSetCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };
  const horizontalFadeIn = {
    initial: { opacity: 0, x: 50 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const verticalFadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <>
      <div className="flex flex-row items-center justify-end bg-black pe-[70px]">
        <div
          className="flex flex-col"
        >
          <div className="relative ms-10 mt-10 pt-10 bg-transparent">
            <h1 className="text-white text-8xl font-semibold text-right ms-10 pt-10 bg-transparent">
              Undergoing
            </h1>
            <h1 className="text-white text-8xl font-semibold text-right ms-10 pt-10 opacity-20 absolute top-0 left-0 translate-y-[52px] translate-x-[-8px] bg-clip-text">
              Undergoing
            </h1>
          </div>
          <div className="relative ms-10 bg-transparent pb-20">
            <h1 className="text-white text-8xl font-semibold text-right ms-10 pt-5 bg-transparent">
              Projects!
            </h1>
            <h1 className="text-white text-8xl font-semibold text-right ms-10 opacity-20 absolute top-0 left-0 translate-y-[32px] translate-x-[100px] bg-clip-text">
              Projects!
            </h1>
            <h1 className="text-white text-2xl text-right ms-10 mt-10 opacity-50 top-0 left-0 bg-clip-text">
              Some Recent NASA Projects
            </h1>
          </div>
        </div>
      </div>
      <DetailedInfo data={data[currentIndex]} onRightClick={onRightClick} />
      <SmallInfo data={data[behindCurrentIndex]} onLeftClick={onLeftClick} />
      <motion.div {...verticalFadeIn} ref={ref}>
      <DisplayLink />
      </motion.div>
    </>
  );
}


const fadeSlideAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

function DetailedInfo({data,onRightClick}){
  return(
    <AnimatePresence mode="wait">
      <motion.div key={data.acrn} {...fadeSlideAnimation} className="flex flex-row items-center bg-tranparent justify-start">
      <h1 className="text-white text-8xl bg-transparent opacity-70 -rotate-90 origin-center">{data.acrn}</h1>
      <div className="bg-white bg-opacity-10 flex justify-start items-start flex-col ps-[50px] pt-[50px] pb-[20px] pe-[30px]">
        <div className="flex flex-row bg-transparent justify-center items-center">
          <h1 className="text-white bg-transparent text-2xl w-[200px] opacity-70">{data.name}</h1>
          <div className="flex flex-col bg-transparent justify-right items-right ps-20">
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Destination: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.dests}</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">States:</h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.states}</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Lead Organization: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.lead_org}</h1>
            </div>
          </div>
        </div>
          <h1 className="text-white bg-transparent text-sm  w-[35vw] mt-10 opacity-70 pe-[50px] pb-10">{data.desc}</h1>
          <div className="flex flex-row bg-transparent justify-right items-right">
            <h1 className="text-white bg-transparent text-sm opacity-50 pe-10">2021-2029</h1>
            <h1 className="text-white bg-transparent text-sm opacity-70 pe-1">Project ID :</h1>
            <h1 className="text-white bg-transparent text-sm opacity-50">{data.proj_id}</h1>
          </div>  
      </div>
      <button className="p-10" onClick={() => onRightClick()}>
      <FaChevronRight className="bg-transparent text-white text-4xl hover:opacity-30"/>
      </button>
      </motion.div>
      </AnimatePresence>
  )
}

function SmallInfo({data,onLeftClick}){
  return(
    <AnimatePresence mode="wait">
      <motion.div key={data.acrn} {...fadeSlideAnimation} className="flex justify-end items-center flex-row pe-[70px] bg-transparent pt-5">
      <button className="p-10" onClick={() =>onLeftClick()}>
      <FaChevronLeft className="bg-transparent text-white text-4xl hover:opacity-30 "/>
      </button>
        <div className="flex flex-row bg-transparent justify-center items-center bg-white bg-opacity-10 p-[50px]">
          <h1 className="text-white bg-transparent text-2xl w-[200px] opacity-70">{data.name}</h1>
          <div className="flex flex-col bg-transparent justify-right items-right ps-20">
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Destination: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.dests}</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">States:</h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.states}</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Lead Organization: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">{data.lead_org}</h1>
            </div>
          </div>
        </div>
        </motion.div>
        </AnimatePresence>
  )
}
function DisplayLink() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center bg-black mt-40"
    >
      <h1 className="text-white text-6xl font-semibold text-left ms-10 pt-10 bg-transparent">
        Find More
      </h1>
      <h1 className="text-white opacity-50 text-6xl font-semibold text-left ms-10 pt-5 bg-transparent">
        Space Projects!
      </h1>
      <a
        className="text-white opacity-50 text-2xl text-left ms-10 pt-5 pb-20 bg-transparent underline hover:opacity-40"
        href="https://ntrs.nasa.gov/search"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ntrs.nasa.gov/search
      </a>
    </motion.div>
  );
}
