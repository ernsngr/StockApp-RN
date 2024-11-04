import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages

import StorePage from "./App/(tabs)/Store/index"
import OrdersPage from "./App/(tabs)/Orders/index"
import ProfilePage from "./App/(tabs)/Profile/index"

// icons
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';



const App = () => {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Store' screenOptions={{
          tabBarStyle:{ height: "10%" },
          tabBarActiveTintColor: "#252525",
          tabBarInactiveTintColor: "#a4a4a4",
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 600
          }
        }} 
        
      >
        <Tab.Screen name="Store" component={StorePage} options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name={focused ? "appstore1" : "appstore-o"} size={25} color="black" />
          )
        }} />
        <Tab.Screen name="Orders" component={OrdersPage} options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ? "basket" : "basket-outline"} size={25} color="black" />
          )
        }} />
        <Tab.Screen name="Profile" component={ProfilePage} options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={25} color="black" />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;