import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import SmallTextInput from '../components/SmallTextInput';

export default function HomeScreen({ navigation, route }) {
	const [nameMain, setNameMain] = useState('');
	const [passMain, setPassMain] = useState('');

	return (
		<View style={styles.container}>
			<Text>{navigation.name}</Text>

			<Button style={styles.button} mode="contained" onPress={() => navigation.navigate('LoginScreen', {name:'login'}) }>
				Login
			</Button>
			<Button style={styles.button} mode="contained" onPress={() => navigation.navigate('CampaignScreen', {name:'campaign'}) }>
				Campanhas
			</Button>
			<Button style={styles.button} mode="contained" onPress={() => navigation.navigate('MapScreen', {name:'map'}) }>
				Mapa
			</Button>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		padding: 10,
		margin: 10,
	},
});
