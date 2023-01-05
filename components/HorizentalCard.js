import { Image, Text, TouchableOpacity, View } from "react-native";
import { getImgPath } from "../utill";

export default function HorizentalCard({ card }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
      }}
    >
      <View style={{ width: 150, height: 300 }}>
        <Image
          style={{ flex: 3 }}
          source={{
            uri: getImgPath(card.poster_path),
          }}
        />
        <View style={{ padding: 20, backgroundColor: "white" }}>
          <Text>✨{card.vote_average}</Text>
          <Text>{card.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
