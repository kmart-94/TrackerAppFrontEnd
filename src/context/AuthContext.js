import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {...state, token: action.payload, errorMessage: ''};
    case 'signout':
      return {...state, token: null, errorMessage: ''};
    case 'clear_error':
      return {...state, errorMessage: ''};
    case 'RESTORE_TOKEN':
      return {...state, token: action.payload, errorMessage: '', authResolved: true};
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => dispatch({type: 'clear_error'});
};


const signup = (dispatch) => {
  return async ({email, password}) => {

    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
    } catch (err) {
      console.log(err);
      dispatch({type: 'add_error', payload: 'Something went wrong.'})
    }

  };
};

const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Something went wrong.'})
    }
  };
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
  } catch (err) {
    dispatch({type: 'add_error', payload: 'Error when logging out.'});
  }
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
    dispatch({ type: 'RESTORE_TOKEN', payload: userToken });
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, restoreToken, clearErrorMessage},
  {token: null, errorMessage: ''}
);
