import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NeoBoard from './components/neo_board'
import {ApodImage,ApodText} from './components/apod_dasboard'
import { ProjectBase } from './components/projects';

function App() {
  const [apodData, setApodData] = useState(null);
  const [neoData, setNeoData] = useState(null);
  const [loading, setLoading] = useState(true); // For managing loading state
  const [error, setError] = useState(null); // For managing error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/apod_data');
        setApodData(response.data);
        // setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        // setLoading(false);
      }
    };

    const fetchNeoData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/neo_data');
        setNeoData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching neo data:', err);
        setError(err);
        setLoading(false);
      }

    }

    fetchData();
    fetchNeoData();
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
       <ApodText data={apodData} />
       <ApodImage data={apodData} />
    </div>
    <NeoBoard data={neoData}/>
    <ProjectBase />
    <Footer />
    </div>
  );
}

function Footer(){
  return(
      <footer className="bg-transparent text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold pb-3">VSSAX</h2>
            <p className="text-sm opacity-50">© 2024 Archit Anant. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/about" className="text-base hover:underline opacity-50">Disclaimer</a>
            <a href="/privacy" className="text-base hover:underline opacity-50">Github</a>
            <a href="/terms" className="text-base hover:underline opacity-50">NASA APIs</a>
          </div>
        </div>
      </footer>
  )
}






export default App;
