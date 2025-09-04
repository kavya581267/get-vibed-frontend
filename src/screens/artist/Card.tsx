
import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import EventCard from "./AppInfoCard";

interface Item {
    id: string;
    coverImage: string;
    venueName: string;
    venueLocation: string;
    rating: number;
    dateTime: string;
    eventType: string;
    audienceSize: string;
    compensation: string;
    perks: string[];
}

export default function Card() {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Example API – replace with your backend
        fetch("https://mocki.io/v1/471e4dff-daf3-49f1-8a10-28059a796fb5")
            .then((res) => res.json())
            .then((json) => {
               
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#021d15" }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EventCard
                        coverImage={item.coverImage}
                        venueName={item.venueName}
                        venueLocation={item.venueLocation}
                        rating={item.rating}
                        dateTime={item.dateTime}
                        eventType={item.eventType}
                        audienceSize={item.audienceSize}
                        compensation={item.compensation}
                        perks={item.perks}
                        onApply={() => console.log(`Apply clicked for ${item.venueName}`)}
                        onLocate={() => console.log(`Locate clicked for ${item.venueName}`)}
                    />
                )}
            />
        </View>
    );
}
