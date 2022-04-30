import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import SmallTextInput from '../components/SmallTextInput';

export default function HomeScreen({ navigation, route }) {
	const [nameMain, setNameMain] = useState('');
	const [passMain, setPassMain] = useState('');

	return (
		<View>
			<Text>{navigation.name}</Text>

			<Button mode="contained" onPress={() => navigation.navigate('LoginScreen', {name:'mousse'}) }>
				Press me
			</Button>

		</View>
	);
}

const styles = StyleSheet.create({
	input: {},
});
