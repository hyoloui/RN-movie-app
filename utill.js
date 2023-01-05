import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("window");

export const getImgPath = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
};

export const untranslated = () => {
    return `해당 영화의 줄거리는 번역을 준비중입니다.
빠른 시일 내에 번역하겠습니다. 감사합니다`;
};
