import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import LoginScreen from "../../Pages/LoginScreen";
import RegisterScreen from "../../Pages/RegisterScreen"


const ProfileStack = () => {

    const Stack = createStackNavigator();

    return(
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
    )
}

export default ProfileStack