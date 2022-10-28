import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import BookCard from "./components/BookCard";
import Loader from "./components/Loader";
import { useApi } from "./hooks/useApi";

export default function App() {
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
  console.log("data", data);
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
}
