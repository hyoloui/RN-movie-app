import { Image, Text, View } from "react-native";
import { getImgPath } from "../utill";

export default function HorizentalCard({ card }) {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ width: 180, height: 400, padding: 10 }}>
                <Image
                    style={{ width: "100%", height: "70%" }}
                    source={{
                        uri: getImgPath(card.poster_path),
                    }}
                />
                <View
                    style={{
                        padding: 20,
                        backgroundColor: "syellow",
                    }}
                >
                    <Text>✨{card.vote_average}</Text>
                    <Text>{card.title}</Text>
                </View>
            </View>
        </View>
    );
}
