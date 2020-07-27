import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export const MainActionButton: React.FC<
  TouchableOpacityProps & { isVisible?: boolean }
> = ({ children, isVisible, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ backgroundColor: "black", padding: 21, marginTop: 20 }}
    >
      {isVisible && (
        <Text style={{ color: "#fff", textAlign: "center" }}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
