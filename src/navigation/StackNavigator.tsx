import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OtpScreen } from "../screens/newUser/Otp";
import { EmailVerificationScreen } from "../screens/newUser/EmailVerification";
import { InterestsScreen } from "../screens/newUser/Interests";
import { SuccessScreen } from "../screens/newUser/Success";
import SignUpScreen from "../screens/newUser/SignUp";
import { MobileVerificationScreen } from "../screens/newUser/MobileVerification";
import MainTab from "../screens/artist/main-page/EventScreen";
import BottomTab from "./BottomTabs";
import { withGradient } from "../components/hoc/withGradient";
import { withGradientSafeArea } from "../components/hoc/withGradientSafeArea";
import ContactDetails from "../screens/artist/apply-to-perform/ContactDetails";
import BandDetails from "../screens/artist/apply-to-perform/BandDetails";
import Portfolio from "../screens/artist/apply-to-perform/Portfolio";
import EquipmentNeeds from "../screens/artist/apply-to-perform/EquipmentNeeds";
import { Text } from "react-native";
import { applyToPerformHeader } from "../components/ApplyToPerformHeader";
import MapWithVibers from "../screens/artist/map-and-swipe/map";
import SwipeCard from "../screens/artist/map-and-swipe/SwipeCard";


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
const steps = [
   { name: "ContactDetails", component: ContactDetails },
   { name: "BandDetails", component: BandDetails },
   { name: "Portfolio", component: Portfolio },
   { name: "EquipmentNeeds", component: EquipmentNeeds },
];


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
         <Stack.Screen name="BottomTab" component={BottomTab} />
         {/* Apply To Perform*/}
         {steps.map((step, index) => (
            <Stack.Screen
               key={step.name}
               name={step.name}
               component={withGradient(step.component)}
               // ✅ pass total + index dynamically
               options={applyToPerformHeader("Apply to Perform", index + 1, steps.length)}
            />
         ))}
         <Stack.Screen name="SwipeCard" component={withGradient(SwipeCard)} />
         <Stack.Screen name="MapWithVibers" component={withGradientSafeArea(MapWithVibers)} />


      </Stack.Navigator>
   )
}