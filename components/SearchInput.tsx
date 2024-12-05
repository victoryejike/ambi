import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

type FormFieldType = {
  title?: string;
  value?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
};

const SearchInput: React.FC<FormFieldType> = ({
  handleChangeText,
  keyboardType,
  otherStyles,
  title,
  placeholder,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
