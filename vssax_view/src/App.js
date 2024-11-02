import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // For managing loading state
  const [error, setError] = useState(null); // For managing error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/apod_data');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white flex justify-center items-center h-screen w-screen">Loading...</div>; // Display loading message
  }

  if (error) {
    return <div className="text-white flex justify-center items-center h-screen w-screen">Error loading data. Please try again later.</div>; // Display error message
  }
  return (
    <div className='flex flex-col'>
    <div className="flex flex-row items-top justify-top min-h-screen bg-black">
      <h1 className="text-white text-xl font-bold text-left ms-10 pt-10 ">VSSAX</h1>
       <ApodText data={data} />
       <ApodImage data={data} />
    </div>
    <NeoBoard />
    </div>
  );
}

function ApodImage({data}){
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
     
      <div className="absolute bottom-0 left-[-20%] w-[500px] h-[2px] bg-white opacity-20"></div>
      <div className="absolute bottom-[-15%] left-0 w-[2px] h-[500px] bg-white opacity-20"></div>
    </div>
  );
}

function ApodText({data}){
  return(
    <div className='flex max-h-screen h-screen w-screen justify-center items-start flex-col'>
    
    <h1 className="text-white text-6xl font-bold text-left">{data.title}</h1>
    <h1 className="text-white w-[400px] text-left ms-2 mt-8 opacity-50">{data.explanation}</h1>
    
    <h1 className="flex w-[400px] justify-center item-center text-white text-base text-left mt-3">{data.date}</h1>
    </div>
  )
}

function NeoBoard(){
  return(
    <>
    <div className='relative ms-10 pt-10 bg-transparent'>
    <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-10 bg-transparent">What's</h1>
    <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-10 opacity-20 absolute top-0 left-0 translate-y-[52px] translate-x-[-8px] bg-clip-text">What's</h1>
    </div>
    <div className='relative ms-10 bg-transparent pb-20'>
    <h1 className="text-white text-8xl font-semibold text-left ms-10 pt-5 bg-transparent">Flying By?</h1>
    <h1 className="text-white text-8xl font-semibold text-left ms-10 opacity-20 absolute top-0 left-0 translate-y-[32px] translate-x-[-8px] bg-clip-text">Flying By?</h1>
    <h1 className="text-white text-2xl text-left ms-10 mt-10 opacity-50 top-0 left-0 bg-clip-text">Near Earth Objects</h1>
    </div>
    </>
  )
}



export default App;
