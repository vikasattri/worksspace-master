import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../Screens/HomePage";
import WareHouseView from "../Screens/WareHouseView";

const AuthenticationStack = createStackNavigator();

const routes = [
  {
    name: "Home",
    component: HomePage,
    options: { headerShown: false },
  },

  {
    name: "ViewWareHouse",
    component: WareHouseView,
    options: { headerShown: false },
  },
];

export const navigationRef = React.createRef();

export default function Navigation() {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthenticationStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {routes.map((route, index) => (
          <AuthenticationStack.Screen {...route} key={`Screen${index}`} />
        ))}
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
}
