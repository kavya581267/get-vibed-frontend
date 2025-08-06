import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import { theme } from '../theme/theme';
import { spacing } from '../theme/spacing';

interface Event {
  id: string;
  title: string;
  subtitle: string;
  imageSource?: any;
  location: string;
  description: string;
  features: string[];
  timestamp: string;
}

interface EventFeedProps {
  events: Event[];
  onEventPress?: (eventId: string) => void;
  onLike?: (eventId: string) => void;
  onComment?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
}

const EventFeed: React.FC<EventFeedProps> = ({
  events,
  onEventPress,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          subtitle={event.subtitle}
          imageSource={event.imageSource}
          location={event.location}
          description={event.description}
          features={event.features}
          timestamp={event.timestamp}
          onPress={() => onEventPress?.(event.id)}
          onLike={() => onLike?.(event.id)}
          onComment={() => onComment?.(event.id)}
          onShare={() => onShare?.(event.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    
  },
});

export default EventFeed; 