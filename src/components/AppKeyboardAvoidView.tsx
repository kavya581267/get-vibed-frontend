import { ReactNode } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ViewStyle } from "react-native";

interface KeyboardWrapperProps {
    children: ReactNode;
    style?: ViewStyle | ViewStyle[];
}

export const AppKeyboardAvoidView: React.FC<KeyboardWrapperProps> = ({ children, style }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView style={style} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}>
                {children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
};