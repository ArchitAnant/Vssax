import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export function ProjectBase() {
  return (
    <>
    <div className="flex flex-row items-center justify-end bg-black pe-[70px]">
      <div className="flex flex-col">
        <div className="relative ms-10 pt-10 bg-transparent">
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
    <DetailedInfo />
    <div className="pt-10"></div>
    <SmallInfo />
    <DisplayLink />
    </>
  );
}

function DetailedInfo(){
  return(
    <div className="flex flex-row items-center bg-tranparent justify-start ">
      <h1 className="text-white text-8xl bg-transparent opacity-70 -rotate-90 origin-center">CHP-IDA</h1>
      <div className="bg-white bg-opacity-10 flex justify-start items-start flex-col ps-[50px] pt-[50px] pb-[20px] ">
        <div className="flex flex-row bg-transparent justify-center items-center">
          <h1 className="text-white bg-transparent text-2xl w-[200px] opacity-70">Crew Health and Performance Integrated Data Architecture</h1>
          <div className="flex flex-col bg-transparent justify-right items-right ps-20">
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Destination: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">Mars ,Moon and Cislunar</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">States:</h1>
              <h1 className="text-white bg-transparent text-base opacity-70">CA, TX</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Lead Organization: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">Johnson Space Center</h1>
            </div>
          </div>
        </div>
          <h1 className="text-white bg-transparent text-sm  w-[35vw] mt-10 opacity-70 pe-[50px] pb-10">Future exploration missions to Mars will have increased need for crew autonomy.  Crew Health & Performance (CHP) related data on the ISS is currently, manually downlinked and in disparate locations, which limits crew autonomy for future missions. The CHP-IDA project is developing a backend data system platform that grants the ability to seamlessly collect, store, process, and display CHP-related data for exploration missions.  This platform allows for integration of data and advanced analytics that offer crew and ground teams better insight into the crew’s health and performance. It also enables applications that can improve the crew’s ability to provide more autonomous medical care during exploration missions.  Data will be collected automatically to reduce crew and ground team time and effort and will synchronize across all in-mission vehicles, habitats, and ground as communication delay permits.The Human Research Program’s (HRP) Medical Data Architecture (MDA) project focused on this backend data architecture but for medical data only.  The CHP-IDA project, a joint effort between HRP’s Exploration Medical Capability (ExMC) element and the Exploration Medical Integrated Product Team (XMIPT), expands this capability to all relevant CHP-related data. The additional inputs from nutrition, environment, exercise, radiation, and any other relevant sources will give more insight into crew s health and performance. Currently, the Human Systems Engineering and Integration Division at Johnson Space Center (JSC) is designing the system. The team completed a system requirements review (SRR) in FY22 and now the focus is on core software development, testbed buildup, and use case scenario demonstration. An end-to-end demonstration with multiple data sources across CHP domains is schedule for the end of FY24 where all three focus areas will be displayed. Following this ground demo, the software will be completed, tested, and validated for flight.</h1>
          <div className="flex flex-row bg-transparent justify-right items-right">
            <h1 className="text-white bg-transparent text-sm opacity-50 pe-10">2021-2029</h1>
            <h1 className="text-white bg-transparent text-sm opacity-70 pe-1">Project ID :</h1>
            <h1 className="text-white bg-transparent text-sm opacity-50">157744</h1>
          </div>  
      </div>
      <button className="ps-10 w-[40vw] ">
      <FaChevronRight className="bg-transparent text-white text-4xl hover:opacity-30"/>
      </button>
    </div>
  )
}

function SmallInfo(){
  return(
    <div className=" flex justify-end items-center flex-row pe-[70px]">
      <FaChevronLeft className="bg-transparent text-white text-4xl hover:opacity-30 me-4"/>
        <div className="flex flex-row bg-transparent justify-center items-center bg-white bg-opacity-10 p-[50px]">
          <h1 className="text-white bg-transparent text-2xl w-[200px] opacity-70">Crew Health and Performance Integrated Data Architecture</h1>
          <div className="flex flex-col bg-transparent justify-right items-right ps-20">
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Destination: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">Mars ,Moon and Cislunar</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">States:</h1>
              <h1 className="text-white bg-transparent text-base opacity-70">CA, TX</h1>
            </div>
            <div className="flex flex-row bg-transparent justify-right items-right ">
              <h1 className="text-white bg-transparent text-base pe-2 opacity-50">Lead Organization: </h1>
              <h1 className="text-white bg-transparent text-base opacity-70">Johnson Space Center</h1>
            </div>
          </div>
        </div>
    </div>
  )
}
function DisplayLink(){
  return(
    <div className="flex flex-col items-center justify-center bg-black mt-10">

          <h1 className="text-white text-6xl font-semibold text-left ms-10 pt-10 bg-transparent">
            Find More
          </h1>
          <h1 className="text-white opacity-50 text-6xl font-semibold text-left ms-10 pt-5 bg-transparent">
            Space Projects!
          </h1>
          <a className="text-white text-2xl text-right mt-10 opacity-50 bg-clip-text underline pb-20" href="https://ntrs.nasa.gov/search" target="_blank">
          https://ntrs.nasa.gov/search
          </a>
    </div>
  )
}
