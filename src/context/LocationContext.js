import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch(action.type) {
    case "startRecording":
      return {...state, recording: true};
    case "stopRecording":
      return {...state, recording: false};
    case 'reset':
      return {...state, locations: [], recording: false, name: ''};
    case 'changeName':
      return {...state, name: action.payload};
    case "addCurrentLocation":
      return {...state, currentLocation: action.payload};
    case "addLocation":
      return {...state, locations: [...state.locations, action.payload]};
    default:
      return state;
  }
};

const startRecording = dispatch => () => {
  console.log('Start Recording, LocationContext 21');
  dispatch({type: "startRecording"});
};

const stopRecording = dispatch => () => {
  console.log("stop recording! LocationContext 26");
  dispatch({type: "stopRecording"});
};

const reset = dispatch => () => {
  dispatch({type: 'reset'});
};

const changeName = dispatch => (name) => {
  dispatch({type: 'changeName', payload: name});
};

const addLocation = dispatch => (location, recording) => {
  console.log("adding current location, LocationContext, 34");
  dispatch({type: 'addCurrentLocation', payload: location});
  if (recording) {
    console.log('recording path! LocationContext, 36');
    dispatch({type: "addLocation", payload: location});
  }
};

export const {Provider, Context} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, reset, changeName, addLocation},
  {currentLocation: null, locations: [], recording: false, name: ''}
);
