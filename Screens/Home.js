import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useApi } from "../hooks/useApi";
import Loader from "../components/Loader";
import BookCard from "../components/BookCard";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { getBooks } = useApi();

  useEffect(() => {
    const loadData = async () => {
      let bookData = await getBooks();

      setData(bookData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 25, backgroundColor: "#777" }}>
      <StatusBar />
      {isLoading && <Loader />}
      <FlatList
        data={data}
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
