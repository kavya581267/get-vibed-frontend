import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUpScreen from "../screens/SignUp";
import { MobileVerificationScreen } from "../screens/MobileVerification";
import { Otp } from "../screens/Otp";
import { EmailVerification } from "../screens/EmailVerification";
import { Interests } from "../screens/Interests";
import { Success } from "../screens/Success";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return(
 <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <Stack.Screen name="MobileVerificationScreen" component={MobileVerificationScreen}/>
    <Stack.Screen name="Otp" component={Otp}/>
    <Stack.Screen name="EmailVerification" component={EmailVerification}/>
    <Stack.Screen name="Interests" component={Interests}/>
    <Stack.Screen name="Success" component={Success}/>
 </Stack.Navigator>
    )
}