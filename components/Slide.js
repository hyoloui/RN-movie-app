import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { getImgPath, SCREEN_HEIGHT, untranslated } from "../utill";

export default function Slide({ movie }) {
  return (
    <SwiperStyle>
      <Swiperbackground
        style={StyleSheet.absoluteFill}
        source={{
          uri: getImgPath(movie.backdrop_path),
        }}
      />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={["transparent", "black"]}
      />
      <SwiperTouchableOpacity>
        <Poster
          source={{
            uri: getImgPath(movie.poster_path),
          }}
        />
        <Column>
          <Title style={{ color: "white" }}>{movie.title}</Title>
          <Overview style={{ color: "white" }}>
            ✨{movie.vote_average}/10
          </Overview>
          <Rating
            style={{
              color: "white",
              overflow: "hidden",
            }}
          >
            {movie.overview === "" ? untranslated() : movie.overview}
            {movie.overview.length > 5 && "..."}
          </Rating>
        </Column>
      </SwiperTouchableOpacity>
    </SwiperStyle>
  );
}

const SwiperStyle = styled.View`
  flex: 1;
  height: ${SCREEN_HEIGHT / 3 + "px"};
`;

const SwiperTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
`;

const Swiperbackground = styled.Image`
  width: 100%;
  height: 100%;
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
`;

const Column = styled.View`
  width: 70%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Overview = styled.Text`
  font-size: 12px;
  color: white;
`;

const Rating = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  color: white;
`;
