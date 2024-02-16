import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';



function Player() {
    const selectSong = useSelector(state => state.song.selectedSong);
    const artistName = selectSong?.artist?.name || '';
    const songTitle = selectSong?.title || '';
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 player-fix">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 playerControls">
              <div className="d-flex flex-row justify-content-center">
                <div >
              <p className='songTitle'>{artistName}</p>
              <p className='songTitle'>{songTitle}</p>
              </div>
              
                <a href="#">
                  <img src="src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="src/assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="src/assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="src/assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="src/assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
               
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
