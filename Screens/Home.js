import { View, Text, FlatList, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useApi } from "../hooks/useApi";
import Loader from "../components/Loader";
import BookCard from "../components/BookCard";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { getBooks } = useApi();
  let filteredData = data;

  if (query) {
    filteredData = data.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  const handleToggle = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const loadData = async () => {
      let bookData = await getBooks();

      setData(bookData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: showSearch ? 150 : 90,
          backgroundColor: "#269984",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            paddingRight: 20,
            marginTop: 30,
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: "30%", height: 40 }}
            resizeMode="contain"
          />
          {showSearch ? (
            <MaterialIcons
              name="cancel"
              size={24}
              color="white"
              onPress={handleToggle}
            />
          ) : (
            <AntDesign
              name="search1"
              size={30}
              color="white"
              onPress={handleToggle}
            />
          )}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {showSearch && (
            <TextInput
              placeholder="Search for book"
              style={{
                // position: "re",
                padding: 10,
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 3,
                width: "90%",
                height: 50,
                backgroundColor: "#fff",
              }}
              onChangeText={setQuery}
            />
          )}
        </View>
      </View>
      <StatusBar />
      {isLoading && <Loader />}
      <FlatList
        data={filteredData}
        key="_"
        renderItem={({ item }) => <BookCard data={item} />}
        keyExtractor={(item) => "_" + item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
