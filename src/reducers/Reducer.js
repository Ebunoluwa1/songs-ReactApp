import { combineReducers } from 'redux';

const songsReducer = () => {
  return  [
      {title: 'Ebun', duration: '4:15'},
      {title: 'Tife', duration: '4:30'},
      {title: 'NOt me', duration: '4:05'},
      {title: 'Teetea', duration: '4:05'},
      {title: 'I love you', duration: '4:10'}
  ];
};

const selectedSongReducer = (selectedSong=null, action)=> {
if (action.type ==='SONG_SELECTED'){
    return action.payload;
} return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong:selectedSongReducer
});