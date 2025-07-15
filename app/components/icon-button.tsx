import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text } from "react-native";

export default function IconButton({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text
        style={{
          color: "#fff",
          marginTop: 12,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
