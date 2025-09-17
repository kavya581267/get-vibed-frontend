import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, View } from "react-native";
import { FontSize, Radius, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";

export const applyToPerformHeader = (
  title: string = "Apply To Perform",
  currentStep: number,
  totalSteps: number
) =>
  ({ navigation }: any) => ({
    headerShown: true,
    headerTitle: "",
    headerStyle: { backgroundColor: "#021d15" },
    headerTintColor: "#fff",

    headerLeft: ({ canGoBack }: any) =>
      canGoBack ? (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={rsHeight(24)}
            color={theme.colors.secondary}
          />
          <Text
            style={{
              color:theme.colors.secondary,
              fontSize: FontSize.body,
              marginLeft: Spacing.tiny,
              fontWeight: "600",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ) : null,

    headerRight: () => (
      <View
        style={{
          backgroundColor: theme.colors.primary,
          width: rsWidth(42),
          height: rsHeight(27),
          borderRadius: Radius.xl,
          justifyContent:"center"
        }}
      >
        <Text
          style={{
            color: theme.colors.secondary,
            fontWeight: "500",
            fontSize: FontSize.tiny,
            alignSelf:"center"
          }}
        >
          {`${currentStep}/${totalSteps}`}
        </Text>
      </View>
    ),
  });
