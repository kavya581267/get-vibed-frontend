import { StyleSheet, Text, View } from "react-native"
import { AppKeyboardAvoidView } from "../components/AppKeyboardAvoidView"
import { ProgressBar } from "../components/ProgressBar"
import { rsHeight, Spacing } from "../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { typography } from "../theme/typography"
import { theme } from "../theme/theme"
import { useState } from "react"
import CustomButton from "../components/CustomButton"
import InterestButton from "../components/InterestButton"

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
export const Interests = () => {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
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

            <CustomButton title="Continue" onPress={() => console.log(email)} />


        </AppKeyboardAvoidView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.lg,
        justifyContent: "space-between",
        paddingBottom: 0
    },
    title: {
        fontFamily: typography.heading2.fontFamily,
        color: theme.colors.primary,
        fontSize: typography.heading2.fontSize,
        fontWeight: typography.heading2.fontWeight
    },
    secondryColor: {
        color: theme.colors.secondary
    },
    subTitle: {
        color: theme.colors.input,
        fontSize: typography.subTitle.fontSize,
        fontFamily: typography.subTitle.fontFamily,
        fontWeight: typography.subTitle.fontWeight,
        marginTop: Spacing.xs
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
})