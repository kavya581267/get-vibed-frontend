import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontSize, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import CustomButton from "../../components/CustomButton";
import { theme } from "../../theme/theme";

type EventCardProps = {
    coverImage: string;
    venueName?: string;
    venueLocation?: string;
    rating?: number;
    dateTime?: string;
    eventType?: string;
    audienceSize?: string;
    compensation?: string;
    perks?: string[];
    onApply: () => void;
    onLocate: () => void;
};

export const EventCard: React.FC<EventCardProps> = ({
    coverImage,
    venueName,
    venueLocation,
    rating,
    dateTime,
    eventType,
    audienceSize,
    compensation,
    perks,
    onApply,
    onLocate,
}) => {
    return (
        <View style={{ paddingBottom: Spacing.xl, backgroundColor: "#021d15" }}>
            {/* Head */}
            <View style={{ paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row',paddingLeft:Spacing.md,paddingRight:Spacing.md }}>
                    <View>
                        <Image style={{ width: rsWidth(36), height: rsHeight(36) }}  source={require('../../../assets/Ellipse.png')} resizeMode="contain" />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: "white" , fontSize:FontSize.small,fontWeight:"600"}}>10 Downing Street, Begumpet</Text>
                        <Text style={{ color: theme.colors.input, fontSize:FontSize.tiny }}>2h ago</Text>
                    </View>
                </View>
            </View>

            <View>
                {/* Cover Image */}
                <Image style={{ width: rsWidth(402), height: rsWidth(239) }}  source={require('../../../assets/image1.png')}   resizeMode="cover" />
                <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={rsHeight(15)} color="#fff" />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", padding:Spacing.md,paddingBottom:0 }}>
                    <CustomButton style={{ width: rsWidth(170), height: rsHeight(32)}} textStyle={{fontSize:FontSize.tiny,fontWeight:"500"}} title="Apply to Perform" onPress={() =>  console.log(`Apply clicked for ${venueName}`)} />
                    <CustomButton style={{ width: rsWidth(170), height: rsHeight(32) }} textStyle={{fontSize:FontSize.tiny,fontWeight:"500"}} title="Locate" onPress={() => console.log("Locate")} />
                </View>                

                {/* Details */}
                <View style={styles.details}>
                    <Text style={styles.venue}>📍 Venue: {venueName}</Text>
                    <Text style={styles.venue}>📅 Date & Time: {dateTime}</Text>
                    <Text style={styles.venue}>🎤 Event Type: {eventType}</Text>
                    <Text style={styles.venue}>🎯 Audience Size: {audienceSize}</Text>
                    <Text style={styles.venue}>💰 Compensation: {compensation}</Text>
                </View>



                {/* Perks 
      <View style={styles.perks}>
        {perks.map((perk, i) => (
          <Text key={i}>• {perk}</Text>
        ))}
      </View>*/}


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#0C130E",
        borderRadius: 12,
        overflow: "hidden",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    venue: { fontSize: FontSize.tiny, paddingBottom: 8, color: theme.colors.input },
    ratingBadge: {
        position: "absolute",
        top: 6,
        right: 8,
        backgroundColor: "#4CAF50",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        width: rsWidth(50),
        height: rsHeight(27)
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4CAF50",
        paddingHorizontal: 6,
        borderRadius: 6,
    },
    ratingText: { color: "#fff", marginLeft: 3, fontSize: FontSize.small },
    location: { paddingHorizontal: Spacing.xs, color: "#555" },
    details: { padding: Spacing.md,paddingBottom:0 },
    perks: { paddingHorizontal: 10, paddingBottom: 10 },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: Spacing.xs,
    },
    applyBtn: {
        backgroundColor: "#2ecc71",
        padding: 10,
        borderRadius: 8,
        flex: 1,
        marginRight: 5,
        alignItems: "center",
    },
    locateBtn: {
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 8,
        flex: 1,
        marginLeft: 5,
        alignItems: "center",
    },
    btnText: { color: "#fff", fontWeight: "bold" },
});

export default EventCard;
