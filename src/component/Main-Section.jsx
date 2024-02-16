import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicSection from './Music-Section';



function MainSection() {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const rockResponse = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=sum41');
        const rockData = await rockResponse.json();
        setRockSongs(rockData.data.slice(0, 4)); 

        
        const popResponse = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=rihanna');
        const popData = await popResponse.json();
        setPopSongs(popData.data.slice(0, 4)); 

        
        const hipHopResponse = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem');
        const hipHopData = await hipHopResponse.json();
        setHipHopSongs(hipHopData.data.slice(0, 4)); 
      } catch (error) {
        console.error('Errore nella fetch', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <MusicSection songs={rockSongs} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <MusicSection songs={popSongs} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <MusicSection songs={hipHopSongs} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
