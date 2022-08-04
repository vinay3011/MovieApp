import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator} from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';
import Hollywood from './src/Screen/tabscreen/Hollywood';
import Bollywood from './src/Screen/tabscreen/Bollywood';
import SavedVideos from './src/Screen/drawerscreen/SavedVideos';
import FavouriteVideos from './src/Screen/drawerscreen/FavouriteVideos';
import LikeVideos from './src/Screen/drawerscreen/LIkeVideos';




// Tab navigation 
const Tab = createBottomTabNavigator();
function TabScreen({ navigation }) {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Hollywood" component={Hollywood} options={{
        tabBarStyle: { height: 80 },
        title:'HollyWood',
        headerShown: false,

        tabBarIcon: () => (
          <Image style={{ height: 40, width: 40 }}
            source={require("./src/assets/hollywood.png")}
          />
        )
      }} />
      <Tab.Screen name="Bollywood" component={Bollywood}
        options={{
          tabBarStyle: { height: 80 },
          title:'BollyWood',
          headerShown: false,
          tabBarIcon: () => (
            <Image style={{  height: 40, width: 40  }}
              source={require("./src/assets/bollywood.png")}
            />
          )
        }} />
    </Tab.Navigator>
  )
}





//Drawer navigation
const Drawer = createDrawerNavigator();
function DrawerItems() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabScreen}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <Image style={{ height: 100, width: 300 }}
              source={require("./src/assets/welcome.jpg")}
            />
          )
        }} />
      <Drawer.Screen name="Save Videos" component={SavedVideos} title='Save Video'
        options={{
          drawerIcon: () => (
            <Image style={{ height: 50, width: 50 }}
              source={require("./src/assets/savevideo.png")}
            />
          )
        }} />
      <Drawer.Screen name="Favourite Videos" component={FavouriteVideos}
        options={{

          drawerIcon: () => (
            <Image style={{ height: 50, width: 50 }}
              source={require("./src/assets/favvideo.png")}
            />
          )
        }} />
      <Drawer.Screen name="Like Videos" component={LikeVideos}
        options={{
          title: 'Like Videos',
          drawerIcon: () => (
            <Image style={{ height: 50, width: 50 }}
              source={require("./src/assets/likevideo.jpg")}
            />
          )
        }} />

    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerItems />
    </NavigationContainer>
  )
}