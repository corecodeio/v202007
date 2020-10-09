import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

type Props = { onSetPhoneNumber: (text: string) => void };

const IntlTelInput: React.FC<Props> = ({ onSetPhoneNumber }) => {
	const [value, setValue] = useState('');
	const [formattedValue, setFormattedValue] = useState('');
	const [valid, setValid] = useState(false);
	const phoneInput = useRef<PhoneInput>(null);

	const onChangePhoneNumber = (number: string) => {
		setValue('+502' + number);
		{
			const checkValid = phoneInput.current?.isValidNumber(number);
			setValid(checkValid ? checkValid : false);

			phoneInput.current?.isValidNumber(number) ? onSetPhoneNumber('+502' + number) : onSetPhoneNumber('');
		}
	};

	return (
		<PhoneInput
			containerStyle={styles.container}
			codeTextStyle={styles.textInput}
			textInputStyle={styles.textInput}
			textContainerStyle={styles.textContainer}
			placeholder="Número de Teléfono"
			ref={phoneInput}
			defaultValue={value}
			defaultCode="GT"
			onChangeText={onChangePhoneNumber}
			onChangeFormattedText={(text) => {
				setFormattedValue(text);
			}}
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
});

export default IntlTelInput;
