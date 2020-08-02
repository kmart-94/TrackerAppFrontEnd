import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({email, password}) => {
    //make api request to sign up with email/Password

    //if we sign up, modify state, and say we are authenticated

    //if signup fails reflect error message
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

export const {Provider, Context} = createDataContext(authReducer, {signin, signout, signup}, {isSignedIn: false});
