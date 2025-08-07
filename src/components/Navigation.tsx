import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import AppBottomNav from "./AppBottomNav";

const Stack = createNativeStackNavigator();

const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
                <Stack.Screen name="Events"
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                        },
                        headerTintColor: '#fff', // text and back icon color
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ paddingLeft: 10 }}>← Back</Text>
                            </TouchableOpacity>
                        ),
                    })}

                    component={AppBottomNav} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;