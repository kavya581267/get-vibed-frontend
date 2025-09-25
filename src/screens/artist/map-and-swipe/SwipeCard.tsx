import React from "react";
import { GradientBackground } from "../../../components/GradientBackground";
import TinderSwipe from "./TinderSwipe";

export default function SwipeCard() {
    const cards = [
        { id: 1, name: "Alice", age: 22, image: require("../../../../assets/swipe1.jpg"), bio:"hgjygyg"},
        { id: 2, name: "Bob", age: 25, image: require("../../../../assets/swipe2.jpg"), bio:"hgjh" },
        { id: 3, name: "Charlie", age: 28, image: require("../../../../assets/swipe3.jpg"),bio:"hgjygyg" },
        { id: 4, name: "Kavya", age: 24, image: require("../../../../assets/swipe1.jpg"),bio:"hgjygyg" },
        { id: 5, name: "Srikanth", age: 32, image: require("../../../../assets/image2.png"),bio:"hgjygyg" },
        { id: 6, name: "Sri", age: 18, image: require("../../../../assets/image1.png"),bio:"hgjygyg" },
    ];


    return (
        <GradientBackground>
            <TinderSwipe
                data={cards}
            />
        </GradientBackground>


    );
}


