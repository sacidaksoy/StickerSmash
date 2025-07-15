import { type ImageSourcePropType, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Button from "../components/button";
import CircleButton from "../components/circle-button";
import EmojiList from "../components/emoji-list";
import EmojiPicker from "../components/emoji-picker";
import EmojiSticker from "../components/emoji-sticker";
import IconButton from "../components/icon-button";
import ImageViewer from "../components/image-viewer";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageViewer imgSource={selectedImg || PlaceholderImage} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>

      {showAppOptions ? (
        <View
          style={{
            position: "absolute",
            bottom: 80,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1 / 3,
            alignItems: "center",
          }}
        >
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}
