import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledView = styled(View);

const AuthLayout = () => {
  return (
    <StyledView>
      <StyledText>AuthLayout</StyledText>
    </StyledView>
  );
};

export default AuthLayout;
