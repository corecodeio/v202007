import React from "react";
import styled from "styled-components/native";
import { color, space } from "styled-system";
import { Text } from "./Typography";

const TouchableOpacity = styled.TouchableOpacity`
  ${color};
  ${space};
`;

export const MainActionButton = ({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
