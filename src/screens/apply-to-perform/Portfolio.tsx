
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { theme } from "../../theme/theme";
import { FontSize, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import { typography } from "../../theme/typography";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Portfolio() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ProgressBar totalSteps={4} currentStep={3} />
            <View style={styles.body}>

                {/* Body */}
                <View>
                    <Text style={styles.textHead}>Performance Sample/Portfolio</Text>

                    <View>
                        <View>
                            <Text style={styles.text}>Social Media Links</Text>
                            <CustomTextInput placeholder="Instagram Link"/>
                        </View>
                       
                        <View>
                            <Text style={styles.text}>Add Other Links</Text>
                            <CustomTextInput placeholder="Paste your video URL here"/>
                        </View>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonRow}>
                    <CustomButton style={styles.saveButton} title="Save Draft" onPress={() => console.log("Save Draft")} />
                    <CustomButton style={styles.continueButton} title="Continue" iconRight={<MaterialCommunityIcons name="chevron-right" size={rsWidth(18)} color={theme.colors.secondary} />} onPress={() => navigation.navigate("EquipmentNeeds")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor:"none",
        borderColor:theme.colors.secondary,
        borderWidth:1
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
    }

})