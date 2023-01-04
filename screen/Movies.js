import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";

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

export default function Movies({ navigation: { navigate } }) {
    const [nowPlayings, setNowPlayings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const BASE_URL = "https://api.themoviedb.org/3/movie";
    const API_KEY = "96b0378b0b6a672c7220f91a3bded15f";
    const getNowPlayings = async () => {
        const { results } = await fetch(
            `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        ).then((res) => res.json());
        setNowPlayings(results);
        setIsLoading(false);
    };
    useEffect(() => {
        getNowPlayings();
    }, []);

    if (isLoading) {
        return (
            <Loader>
                <ActivityIndicator />
            </Loader>
        );
    }
    return (
        <>
            <ScrollView
                style={{
                    borderWidth: 3,
                    borderColor: "red",
                }}
            >
                <Swiper height="100%" autoplay loop showsPagination={false}>
                    {nowPlayings.map((movie) => (
                        <Slide key={movie.id} movie={movie} />
                    ))}
                </Swiper>

                <SectionTitle>Top Rated Movies</SectionTitle>
                {/* 사이드 스크롤 */}
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 180, height: 400, padding: 10 }}>
                            <Image
                                style={{ width: "100%", height: "70%" }}
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
                                }}
                            />
                            <View
                                style={{
                                    padding: 20,
                                    backgroundColor: "yellow",
                                }}
                            >
                                <Text>👀 56,984</Text>
                                <Text>The Godfather</Text>
                            </View>
                        </View>
                        <View style={{ width: 180, height: 400, padding: 10 }}>
                            <Image
                                style={{ width: "100%", height: "70%" }}
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
                                }}
                            />
                            <View
                                style={{
                                    padding: 20,
                                    backgroundColor: "yellow",
                                }}
                            >
                                <Text>👀 56,984</Text>
                                <Text>The Godfather</Text>
                            </View>
                        </View>
                        <View style={{ width: 180, height: 400, padding: 10 }}>
                            <Image
                                style={{ width: "100%", height: "70%" }}
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
                                }}
                            />
                            <View
                                style={{
                                    padding: 20,
                                    backgroundColor: "yellow",
                                }}
                            >
                                <Text>👀 56,984</Text>
                                <Text>The Godfather</Text>
                            </View>
                        </View>
                        <View style={{ width: 180, height: 400, padding: 10 }}>
                            <Image
                                style={{ width: "100%", height: "70%" }}
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
                                }}
                            />
                            <View
                                style={{
                                    padding: 20,
                                    backgroundColor: "yellow",
                                }}
                            >
                                <Text>👀 56,984</Text>
                                <Text>The Godfather</Text>
                            </View>
                        </View>
                        <View style={{ width: 180, height: 400, padding: 10 }}>
                            <Image
                                style={{ width: "100%", height: "70%" }}
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
                                }}
                            />
                            <View
                                style={{
                                    padding: 20,
                                    backgroundColor: "yellow",
                                }}
                            >
                                <Text>👀 56,984</Text>
                                <Text>The Godfather</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <SectionTitle>Upcoming Movies</SectionTitle>
                {/* 세로 스크롤 */}
                <View>
                    <View
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
                                uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
                            }}
                        />
                        <View>
                            <Text>Movie Title</Text>
                            <Text>2022-12-02</Text>
                            <Text>
                                더미 텍스트, asodivnkj okasdnvklxjzclkvj
                                ,mnasdkjlv nxzklcjvnd
                                jhzxkcjvjwheuifhasdmkvskdvn,xzc ojaskdjfa;skdjfw
                                nxzklcjvnd jhzxkcjvjwheuifhasdmkvskdvn,xzc
                                ojaskdjfa;skdjfw
                            </Text>
                        </View>
                    </View>
                    <View
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
                                uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
                            }}
                        />
                        <View>
                            <Text>Movie Title</Text>
                            <Text>2022-12-02</Text>
                            <Text>
                                더미 텍스트, asodivnkj okasdnvklxjzclkvj
                                ,mnasdkjlv nxzklcjvnd
                                jhzxkcjvjwheuifhasdmkvskdvn,xzc ojaskdjfa;skdjfw
                                nxzklcjvnd jhzxkcjvjwheuifhasdmkvskdvn,xzc
                                ojaskdjfa;skdjfw
                            </Text>
                        </View>
                    </View>
                    <View
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
                                uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
                            }}
                        />
                        <View>
                            <Text>Movie Title</Text>
                            <Text>2022-12-02</Text>
                            <Text>
                                더미 텍스트, asodivnkj okasdnvklxjzclkvj
                                ,mnasdkjlv nxzklcjvnd
                                jhzxkcjvjwheuifhasdmkvskdvn,xzc ojaskdjfa;skdjfw
                                nxzklcjvnd jhzxkcjvjwheuifhasdmkvskdvn,xzc
                                ojaskdjfa;skdjfw
                            </Text>
                        </View>
                    </View>
                    <View
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
                                uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
                            }}
                        />
                        <View>
                            <Text>Movie Title</Text>
                            <Text>2022-12-02</Text>
                            <Text>
                                더미 텍스트, asodivnkj okasdnvklxjzclkvj
                                ,mnasdkjlv nxzklcjvnd
                                jhzxkcjvjwheuifhasdmkvskdvn,xzc ojaskdjfa;skdjfw
                                nxzklcjvnd jhzxkcjvjwheuifhasdmkvskdvn,xzc
                                ojaskdjfa;skdjfw
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
