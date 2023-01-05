import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { getImgPath, SCREEN_HEIGHT } from "../utill";

export default function Slide({ movie }) {
    return (
        <SwiperStyle>
            <View
                style={{
                    height: 300,
                    flexDirection: "row",
                    alignItems: "flex-end",
                    backgroundColor: "red",
                    padding: 10,
                }}
            >
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{
                        uri: getImgPath(movie.backdrop_path),
                    }}
                />
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={["transparent", "black"]}
                />
                <Image
                    style={{
                        width: "30%",
                        height: "50%",
                    }}
                    source={{
                        uri: getImgPath(movie.poster_path),
                    }}
                />
                <View style={{ padding: 5, color: "white" }}>
                    <Text style={{ color: "white" }}>{movie.title}</Text>
                    <Text style={{ color: "white" }}>
                        ✨{movie.vote_average}/10
                    </Text>
                    <Text
                        style={{
                            color: "white",
                            overflow: "hidden",
                        }}
                    >
                        {movie.overview === ""
                            ? "해당 영화의 번역을 준비중입니다. 빠른 시일 내에 번역하겠습니다. 감사합니다"
                            : movie.overview}
                    </Text>
                </View>
            </View>
        </SwiperStyle>
    );
}

const SwiperStyle = styled.View`
    flex: 1;
    height: ${SCREEN_HEIGHT / 3 + "px"};
`;
