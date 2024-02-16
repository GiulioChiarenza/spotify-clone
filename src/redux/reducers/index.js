import { ADD_FAVOURITE_SONG, SELECT_SONG, REMOVE_FAVORITE_SONG } from "../actions"


const initialState= {
song:{
    selectedSong:[],
    favouriteSong:[]

}
}

const mainReducer = (state = initialState, action)=>{
    switch (action.type) {
    case SELECT_SONG:
    return {
        ...state, 
        song:{
            ...state.song,
            selectedSong:action.payload
        }
    }
    case ADD_FAVOURITE_SONG:
        return {
            ...state,
            song:{
            ...state.song,
            favouriteSong:[...state.song.favouriteSong, action.payload]
        }
    }
    case REMOVE_FAVORITE_SONG:
        return {
          ...state,
          song: {
            ...state.song,
            favoriteSong: state.song.favoriteSong.filter(song => song.id !== action.payload)
          }
        };
        default: 
        return state
            
    }
}

export default mainReducer