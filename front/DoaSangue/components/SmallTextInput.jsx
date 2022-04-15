import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TextInput } from 'react-native-paper';

import { Provider as PaperProvider } from "react-native-paper";

export default function SmallTextInput(props) {
	return (
		<View >
			<TextInput
				label={props.label}
				onChangeText={text =>props.updateVar(text)}
				// style={styles.input}
				secureTextEntry={props.isPassword}
				mode='outlined'
				activeOutlineColor='#f0d'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {},
});
