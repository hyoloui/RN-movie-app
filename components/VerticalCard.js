import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { getImgPath, untranslated } from "../utill";

export default function VerticalCard({ card }) {
  const { navigate } = useNavigation();
  return (
    <Vcard
      key={card.id}
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { cardId: card.id } })
      }
    >
      <VcardImg
        source={{
          uri: getImgPath(card.poster_path),
        }}
      />
      <View>
        <Text>{card.title}</Text>
        <Text>{card.release_date}</Text>
        <Text>{card.overview === "" ? untranslated() : card.overview}</Text>
      </View>
    </Vcard>
  );
}

const Vcard = styled.TouchableOpacity`
  flex-direction: row;
`;
const VcardImg = styled.Image`
  width: 150px;
  height: 200px;
`;
