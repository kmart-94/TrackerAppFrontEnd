import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch(action.type) {
    case "addLocation":
      return {...state, currentLocation: action.payload};
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};

const stopRecording = dispatch => () => {};

const addLocation = dispatch => (location) => {
  dispatch({type: 'addLocation', payload: location});
};

export const {Provider, Context} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {currentLocation: null, locations: [], recording: false}
);