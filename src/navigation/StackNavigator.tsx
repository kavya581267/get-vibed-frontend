import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OtpScreen } from "../screens/newUser/Otp";
import { EmailVerificationScreen } from "../screens/newUser/EmailVerification";
import { InterestsScreen } from "../screens/newUser/Interests";
import { SuccessScreen } from "../screens/newUser/Success";
import SignUpScreen from "../screens/newUser/SignUp";
import { MobileVerificationScreen } from "../screens/newUser/MobileVerification";
import MainTab from "../screens/artist/EventScreen";
import BottomTab from "./BottomTabs";
import { withGradient } from "../components/hoc/withGradient";
import Profile from "../screens/artist/Profile";
import { withGradientSafeArea } from "../components/hoc/withGradientSafeArea";
import ContactDetails from "../screens/artist/apply-to-perform/ContactDetails";
import BandDetails from "../screens/artist/apply-to-perform/BandDetails";
import Portfolio from "../screens/artist/apply-to-perform/Portfolio";
import EquipmentNeeds from "../screens/artist/apply-to-perform/EquipmentNeeds";
import { Text } from "react-native";
import { applyToPerformHeader } from "../components/ApplyToPerformHeader";


export type RootStackParamList = {
   SignUpScreen: undefined;
   MobileVerificationScreen: undefined;
   OtpScreen: undefined;
   EmailVerificationScreen: undefined;
   InterestsScreen: undefined;
   SuccessScreen: undefined;
   BottomTab: undefined;
   ContactDetails: undefined
}

const Stack = createNativeStackNavigator();

export default function StackNavigator<RootStackParamList>() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }} >
         {/* Sign Up */}
         {/*}  <Stack.Screen name="SignUpScreen" component={withGradient(SignUpScreen)} />
         <Stack.Screen name="MobileVerificationScreen" component={withGradient(MobileVerificationScreen)} />
         <Stack.Screen name="OtpScreen" component={withGradient(OtpScreen)} />
         <Stack.Screen name="EmailVerificationScreen" component={withGradient(EmailVerificationScreen)} />
         <Stack.Screen name="InterestsScreen" component={withGradient(InterestsScreen)} />
         <Stack.Screen name="SuccessScreen" component={withGradient(SuccessScreen)} />*/}

         {/* Artist Screens */}
         <Stack.Screen name="BottomTab" component={withGradientSafeArea(BottomTab)} />
         <Stack.Screen name="ContactDetails" component={withGradient(ContactDetails)} options={applyToPerformHeader()}/>
         <Stack.Screen name="BandDetails" component={withGradient(BandDetails)} options={applyToPerformHeader()} />
         <Stack.Screen name="Portfolio" component={withGradient(Portfolio)} options={applyToPerformHeader()} />
         <Stack.Screen name="EquipmentNeeds" component={withGradient(EquipmentNeeds)} options={applyToPerformHeader()} />

      </Stack.Navigator>
   )
}