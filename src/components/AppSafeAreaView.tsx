import { Platform, StatusBar, StyleProp, ViewStyle } from "react-native";
import {  SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../theme/theme";
import { spacing } from "../theme/spacing";


interface AppSafeAreaViewProps {
    children: React.ReactNode;
    backgroundColor?: string;
    statusBarStyle?: 'light-content' | 'dark-content';
    style?: StyleProp<ViewStyle>;
    testID?: string;
}


const AppSafeAreaView: React.FC<AppSafeAreaViewProps> = ({
    children,
    backgroundColor = theme.colors.background,
    statusBarStyle = 'light-content',
    style = {},
    testID,
}) => {
    const insets = useSafeAreaInsets();

    return (
            <SafeAreaView
                testID={testID}
                style={[
                    {
                        flex: 1,
                        backgroundColor,
                        paddingTop: Platform.OS === 'android' ? insets.top : 0,
                        paddingLeft: spacing.sm,
                        paddingRight: spacing.sm,
                    },
                    style,
                ]}
            >
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle={statusBarStyle}
                />
                {children}
            </SafeAreaView>
    );
};

export default AppSafeAreaView;