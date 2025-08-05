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
  imageSource: ImageSourcePropType;
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
        <Image source={imageSource} style={styles.eventImage} resizeMode="cover" />
        
        {/* Action Buttons Overlay */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onLike}
          >
            <Text style={styles.actionIcon}>
              {isLiked ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onComment}
          >
            <Text style={styles.actionIcon}>💬</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={onShare}
          >
            <Text style={styles.actionIcon}>↗️</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: s(16),
    marginHorizontal: s(16),
    marginVertical: vs(8),
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
    height: vs(200),
  },
  
  eventImage: {
    width: '100%',
    height: '100%',
  },
  
  actionButtons: {
    position: 'absolute',
    bottom: vs(16),
    left: s(16),
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
  
  contentContainer: {
    padding: spacing.md,
  },
  
  location: {
    ...typography.title,
    color: theme.colors.text,
    fontWeight: '600',
    marginBottom: vs(8),
  },
  
  description: {
    ...typography.bodyText,
    color: theme.colors.textSecondary,
    lineHeight: vs(20),
    marginBottom: vs(16),
  },
  
  featuresContainer: {
    marginBottom: vs(12),
  },
  
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(6),
  },
  
  featureIcon: {
    fontSize: rf(14),
    marginRight: s(8),
  },
  
  featureText: {
    ...typography.bodySmall,
    color: theme.colors.textMuted,
  },
  
  timestamp: {
    ...typography.caption,
    color: theme.colors.textMuted,
    marginTop: vs(8),
  },
});

export default EventCard; 