import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageSourcePropType,
} from 'react-native';
import { theme } from '../theme/theme';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { s, vs, rf } from '../theme/responsive';

interface EventCardProps {
    title: string;
    subtitle: string;
    imageSource?: ImageSourcePropType;
    location: string;
    description: string;
    features: string[];
    timestamp: string;
    onPress?: () => void;
    onLike?: () => void;
    onComment?: () => void;
    onShare?: () => void;
    isLiked?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
    title,
    subtitle,
    imageSource,
    location,
    description,
    features,
    timestamp,
    onPress,
    onLike,
    onComment,
    onShare,
    isLiked = false,
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.9}
        >
            {/* Event Image */}
            <View style={styles.imageContainer}>
                {imageSource ? (
                    <Image source={imageSource} style={styles.eventImage} resizeMode="cover" />
                ) : (
                    <View style={styles.placeholderGradient}>
                        <Text style={styles.placeholderText}>🎉</Text>
                        <Text style={styles.placeholderSubtext}>Event Image</Text>
                    </View>
                )}
            </View>

            {/* Event Details */}
            <View style={styles.contentContainer}>
                {/* Location */}
                <Text style={styles.location}>{location}</Text>

                {/* Description */}
                <Text style={styles.description}>{description}</Text>

                {/* Features */}
                <View style={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <Text style={styles.featureIcon}>
                                {getFeatureIcon(feature)}
                            </Text>
                            <Text style={styles.featureText}>{feature}</Text>
                        </View>
                    ))}
                </View>

                {/* Timestamp */}
                <Text style={styles.timestamp}>{timestamp}</Text>
            </View>
        </TouchableOpacity>
    );
};

// Helper function to get icons for features
const getFeatureIcon = (feature: string): string => {
    const iconMap: { [key: string]: string } = {
        'Signature Cocktails': '🍸',
        'Midnight Munchies': '🍟',
        'Live Dance Floor': '💃',
        'Insta-worthy moments guaranteed': '📸',
        'Free for Ladies': '👥',
        'Couples Walk-in Free': '💑',
    };

    return iconMap[feature] || '✨';
};

const styles = StyleSheet.create({
    // ... existing styles ...      
    placeholderGradient: {
        width: '100%', // Use full available width minus padding
        height: vs(196), // 228 - 32 (16px padding on top and bottom)
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
        borderRadius: s(8), // Slightly smaller than container border radius
    },

    placeholderText: {
        fontSize: rf(40),
        marginBottom: vs(8),
    },

    placeholderSubtext: {
        ...typography.caption,
        color: theme.colors.text,
        opacity: 0.7,
    },
    container: {
        borderRadius: s(16),
        marginHorizontal: s(4), // Reduced since we have screen-level padding
        marginVertical: vs(8),
        alignSelf: 'stretch', // Take available width instead of fixed width
        overflow: 'hidden',
        shadowColor: theme.colors.shadow,
        shadowOffset: {
            width: 0,
            height: vs(4),
        },
        shadowOpacity: 0.3,
        shadowRadius: s(8),
        elevation: 8,
    },

    imageContainer: {
        position: 'relative',
        width: '100%', // Use full available width
        height: vs(228),
        borderRadius: s(16),
        gap: s(10),
        opacity: 1,
        alignSelf: 'stretch',
        overflow: 'hidden',
    },

    eventImage: {
         width: '100%', // 370 - 32 (16px padding on each side)
        height: vs(196), // 228 - 32 (16px padding on top and bottom)
        borderRadius: s(8), // Slightly smaller than container border radius
    },

    actionButtons: {
        position: 'absolute',
        bottom: vs(32), // Adjusted for image container padding
        left: s(32), // Adjusted for image container padding
        flexDirection: 'row',
        gap: s(12),
    },

    actionButton: {
        backgroundColor: theme.colors.overlay,
        borderRadius: s(20),
        width: s(40),
        height: s(40),
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionIcon: {
        fontSize: rf(18),
    },


    location: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: typography.small.fontSize,
        lineHeight: typography.small.fontSize, // 100% line height (same as font size)
        letterSpacing: 0, // Static/Display Large/Tracking - assuming 0 for now
        color: '#FFFFFF',
        marginBottom: spacing.sm,
    },

    description: {
        ...typography.description,
        color: theme.colors.textSecondary,
        marginBottom: spacing.sm,
    },

    featuresContainer: {
        marginBottom: spacing.sm,
    },
    contentContainer:{
        marginBottom: spacing.lg
    },

    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    featureIcon: {
        ...typography.description,
        marginRight: spacing.sm,
    },

    featureText: {
        ...typography.description,
        color: theme.colors.textMuted,
    },

    timestamp: {
        ...typography.description,
        color: theme.colors.textMuted,
        marginTop: spacing.sm,
    },
});

export default EventCard; 