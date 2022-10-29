import {  Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BookStats = ({ data }) => {
  return (
    <View style={{ paddingHorizontal: 15, width: "100%", paddingVertical: 25 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={24}
          color="black"
          style={{ paddingRight: 5 }}
        />
        <Text>{data.pages} Pages</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <AntDesign
          name="exception1"
          size={24}
          color="black"
          style={{ paddingRight: 5 }}
        />

        <Text>ISBN - {data.isbn} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <MaterialIcons
          name="house"
          size={24}
          color="black"
          style={{ paddingRight: 5 }}
        />
        <Text>{data.publisher} Pages</Text>
      </View>
    </View>
  );
};

export default BookStats;


