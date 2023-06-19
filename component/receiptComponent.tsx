import React from "react";

import { Text, Button, StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function From(){
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>บันทึกรายรับ</Text>
        </View>
    )
}


export default function Receipt(){
    return (
        <From></From>
    )

};



const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        marginTop: 10
    },
    title:{
        fontSize: 36,
        fontWeight: '600'
    }
})