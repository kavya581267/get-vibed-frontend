import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { FontSize, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";

type EventCardProps = {
  image?: string;
  title: string;
  subText: string;
  date: string;
};

const UpcomingEventCard = ({title,subText,date}:EventCardProps) => (
    <Card style={{ borderRadius: 12, backgroundColor: "#0E0E16",marginBottom:Spacing.xs }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Left Image */}
            <Card.Cover

                source={require("../../assets/image1.png")}
                style={{
                    width: rsWidth(60),
                    height: rsWidth(80),
                    borderRadius: 12,
                }}
                resizeMode="cover"
            />

            {/* Right Content */}
            <Card.Content style={{ flex: 1 }}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.subText}>{subText}</Text>
                <Text style={styles.date}>{date}</Text>
            </Card.Content>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    text: {
        color: theme.colors.secondary,
        fontSize: FontSize.small,
        fontWeight: "500"
    },
    subText: {
        color: "#595959",
        fontSize: FontSize.small,
        fontWeight: "400",
        marginBottom:Spacing.xs
    },
    date: {
        color: theme.colors.secondary,
        fontSize: FontSize.small,
        fontWeight: "400"
    }

})

export default UpcomingEventCard;
