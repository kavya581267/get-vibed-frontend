import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    BottomTabBarProps,
    BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

type Props = BottomTabBarProps;

const CustomBottomTabBar: React.FC<Props> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    let iconName: string;
                    switch (route.name) {
                        case 'Events':
                            iconName = 'calendar-outline';
                            break;
                        case 'Discover':
                            iconName = 'search-outline';
                            break;
                        case 'Notifications':
                            iconName = 'notifications-outline';
                            break;
                        case 'Profile':
                            iconName = 'person-outline';
                            break;
                        default:
                            iconName = 'ellipse-outline';
                    }

                    const onPress = (e: GestureResponderEvent) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const isCenter = route.name === 'Notifications';

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            style={isCenter ? styles.centerButtonWrapper : styles.tabButton}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                        >
                            <View style={isCenter ? styles.centerButton : undefined}>
                                <Icon
                                    name={iconName}
                                    size={isCenter ? 28 : 22}
                                    color={isFocused ? '#fff' : '#888'}
                                />
                            </View>
                            {!isCenter && (
                                <Text style={[styles.label, isFocused && { color: '#fff' }]}>
                                    {route.name}
                                </Text>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default CustomBottomTabBar;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        width: "90%",
        backgroundColor: 'rgba(44, 39, 39, 0.9)',
        borderRadius: 40,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
        bottom: 25,
    },
    tabButton: {
        alignItems: 'center',
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    centerButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    centerButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
