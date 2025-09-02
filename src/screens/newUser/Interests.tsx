import { Text, View } from "react-native"
import { AppKeyboardAvoidView } from "../../components/AppKeyboardAvoidView"
import { ProgressBar } from "../../components/ProgressBar"
import { rsHeight } from "../../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"
import CustomButton from "../../components/CustomButton"
import InterestButton from "../../components/InterestButton"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styles/newUserStyles/InterestScreen.styles"

const interests = [
    "Pubs",
    "Events",
    "Nightlife",
    "Artists / Singers",
    "Music",
    "Shows",
    "Food",
    "Drinks",
    "Fun Activities",
    "DJ / Ambience",
    "Karaoke Nights",
    "Networking",
    "Clubbing",
    "Party",
];
export const InterestsScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (item: string) => {
        if (selected.includes(item)) {
            setSelected(selected.filter((i) => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    };
    return (

        <AppKeyboardAvoidView style={styles.container}>
            <View>
                <ProgressBar currentStep={4} totalSteps={5} />
                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>What are you <Text style={styles.secondryColor}>Interested in?</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for Email verification</Text>
                    <View style={[styles.grid, { marginTop: rsHeight(80) - insets.top }]}>
                        {interests.map((item, index) => (
                            <InterestButton
                                key={index}
                                label={item}
                                selected={selected.includes(item)}
                                onPress={() => toggleSelection(item)}
                            />
                        ))}
                    </View>
                </View>
            </View>

            <CustomButton title="Continue" onPress={() => navigation.navigate("SuccessScreen")} />
        </AppKeyboardAvoidView>

    )
}

