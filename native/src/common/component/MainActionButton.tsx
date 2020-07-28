import React from "react";
import styled from "styled-components/native";
import { color, space } from "styled-system";

const TouchableOpacity = styled.TouchableOpacity`
  ${color};
  ${space};
`;

const Text = styled.Text`
  ${color};
`;

export const MainActionButton = ({ title, titleColor, bg, p, m }) => (
  <TouchableOpacity bg={bg} p={p} m={m}>
    <Text color={titleColor}>{title}</Text>
  </TouchableOpacity>
);
