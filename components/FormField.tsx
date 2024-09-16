import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

type FormFieldType = {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
  keyboardType?: string;
  placeholder: string;
};

const FormField: React.FC<FormFieldType> = ({
  handleChangeText,
  keyboardType,
  otherStyles,
  title,
  placeholder,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
