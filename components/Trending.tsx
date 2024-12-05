import { View, Text, FlatList } from "react-native";
import React from "react";

type TrendingPropTypes = {
  posts?: any[];
};

const Trending: React.FC<TrendingPropTypes> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
