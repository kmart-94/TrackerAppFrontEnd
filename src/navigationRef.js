
import {CommonActions} from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  console.log(navigator);
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params
    })
  );
};
