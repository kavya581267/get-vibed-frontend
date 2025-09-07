import { StyleSheet, View } from "react-native";
import UpcomingEventCard from "../../../components/CustomUpcomingEventCard";


export default function EventsRoute() {
    return (
        <View style={styles.scene}>
            <UpcomingEventCard title="Prime Friday Festival" subText="ITC Grand Chota, Chennai" date="16 Sep'25   8:00PM onwards"/>
            <UpcomingEventCard title="Prime Friday Festival" subText="ITC Grand Chota, Chennai" date="16 Sep'25   8:00PM onwards"/>
           
        </View>
    )
}

export const styles = StyleSheet.create({
    scene: { flex: 1, backgroundColor: "#000", padding: 16 },

})
