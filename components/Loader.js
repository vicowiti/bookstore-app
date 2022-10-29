import { ActivityIndicator, Text, View } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <ActivityIndicator size={`large`} color="#111" />
      <Text>Loading ...</Text>
    </View>
  );
}
