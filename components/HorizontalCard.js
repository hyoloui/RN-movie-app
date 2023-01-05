import { useNavigation } from "@react-navigation/native";
import { getImgPath } from "../utill";
import styled from "@emotion/native";

export default function HorizontalCard({ card }) {
  const { navigate } = useNavigation();
  return (
    <Hcard
      key={card.id}
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { cardId: card.id } })
      }
    >
      <HcardImg
        source={{
          uri: getImgPath(card.poster_path),
        }}
      />
      <HcardContents>
        <HcardText>✨{card.vote_average}/10</HcardText>
        <HcardText>
          {card.title.slice(0, 8)}
          {card.title.length > 8 && "..."}
        </HcardText>
      </HcardContents>
    </Hcard>
  );
}

const Hcard = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
`;

const HcardImg = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const HcardContents = styled.View`
  padding: 10px;
`;

const HcardText = styled.Text`
  color: white;
`;
