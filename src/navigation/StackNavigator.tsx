import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUpScreen from "../screens/SignUp";
import { MobileVerificationScreen } from "../screens/MobileVerification";
import { Otp } from "../screens/Otp";
import { EmailVerification } from "../screens/EmailVerification";
import { Interests } from "../screens/Interests";
import { Success } from "../screens/Success";
import { withGradient } from "../components/hoc/withGradient";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return(
 <Stack.Navigator screenOptions={{ headerShown: false,contentStyle: { backgroundColor: "transparent" } }} >
    <Stack.Screen name="SignUpScreen" component={withGradient(SignUpScreen)} />
    <Stack.Screen name="MobileVerificationScreen" component={withGradient(MobileVerificationScreen)} />
    <Stack.Screen name="Otp" component={withGradient(Otp)}/>
    <Stack.Screen name="EmailVerification" component={withGradient(EmailVerification)}/>
    <Stack.Screen name="Interests" component={withGradient(Interests)}/>
    <Stack.Screen name="Success" component={withGradient(Success)}/>
 </Stack.Navigator>
    )
}