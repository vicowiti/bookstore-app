import { View, Text, FlatList, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useApi } from "../hooks/useApi";
import Loader from "../components/Loader";
import BookCard from "../components/BookCard";

const Home = () => {
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
          height: 120,
          backgroundColor: "#269984",
        }}
      >
        {/* <Image /> */}
        <TextInput
          placeholder="Search for book"
          style={{
            position: "absolute",
            bottom: 5,

            left: 12,
            borderRadius: 50,
            padding: 7,
            width: "70%",
            backgroundColor: "#98d6cb",
          }}
          onChangeText={setQuery}
        />
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
