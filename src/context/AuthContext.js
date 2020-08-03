import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {token: action.payload, errorMessage: ''};
    case 'RESTORE_TOKEN':
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

const restoreToken = (dispatch) => {
  return async () => {
    let userToken;
    try {
      userToken = await AsyncStorage.getItem('token');
    } catch (err) {
        // Restoring token failed
        console.log('restoreTokenError');
        console.log(err);
    }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    dispatch({ type: 'RESTORE_TOKEN', payload: userToken });
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, restoreToken},
  {token: null, errorMessage: ''}
);
