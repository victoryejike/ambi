import { Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledText = styled(Text);
const StyledView = styled(View);

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-3xl font-pblack">Ambi!</StyledText>
      <Link href="/home" className="text-blue-500 underline">
        Go to new screen
      </Link>
    </StyledView>
  );
};

export default App;
