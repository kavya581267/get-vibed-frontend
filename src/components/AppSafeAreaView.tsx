import { Platform, StatusBar, StyleProp, ViewStyle } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";



interface AppSafeAreaViewProps {
    children: React.ReactNode;
    backgroundColor?: string;
    statusBarStyle?: 'light-content' | 'dark-content';
    style?: StyleProp<ViewStyle>;
}


const AppSafeAreaView: React.FC<AppSafeAreaViewProps> = ({
    children,
    backgroundColor = '#fff',
    statusBarStyle = 'dark-content',
    style = {},
}) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={[
                {
                    flex: 1,
                    backgroundColor,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : insets.top,
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