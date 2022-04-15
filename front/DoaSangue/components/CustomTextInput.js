import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function CustomTextInput() {
	const [name, setName] = useState('');

	return (
		<View style={styles.container}>
			<TextInput placeholder="Name" onChangeText={(text)=>setName(text)} style={styles.input}/>
			{/* <Button title="Show name" onPress={()=>console.log(name)} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
