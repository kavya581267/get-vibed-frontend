import { Text, View } from "react-native";
import { ProgressBar } from "../../../components/ProgressBar";
import { theme } from "../../../theme/theme";
import { rsWidth } from "../../../theme/responsive";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/applyToPerformStyles/ContactDetails.styles";

export default function ContactDetails() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ProgressBar totalSteps={4} currentStep={1} />
            <View style={styles.body}>

                {/* Body */}
                <View>
                    <Text style={styles.textHead}>Contact Details</Text>

                    <View>
                        <View>
                            <Text style={styles.text}>POC Name</Text>
                            <CustomTextInput />
                        </View>
                        <View>
                            <Text style={styles.text}>Email Address</Text>
                            <CustomTextInput />
                        </View>
                        <View>
                            <Text style={styles.text}>Contact Number</Text>
                            <CustomTextInput />
                        </View>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonRow}>
                    <CustomButton style={styles.saveButton} title="Save Draft" onPress={() => console.log("Save Draft")} />
                    <CustomButton style={styles.continueButton} title="Continue" iconRight={<MaterialIcons name="arrow-forward-ios" size={rsWidth(16)} color={theme.colors.secondary} />} onPress={() => navigation.navigate("BandDetails")} />
                </View>
            </View>
        </View>
    )
}

