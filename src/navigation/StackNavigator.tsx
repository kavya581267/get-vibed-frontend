import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OtpScreen } from "../screens/newUser/Otp";
import { EmailVerificationScreen } from "../screens/newUser/EmailVerification";
import { InterestsScreen } from "../screens/newUser/Interests";
import { SuccessScreen } from "../screens/newUser/Success";
import SignUpScreen from "../screens/newUser/SignUp";
import { MobileVerificationScreen } from "../screens/newUser/MobileVerification";
import TopTabs from "./TopTabs";
import MainTab from "../screens/artist/EventScreen";
import BottomTab from "./BottomTabs";
import ContactDetails from "../screens/apply-to-perform/ContactDetails";
import { withGradient } from "../components/hoc/withGradient";
import BandDetails from "../screens/apply-to-perform/BandDetails";
import EquipmentNeeds from "../screens/apply-to-perform/EquipmentNeeds";
import Portfolio from "../screens/apply-to-perform/Portfolio";


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
         {/*}  <Stack.Screen name="SignUpScreen" component={withGradient(SignUpScreen)} />
         <Stack.Screen name="MobileVerificationScreen" component={withGradient(MobileVerificationScreen)} />
         <Stack.Screen name="OtpScreen" component={withGradient(OtpScreen)} />
         <Stack.Screen name="EmailVerificationScreen" component={withGradient(EmailVerificationScreen)} />
         <Stack.Screen name="InterestsScreen" component={withGradient(InterestsScreen)} />
         <Stack.Screen name="SuccessScreen" component={withGradient(SuccessScreen)} />
          <Stack.Screen name="BottomTab" component={withGradient(BottomTab)} />*/}
         <Stack.Screen name="ContactDetails" component={withGradient(ContactDetails)} options={{headerShown: true, headerBackTitle:"Apply To Perform", headerTintColor:"#fff",headerStyle:{backgroundColor:"#021d15"}}}/>
          <Stack.Screen name="BandDetails" component={withGradient(BandDetails)} options={{headerShown: true, headerBackTitle:"Apply To Perform", headerTintColor:"#fff",headerStyle:{backgroundColor:"#021d15"}}}/>
           <Stack.Screen name="Portfolio" component={withGradient(Portfolio)} options={{headerShown: true, headerBackTitle:"Apply To Perform", headerTintColor:"#fff",headerStyle:{backgroundColor:"#021d15"}}}/>
           <Stack.Screen name="EquipmentNeeds" component={withGradient(EquipmentNeeds)} options={{headerShown: true, headerBackTitle:"Apply To Perform", headerTintColor:"#fff",headerStyle:{backgroundColor:"#021d15"}}}/>
      </Stack.Navigator>
   )
}