
import { Text, View } from "react-native";
import { ProgressBar } from "../../../components/ProgressBar";
import { theme } from "../../../theme/theme";
import { rsWidth } from "../../../theme/responsive";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/applyToPerformStyles/Portfolio.styles";

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
                            <CustomTextInput placeholder="Instagram Link" />
                        </View>

                        <View>
                            <Text style={styles.text}>Add Other Links</Text>
                            <CustomTextInput placeholder="Paste your video URL here" />
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
