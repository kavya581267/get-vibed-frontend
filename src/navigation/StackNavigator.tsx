import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { withGradient } from "../components/hoc/withGradient";
import { OtpScreen } from "../screens/newUser/Otp";
import { EmailVerificationScreen } from "../screens/newUser/EmailVerification";
import { InterestsScreen } from "../screens/newUser/Interests";
import { SuccessScreen } from "../screens/newUser/Success";
import SignUpScreen from "../screens/newUser/SignUp";
import { MobileVerificationScreen } from "../screens/newUser/MobileVerification";
import TopTabs from "./TopTabs";
import MainTab from "../screens/artist/EventScreen";


export type RootStackParamList = {
    SignUpScreen: undefined;
    MobileVerificationScreen: undefined;
    OtpScreen: undefined;
    EmailVerificationScreen: undefined;
    InterestsScreen: undefined;
    SuccessScreen: undefined;
    TopTabs:undefined;
}

const Stack = createNativeStackNavigator();

export default function StackNavigator<RootStackParamList>() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }} >
         <Stack.Screen name="SignUpScreen" component={withGradient(SignUpScreen)} />
         <Stack.Screen name="MobileVerificationScreen" component={withGradient(MobileVerificationScreen)} />
         <Stack.Screen name="OtpScreen" component={withGradient(OtpScreen)} />
         <Stack.Screen name="EmailVerificationScreen" component={withGradient(EmailVerificationScreen)} />
         <Stack.Screen name="InterestsScreen" component={withGradient(InterestsScreen)} />
         <Stack.Screen name="SuccessScreen" component={withGradient(SuccessScreen)} />
          <Stack.Screen name="MainTab" component={withGradient(MainTab)} />
      </Stack.Navigator>
   )
}