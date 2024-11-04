import React from "react";

export function ApodImage({data}){
    function onHighClick(){
      window.open(data.high_link, '_blank'); 
    }
    return (
      <div className="relative w-[50vw] min-w-[1080px] aspect-square overflow-visible">
         <h1
          className="absolute left-[-33%] text-white opacity-20 font-bold transform rotate-[-90deg] origin-bottom-right text-[8.5rem] bg-clip-text select-none"
          style={{ whiteSpace: 'nowrap' }}
        >
          #APOD
        </h1>
        <img src={data.high_link} alt="Cropped Image" className="absolute top-0 right-0 w-full h-full object-cover" />
        <button onClick={onHighClick}
              className="absolute mt-8 right-[2%] border text-white hover:bg-white hover:text-black rounded-full text-xs px-3 py-2">
          Load full Image
        </button>
       
        <div className="absolute bottom-0 -left-[20%] w-[900px] h-[2px] bg-white opacity-20"></div>
        <div className="absolute bottom-[-10%] left-0 w-[2px] h-[500px] bg-white opacity-20"></div>
      </div>
    );
  }
  
 export function ApodText({data}){
    return(
      <div className='flex max-h-screen h-screen w-screen justify-center items-start flex-col'>
      
      <h1 className="text-white text-6xl font-bold text-left w-[400px]">{data.title}</h1>
      <h1 className="text-white w-[400px] text-left ms-2 mt-8 opacity-50">{data.explanation}</h1>
      
      <h1 className="flex w-[400px] justify-center item-center text-white text-base text-left mt-3">{data.date}</h1>
      </div>
    )
}