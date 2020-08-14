import createDataContext from './createDataContext';
import TrackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch(action.type) {
    case "fetchTracks":
      return action.payload;
    default:
      return state;
  }
};

const createTrack = dispatch => async (name, locations) => {
  console.log('Saving!!! LocationContext, 31');
  await TrackerApi.post('/tracks', {name, locations});
};

const fetchTracks = dispatch => async () => {
  console.log('fetching tracks, TrackContext, 19');
  const response = await TrackerApi.get('/tracks');
  dispatch({type: 'fetchTracks', payload: response.data})
};

const changeName = dispatch => (name) => {

};


export const {Provider, Context} = createDataContext(
  trackReducer,
  {createTrack, fetchTracks, changeName},
  []
);
