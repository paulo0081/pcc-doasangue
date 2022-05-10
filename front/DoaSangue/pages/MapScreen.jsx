import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

import SmallTextInput from '../components/SmallTextInput';
import { colors } from '../style/colors';

export default function MapScreen({ navigation, route }) {
	return (
		<View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../assets/maps.png')}
            />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: colors.blueishWhite,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 300,
        width: 200,
        
    }
});
