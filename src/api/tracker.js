import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://c9ccb219c11c.ngrok.io'
});

//these two functions, first and second,
//first gets called whenever we make a request
//second gets called whenever there is an eror with
//this request
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    //whenever request fails return a promise rejecting said error
    return Promise.reject(err);
  }
);

export default instance;
