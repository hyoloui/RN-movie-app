import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCard";
import { useQuery, useQueryClient } from "react-query";
import { getNowPlaying, getTopRated, getUpcoming } from "../api";

export default function Movies({ navigation: { navigate } }) {
  // const [nowPlayings, setNowPlayings] = useState([]);
  // const [topRated, setTopRated] = useState([]);
  // const [upcoming, setUpcoming] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  // const BASE_URL = "https://api.themoviedb.org/3/movie";
  // const API_KEY = "96b0378b0b6a672c7220f91a3bded15f";

  const { data: nowPlayingData, isLoading: isLoadingNP } = useQuery(
    ["Movies", "NowPlaying"],
    getNowPlaying
  );
  const { data: topRatedData, isLoading: isLoadingTR } = useQuery(
    ["Movies", "TopRated"],
    getTopRated
  );
  const { data: upComingData, isLoading: isLoadingUC } = useQuery(
    ["Movies", "Upcoming"],
    getUpcoming
  );

  // const getNowPlayings = async () => {
  //   const { results } = await fetch(
  //     `${BASE_URL}/now_playing?api_key=${API_KEY}&language=ko-Korean&page=1`
  //   ).then((res) => res.json());
  //   setNowPlayings(results);
  // };

  // const getTopRated = async () => {
  //   const { results } = await fetch(
  //     `${BASE_URL}/top_rated?api_key=${API_KEY}&language=ko-Korean&page=1`
  //   ).then((res) => res.json());
  //   setTopRated(results);
  // };
  // const getUpcoming = async () => {
  //   const { results } = await fetch(
  //     `${BASE_URL}/upcoming?api_key=${API_KEY}&language=ko-Korean&page=1`
  //   ).then((res) => res.json());
  //   setUpcoming(results);
  // };
  // const getData = async () => {
  //   await Promise.all([getNowPlayings(), getTopRated(), getUpcoming()]);
  //   setIsLoading(false);
  // };
  const isLoading = isLoadingNP || isLoadingTR || isLoadingUC;

  const onRefresh = async () => {
    /* 스크롤 아래로 당겨서 새로고침 */
    setIsRefreshing(true);
    await queryClient.refetchQueries(["Movies"]);
    setIsRefreshing(false);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  return (
    <FlatList
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={upComingData.results}
      renderItem={({ item }) => <VerticalCard card={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
      ListHeaderComponent={
        <>
          <Swiper height="100%" autoplay loop showsPagination={false}>
            {nowPlayingData.results.map((card) => (
              <Slide key={card.id} card={card} />
            ))}
          </Swiper>

          <SectionTitle>Top Rated Movies</SectionTitle>
          {/* 사이드 스크롤 */}
          {/* <FlatList keyExtractor={} data={} renderItem={}/> // FlatList 기본값*/}
          <FlatList
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
            keyExtractor={(item) => item.id}
            data={topRatedData.results}
            renderItem={({ item }) => <HorizontalCard card={item} />}
          />
          {/* <ScrollView horizontal={true}>{topRated.map()}</ScrollView> */}

          <SectionTitle>Upcoming Movies</SectionTitle>
          {/* 세로 스크롤 */}
        </>
      }
    />
  );
}

const SectionTitle = styled.Text`
  font-size: 20px;
  padding: 10px;
  color: ${(props) => props.theme.title};
  background-color: blue;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
