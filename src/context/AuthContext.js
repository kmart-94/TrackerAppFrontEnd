import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {token: action.payload, errorMessage: ''};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({email, password}) => {
    
    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Something went wrong.'})
    }

  };
};

const signin = (dispatch) => {
  return ({email, password}) => {

  };
};

const signout = (dispatch) => {
  //signout

  //refresh State and move to signin screen

  //remove authentication
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, errorMessage: ''}
);
