export const SELECT_SONG = 'SELECT_SONG';
export const ADD_FAVOURITE_SONG = 'ADD_FAVOURITE_SONG'
export const REMOVE_FAVORITE_SONG = 'REMOVE_FAVORITE_SONG';

export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song
});
export const addFavouriteSong = (song)=>({
    type:ADD_FAVOURITE_SONG,
    payload:song
});
export const removeFavoriteSong = (songId) => {
    return {
      type: REMOVE_FAVORITE_SONG,
      payload: songId
}};