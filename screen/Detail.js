import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  useColorScheme,
} from "react-native";
import styled from "@emotion/native";

import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { getImgPath, SCREEN_HEIGHT } from "../utill";

import { useQuery } from "react-query";
import { getDetail } from "../api";

export default function Detail({
  navigation: { navigate },
  route: {
    params: { cardId },
  },
}) {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const isDark = useColorScheme() === "dark";

  const { data, isLoading } = useQuery(["Detail", cardId], getDetail);
  // const API_KEY = "96b0378b0b6a672c7220f91a3bded15f";
  // const BASE_URL = "https://api.themoviedb.org/3/movie";
  // const getDetail = async () => {
  //   const response = await fetch(
  //     `${BASE_URL}/${cardId}?api_key=${API_KEY}&language=ko-Korean&append_to_response=videos`
  //   ).then((res) => res.json());

  //   setData(response);
  //   setIsLoading(false);
  // };

  const openYoutube = async (key) => {
    const url = `https://www.youtube.com/watch?v=${key}`;
    await Linking.openURL(url);
  };

  // useEffect(() => {
  //   getDetail();
  // }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <Container>
      <View>
        <BackdropImg
          style={StyleSheet.absoluteFill}
          source={{ uri: getImgPath(data.backdrop_path) }}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", "black"]}
        />
        <Title>{data.title}</Title>
      </View>
      <Overview>{data.overview}</Overview>
      <YoutubeList>
        {data?.videos?.results.map((video) => (
          <Row key={video.key} onPress={() => openYoutube(video.key)}>
            <AntDesign
              name="youtube"
              size={24}
              color={isDark ? "white" : "black"}
            />
            <VideoName>{video.name}</VideoName>
          </Row>
        ))}
      </YoutubeList>
      <SectionTitle>Reviews</SectionTitle>
      <AddReview onPress={() => {}}>
        <TempText>Add Review</TempText>
      </AddReview>
    </Container>
  );
}
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.ScrollView``;
const View = styled.View`
  height: ${SCREEN_HEIGHT / 4 + "px"};
  justify-content: flex-end;
`;
const BackdropImg = styled.Image`
  width: 100%;
  flex: 1;
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
`;
const Overview = styled.Text`
  color: ${(props) => props.theme.color.upcomingText};
  font-size: 15px;
  font-weight: 400;
  padding: 20px;
  line-height: 20px;
`;
const Row = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`;
const VideoName = styled.Text`
  color: ${(props) => props.theme.color.upcomingText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-left: 10px;
`;
const YoutubeList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const SectionTitle = styled.Text`
  color: ${(props) => props.theme.color.upcomingText};
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const AddReview = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
  border-color: ${(props) => props.theme.color.upcomingText};
`;
const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.color.upcomingText};
`;
