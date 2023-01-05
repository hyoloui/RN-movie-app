import { Image, Text, View } from "react-native";
import { getImgPath, untranslated } from "../utill";

export default function VerticalCard({ card }) {
    return (
        <View
            key={card.id}
            style={{
                flex: 1,
                height: 250,
                borderWidth: 3,
                borderColor: "green",
                flexDirection: "row",
            }}
        >
            <Image
                style={{ width: 150, height: 200 }}
                source={{
                    uri: getImgPath(card.poster_path),
                }}
            />
            <View>
                <Text>{card.title}</Text>
                <Text>{card.release_date}</Text>
                <Text>
                    {card.overview === "" ? untranslated() : card.overview}
                </Text>
            </View>
        </View>
    );
}
