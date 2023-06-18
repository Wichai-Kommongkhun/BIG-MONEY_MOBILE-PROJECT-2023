import React from "react";
import { Text, Button, StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');


export default function List(){
    return (
        <View style={[styles.container]}>
            <View>
                <Text style={[styles.title]}>บันทึกรายการ</Text>
            </View>
            <View style={[styles.buttonReceipt]}>
                <Button title="บันทึกรายรับ" color={'black'}></Button>
            </View>
            <View style={[styles.buttonBuy]}>
                <Button title="บันทึกรายจ่าย" color={'black'}></Button>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#EEFDFC',
        alignItems: 'center'
    },
    title:{
        fontSize: 40,
        fontWeight: '700',
        textAlign: "center",
        paddingTop: 10,
        marginTop: 20
    },
    buttonReceipt:{
        width: 200,
        backgroundColor: '#80CDF8',
        padding: 4,
        marginTop: 20,
    },
    buttonBuy:{
        width: 200,
        backgroundColor: '#FD7B7B',
        padding: 4,
        marginTop: 20,
    }
})