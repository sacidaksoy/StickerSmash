import { Image } from "expo-image";
import { type ImageSourcePropType } from "react-native";

export default function ImageViewer({
  imgSource,
}: {
  imgSource: ImageSourcePropType;
}) {
  return (
    <Image
      source={imgSource}
      style={{
        width: 320,
        height: 440,
        borderRadius: 18,
      }}
    />
  );
}
