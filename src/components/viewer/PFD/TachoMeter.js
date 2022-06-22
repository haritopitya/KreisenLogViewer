import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ power, rotSpeed }) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.box}>
                <Text style={styles.value}>
                    {String(rotSpeed.toFixed(1)).padStart(5, '0')}</Text>
                <Text style={styles.unit}>RPM</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.value}>
                    {String(power.toFixed(1)).padStart(5, '0')}</Text>
                <Text style={styles.unit}>W  </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        position: 'absolute',
        bottom: 8,
        height: '15%',
        width: '60%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'stretch',
        flexDirection: 'row'
    },
    box: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
    },
    value: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    unit: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
})