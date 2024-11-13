import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {azure_key} from './keys'

import NeoBoard from './components/neo_board'
import {ApodImage,ApodText} from './components/apod_dasboard'
import { ProjectBase } from './components/projects';

function App() {
  const [apodData, setApodData] = useState(null);
  const [neoData, setNeoData] = useState(null);
  const [projectData, setProjectData] = useState(null);

  const [apodLoading, setApodLoading] = useState(true); // For managing loading state
  const [neoLoading, setNeoLoading] = useState(true); // For managing loading state
  const [projectLoading, setProjectLoading] = useState(true); // For managing loading state

  const [error, setError] = useState(null); // For managing error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vssaxapi.azurewebsites.net/api/apod_data?code='+azure_key);
        setApodData(response.data);
        setApodLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      }finally{
        setApodLoading(false);
      }
    };

    const fetchNeoData = async () => {
      try {
        const response = await axios.get('https://vssaxapi.azurewebsites.net/api/neo_data?code='+azure_key);
        setNeoData(response.data);
        setNeoLoading(false)
      } catch (err) {
        console.error('Error fetching neo data:', err);
        setError(err);

        // setLoading(false);
      }finally{
        setNeoLoading(false);
      };

    }
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('https://vssaxapi.azurewebsites.net/api/projects?code='+azure_key);
        setProjectData(response.data);
        setProjectLoading(false);
      } catch (err) {
        console.error('Error fetching neo data:', err);
        setError(err);
        setProjectLoading(false);
      }finally{
        setProjectLoading(false);
      };

    }
    fetchData();
    fetchNeoData();
    fetchProjectData();
  }, []);


  if (error) {
    return <div className="text-white flex justify-center items-center h-screen w-screen">Error loading data. Please try again later.</div>; // Display error message
  }
  return (
    <div className='flex flex-col'>
    <div className="flex flex-row items-top justify-top min-h-screen bg-black">
      <h1 className="text-white text-xl font-bold text-left ms-10 pt-10 ">VSSAX</h1>
      {apodLoading ? (
          <div className="text-white flex justify-center items-center h-screen w-screen">Loading...</div>
        ) : (
          <>
            <ApodText data={apodData} />
            <ApodImage data={apodData} />
          </>
        )}
      </div>
      {neoLoading ? (
        <div className="text-white flex justify-center items-center h-screen w-screen">Loading...</div>
      ) : (
        <NeoBoard data={neoData} />
      )}
      {projectLoading ? (
        <div className="text-white flex justify-center items-center h-screen w-screen">Loading...</div>
      ) : (
        <ProjectBase data={projectData} />
      )}    <Footer />
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
            <a href="https://github.com/ArchitAnant/Vssax/blob/main/LICENSE" target = "blank"className="text-base hover:underline opacity-50">Disclaimer</a>
            <a href="https://github.com/ArchitAnant/Vssax/" target = "blank" className="text-base hover:underline opacity-50">Github</a>
            <a href="https://api.nasa.gov" target = "blank" className="text-base hover:underline opacity-50">NASA APIs</a>
          </div>
        </div>
      </footer>
  )
}






export default App;
