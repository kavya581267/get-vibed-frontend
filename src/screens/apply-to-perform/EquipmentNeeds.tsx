
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { theme } from "../../theme/theme";
import { FontSize, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import { typography } from "../../theme/typography";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import InterestButton from "../../components/InterestButton";
import { useState } from "react";
import { AppKeyboardAvoidView } from "../../components/AppKeyboardAvoidView";

const interests = [
    "Mics", "Lighting", "Stage Layout", "Monitors", "DI Boxes", "Mixers", "Smoke Machine", "Laser Lights",
    "Electronic", "Carpet"
];

export default function EquipmentNeeds() {
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
            <ProgressBar totalSteps={4} currentStep={4} />
            <View style={styles.body}>

                {/* Body */}
                <View>
                    <Text style={styles.textHead}>Equipment Needs</Text>

                    <View>
                        <View>
                            <Text style={styles.text}>Tools/Special Requests</Text>
                            <View style={[styles.grid]}>
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
                        <View>
                            <Text style={styles.text}>Please explain in detail</Text>
                            <CustomTextInput multiline placeholder="Write a requirements as detailed as possible" placeholderTextColor="white"/>
                        </View>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonRow}>
                    <CustomButton style={styles.saveButton} title="Save Draft" onPress={() => console.log("Save Draft")} />
                    <CustomButton style={styles.continueButton} title="Submit" onPress={() => console.log("Submit")} />
                </View>
            </View>

        </AppKeyboardAvoidView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: "space-between",
        padding: Spacing.md,
        paddingBottom: Spacing.xl
    },
    textHead: {
        color: theme.colors.secondary,
        fontSize: FontSize.body,
        fontWeight: "600",
        fontFamily: typography.family.inter,
        paddingBottom: Spacing.sm
    },

    text: {
        fontFamily: typography.family.inter,
        color: theme.colors.secondary,
        fontWeight: "400",
        fontSize: FontSize.small,
        paddingBottom: Spacing.sm,
        paddingTop: Spacing.sm
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    saveButton: {
        width: rsWidth(172),
        height: rsHeight(44),
        backgroundColor: "none",
        borderColor: theme.colors.secondary,
        borderWidth: 1
    },
    continueButton: {
        width: rsWidth(172),
        height: rsHeight(44),
    },
    buttonText: {
        fontSize: FontSize.small,
        fontWeight: "600",
        fontFamily: typography.family.inter,
        color: theme.colors.secondary
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

})