import React, {useState, useEffect, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as AuthProvider, Context as AuthContext} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TrackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{title: "Tracks List"}}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{title: "Track Detail"}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const {state, restoreToken} = useContext(AuthContext);

  React.useEffect(() => {
    restoreToken();
  }, []);

  return (
    <NavigationContainer>

    {
      state.authResolved === true ? (
        state.token !== null ? (
          <Tab.Navigator>
            <Tab.Screen
              name="TrackScreens"
              component={TrackScreens}
              options={{title: "Tracks List"}}
            />
            <Tab.Screen
              name="CreateTrack"
              component={TrackCreateScreen}
              options={{title: "Create Track", headerShown: true}}
            />
            <Tab.Screen
              name="Account"
              component={AccountScreen}
            />
          </Tab.Navigator>

        ) : (

          <Stack.Navigator>
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{title: "Sign up", headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              options={{title: "Sign in", headerShown: false}}
            />
          </Stack.Navigator>
        )
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ResolveAuth"
            component={ResolveAuthScreen}
            options={{title: "Resolve Auth", headerShown: false}}
          />
        </Stack.Navigator>
      )
    }

    </NavigationContainer>
  );
}

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <SafeAreaProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SafeAreaProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
