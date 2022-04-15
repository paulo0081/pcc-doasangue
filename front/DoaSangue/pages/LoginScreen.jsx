import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SmallTextInput from '../components/SmallTextInput';

export default function LoginScreen(props) {
	const [nameMain, setNameMain] = useState('');
	const [passMain, setPassMain] = useState('');

	return (
		<View>
			<Text>Mousse</Text>

			<SmallTextInput label={'Username'} isPassword={false} updateVar={(text) => setNameMain(text)} />
			<SmallTextInput label={'Password'} isPassword={true} updateVar={(text) => setPassMain(text)} />

			<Text>M {"->"} {nameMain}</Text>
			<Text>Pass {"->"} {passMain}</Text>

		</View>
	);
}

const styles = StyleSheet.create({
	input: {},
});
