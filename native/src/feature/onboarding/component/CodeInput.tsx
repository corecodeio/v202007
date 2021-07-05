import React, { useState } from "react";
import { Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";

export const CELL_COUNT = 6;

type Props = {
  onChangeText: (text: string) => void | undefined;
};

const CodeInput: React.FC<Props> = ({ onChangeText }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onSetVerificationCode = (code: string) => {
    onChangeText(code);
    setValue(code);
  };

  return (
    <CodeField
      {...props}
      ref={ref}
      value={value}
      onChangeText={onSetVerificationCode}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFiledRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default CodeInput;
