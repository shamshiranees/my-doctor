import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Containers/Home/Home';
import AddCurrency from '../Containers/AddCurrency/AddCurrency';
import AnimationHome from '../Containers/AnimationHome';
import DoctorsList from '../Containers/DoctorsList/DoctorsList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../Theme';
import DoctorDetails from '../Containers/DoctorsList/DoctorDetails';
import AppoinmentConfirmed from '../Containers/Apointments/AppoinmentConfirmed';
import AIQuestion from '../Containers/AIQuestion/AIQuestion';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
function RootStackScreen() {
  return (
    <Stack.Navigator initialRouteName="home" headerMode="none">
      <Stack.Screen name="home" component={App} />
      <Stack.Screen name="doctors" component={DoctorsList} />
      <Stack.Screen name="doctorDetails" component={DoctorDetails} />
      <Stack.Screen
        name="appoinmentConfirmed"
        component={AppoinmentConfirmed}
      />
      <Stack.Screen name="aIQuestion" component={AIQuestion} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'All doctors') {
            iconName = focused
              ? 'ios-document-text'
              : 'ios-document-text-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.header,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="All doctors" component={DoctorsList} />
    </Tab.Navigator>
  );
}
