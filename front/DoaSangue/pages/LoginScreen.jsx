import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import SmallTextInput from '../components/SmallTextInput';

import {colors} from '../style/colors';

export default function LoginScreen({ navigation }) {
	const [nameMain, setNameMain] = useState('');
	const [passMain, setPassMain] = useState('');
	const [passWrong, setPassWrong] = useState(false);

	user = {
		email: 'email@mousse.com',
		pass: 'pass123',
	}

	function validateUser() {
		if (nameMain == user.email && passMain == user.pass) {
			navigation.navigate('HomeScreen');
		} else { // Login invalidated
			setPassWrong(true);
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Bem vindo(a)!</Text>
			<Text style={styles.subHeader}>Entre na sua conta</Text>

			<SmallTextInput label={'Usuário'} isPassword={false} updateVar={(text) => setNameMain(text)} style={styles.textInput} invalidInput={passWrong} />
			<SmallTextInput label={'Senha'} isPassword={true} updateVar={(text) => setPassMain(text)} style={styles.textInput} invalidInput={passWrong}/>

			<View style={styles.secView}>
				{!passWrong ? null : <Text>Email ou senha incorretos</Text>}
				<Button mode="text" color={colors.lightRed} onPress={() => validateUser()} style={styles.buttonBig}>Esqueci a senha</Button>
				<Button mode="contained" color={colors.red} onPress={() => validateUser()} style={styles.buttonSmall}>Log in</Button>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		justifyContent: 'center',
	},
	secView: {
		alignItems: 'center',
		// justifyContent: 'center',
		textAlign: 'center',
		marginTop: 50,
	},
	buttonBig: {
		marginTop: 10,
		width: 175,
	},
	buttonSmall: {
		marginTop: 10,
		width: 100,
	},
	header: {
		textAlign: 'center',
		fontSize: 28,
		fontWeight: 'bold',
	},
	subHeader: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 50,
		// fontWeight: 'bold',
	},
	textInput: {
		width: 300,
		alignSelf: 'center',
	}
});
