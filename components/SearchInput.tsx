import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { router, usePathname } from "expo-router";

type FormFieldType = {
  title?: string;
  value?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
  initialQuery?: any;
};

const SearchInput: React.FC<FormFieldType> = ({
  handleChangeText,
  keyboardType,
  otherStyles,
  title,
  placeholder,
  initialQuery,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [query, setQuery] = useState(initialQuery || "");

  const pathname = usePathname();
  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input a query to search the database with"
            );
          }
          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
