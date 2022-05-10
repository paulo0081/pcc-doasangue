import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../style/colors';

const Campaign = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.campaignLogo}></TouchableOpacity>
                    <View style={styles.itemRight}>
                        <Text style={styles.itemText}>{props.text}</Text>
                        <Text style={styles.itemText}>{props.text}</Text>
                    </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.lightBlue,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    campaignLogo: {
        width: 150,
        height: 70,
        backgroundColor: colors.lightRed,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    itemRight: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: 150,
    }
});

export default Campaign;