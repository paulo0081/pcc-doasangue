import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import SmallTextInput from '../components/SmallTextInput';
import Campaign from '../components/CampaignBox';

import {colors} from '../style/colors';

export default function CampaignScreen({ navigation }) {



	return (
		<View style={styles.container}>
            <View style={styles.campaignWrapper}>
                <Text style={styles.sectionTitle}>Campanhas próximas de você</Text>
                <View style={styles.itens}>
                    {/*Aqui é onde as campanhas irão*/}
                    <Campaign text={'Texto 1'}/>
                    <Campaign text={'Texto 2'}/>
                </View>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: colors.blueishWhite
    },
    campaignWrapper: {
        paddingTop: 60,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itens: {},
});