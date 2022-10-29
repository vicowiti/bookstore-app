import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BookStats from "../components/BookStats";

const BookDetails = (props) => {
  const { navigation, route } = props;
  const data = route.params.data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          backgroundColor: "#269984",
          position: "relative",
        }}
      >
        <Pressable
          style={{
            color: "white",
            position: "absolute",
            bottom: 20,
            left: 15,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={{ color: "white" }}>Back</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
          <Image
            source={{ uri: data.imgUrl }}
            style={{ height: 200, width: "50%", marginTop: 20 }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#111",
          }}
        >
          {data.title}
        </Text>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 15,
            color: "#996426",
            paddingVertical: 5,
          }}
        >
          {data.author}
        </Text>
        <BookStats data={data} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "700" }}>Description</Text>
          <Text
            style={{
              lineHeight: 25,
              fontSize: 17,
              marginBottom: 20,
            }}
          >
            {data.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetails;
