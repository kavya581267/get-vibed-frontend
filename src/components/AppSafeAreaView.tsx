import { Platform, StatusBar, StyleProp, ViewStyle } from "react-native";
import {  SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


interface AppSafeAreaViewProps {
    children: React.ReactNode;
    backgroundColor?: string;
    statusBarStyle?: 'light-content' | 'dark-content';
    style?: StyleProp<ViewStyle>;
    testID?: string;
}


const AppSafeAreaView: React.FC<AppSafeAreaViewProps> = ({
    children,
    //backgroundColor = '#021d15',
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
                       // backgroundColor,
                        paddingTop: Platform.OS === 'android' ? insets.top : 0,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
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