import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useApi } from "./hooks/useApi";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { getBooks } = useApi();

  useEffect(() => {
    let bookData = getBooks();
    setData(bookData);
    setLoading(false);
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>We up!</Text>
    </View>
  );
}
