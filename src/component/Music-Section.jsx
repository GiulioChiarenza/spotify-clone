import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { selectSong } from '../redux/actions';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { addFavouriteSong } from '../redux/actions';
import { removeFavoriteSong } from '../redux/actions';

const AlbumCard = ({ song }) => {
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false); 

    const handleCardClick = () => {

      dispatch(selectSong(song));
    };
    const handleLikeClick = () => {
        if (!isFavorite) {
          dispatch(addFavouriteSong(song));
          setIsFavorite(true);
        } else {
          dispatch(removeFavoriteSong(song.id));
          setIsFavorite(false);
        }
      };

  
    return (
        <>
      <div className="col text-center" onClick={handleCardClick}>
        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
        <p>
          Track: "{song.title}"<br />
          Artist: {song.artist.name}
        </p>
      </div>
      <div className='likeIcon'>
      {isFavorite ? ( 
        <span><FcLike /></span>
      ) : (
        <span onClick={handleLikeClick}><FcLikePlaceholder /></span>
      )}
      </div>
      </>
    );
  };

const MusicSection = ({ songs }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {songs.map((song, index) => (
        <AlbumCard key={index} song={song}/>
      ))}
    </div>
  );
};

export default MusicSection;
