import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch(action.type) {
    case "createTrack":
      return {...state, locations: [...state.locations, action.payload]};
    default:
      return state;
  }
};

const createTrack = dispatch => (name, locations) => {
  console.log('Saving!!! LocationContext, 31');
};

const fetchTracks = dispatch => () => {

};

const changeName = dispatch => (name) => {

};


export const {Provider, Context} = createDataContext(
  trackReducer,
  {createTrack, fetchTracks, changeName},
  []
);
