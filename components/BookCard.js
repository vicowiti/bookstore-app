import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const BookCard = ({ data }) => {
  return (
    <Pressable style={{ width: "50%", marginVertical: 7 }}>
      <Image
        resizeMode="contain"
        source={{ uri: data?.imgUrl }}
        style={{ width: "100%", height: undefined, aspectRatio: 1 }}
      />
      <Text
        style={{ textAlign: "center", paddingHorizontal: 10, color: "white" }}
      >
        {data?.title}
      </Text>
    </Pressable>
  );
};

export default BookCard;
