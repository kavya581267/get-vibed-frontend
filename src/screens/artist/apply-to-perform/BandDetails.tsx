
import { Text, View } from "react-native";
import { ProgressBar } from "../../../components/ProgressBar";
import { theme } from "../../../theme/theme";
import { rsWidth } from "../../../theme/responsive";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import InterestButton from "../../../components/InterestButton";
import { useState } from "react";
import { AppKeyboardAvoidView } from "../../../components/AppKeyboardAvoidView";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/applyToPerformStyles/BandDetails.styles";

const interests = [
    "Rock", "Jazz", "Metal", "Blues", "Folk", "R&B/Soul", "Reggae", "Latin Music",
    "Electronic", "Classical"
];

export default function BandDetails() {
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
            <ProgressBar totalSteps={4} currentStep={2} />
            <View style={styles.body}>

                {/* Body */}
                <View>
                    <Text style={styles.textHead}>Band Details</Text>

                    <View>
                        <View>
                            <Text style={styles.text}>Name of the Band</Text>
                            <CustomTextInput />
                        </View>
                        <View>
                            <Text style={styles.text}>Genre</Text>
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
                            <Text style={styles.text}>No. of Performers</Text>
                            <CustomTextInput />
                        </View>
                        <View>
                            <Text style={styles.text}>Short Bio</Text>
                            <CustomTextInput multiline placeholder="Write a short bio about your band/crew" placeholderTextColor="white" />
                        </View>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonRow}>
                    <CustomButton style={styles.saveButton} title="Save Draft" onPress={() => console.log("Save Draft")} />
                    <CustomButton style={styles.continueButton} title="Continue" iconRight={<MaterialCommunityIcons name="chevron-right" size={rsWidth(18)} color={theme.colors.secondary} />} onPress={() => navigation.navigate("Portfolio")} />
                </View>
            </View>

        </AppKeyboardAvoidView>
    )
}
