import React from "react";
import { StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";

type Props = { onSetPhoneNumber: (text: string) => void };

const IntlTelInput: React.FC<Props> = ({ onSetPhoneNumber }) => {
  const [value, setValue] = React.useState("");
  const [, setFormattedValue] = React.useState("");
  const phoneInput = React.useRef<PhoneInput>(null);

  const onChangePhoneNumber = (number: string) => {
    setValue(number);
  };

  const onChangeFormattedText = (text: string) => {
    setFormattedValue(text);
    onSetPhoneNumber(text);
  };

  return (
    <PhoneInput
      ref={phoneInput}
      containerStyle={styles.container}
      codeTextStyle={styles.textInput}
      textInputStyle={styles.textInput}
      textContainerStyle={styles.textContainer}
      placeholder="Número de Teléfono"
      defaultValue={value}
      defaultCode="GT"
      onChangeText={onChangePhoneNumber}
      onChangeFormattedText={onChangeFormattedText}
      withDarkTheme
      autoFocus
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 12,
  },
  container: {
    marginLeft: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default IntlTelInput;
