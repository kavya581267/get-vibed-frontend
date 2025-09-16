// navigationOptions.ts
import { Ionicons } from "@expo/vector-icons"; // or any icon lib you use
import { TouchableOpacity, Text} from "react-native";
import { FontSize, rsHeight, Spacing } from "../theme/responsive";

export const applyToPerformHeader = (title: string = "Apply To Perform") =>  ({ navigation }: any) =>  ({
  headerShown: true,
  headerTitle: "", // removes center "ContactDetails"
  headerStyle: { backgroundColor: "#021d15" },
  headerTintColor: "#fff",
  headerLeft: ({ tintColor, canGoBack }: any) =>
    canGoBack ? (
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={rsHeight(24)} color={tintColor || "#fff"} />
        <Text style={{ color: tintColor || "#fff", fontSize: FontSize.body, marginLeft: Spacing.tiny,fontWeight:"600" }}>
          {title}
        </Text>
      </TouchableOpacity>
    ) : null,
});
