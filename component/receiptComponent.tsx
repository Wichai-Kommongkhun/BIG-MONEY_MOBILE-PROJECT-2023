import React, { useEffect } from "react";

import { Text, Button, StyleSheet, View, Dimensions, TextInput, SafeAreaView, Alert } from "react-native";

const { height, width } = Dimensions.get('window');

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
    name: 'app'
})

const Stack = createNativeStackNavigator();

async function SelectInfo(){
    (await db).transaction(txn =>{
        txn.executeSql(`
            SELECT * FROM reciepts
        `, [], (tx, res) =>{
            console.log("RES SELECT!");
            
            for (let i = 0; i < res.rows.length; i++){
                console.log(res.rows.item(i));
            }
        }, error =>{
            console.log(error);
        })
    })
}

function From() {
    var [inputMoney, setMoney] = React.useState('');
    var [note, setNote] = React.useState('');
    var [giver, setGiver] = React.useState('');

    useEffect(()=>{
        // TestMaster();
        SelectInfo();
    })

   async function submit(){
        console.log("Save Reciepts");
        console.log('TEST INPUT: ',{
            money: inputMoney,
            giver: giver,
            note: note
        });

        if (note === '' || inputMoney === '' || giver === ''){
            console.log("No data!");
            return false;
        }

        
        var date = new Date();
        const money = Number(inputMoney);

        (await db).transaction(async txn =>{
         await txn.executeSql(
                `INSERT INTO reciepts(money, note, giver, day, month, year) VALUES (?, ?, ?, ?, ?, ?)`,[
                    money, note, giver, date.getDay(), date.getMonth(), date.getFullYear()
                ],
                (tx, res) => {
                    console.log("INSERT SUCCESSFULY!");
                    Alert.alert('บันทึกข้อมูลสำเร็จ')
                    setMoney(''), setGiver(''), setNote('')
                },
                (error) =>{
                    console.log(error);
                    Alert.alert("Have error")
                }
            )
        })
    }

    return (
        <>
            <View style={[styles.header]}>
                <View>
                    <Text style={[styles.title]}>บันทึกรายรับ</Text>
                </View>
            </View>
            <View style={[styles.form]}>
                <SafeAreaView >
                    <Text style={styles.label}>ผู้ให้เงิน:</Text>
                    <TextInput style={[styles.moneyInput]}
                    maxLength={100} placeholder="ใส่ชื่อผู้ให้เงิน" value={giver}
                    onChangeText={setGiver}
                    ></TextInput>
                </SafeAreaView>
                <SafeAreaView style={{marginTop: 10}}>
                    <Text style={styles.label}>จำนวนเงินทั้งหมด: <Text style={{fontSize: 15, color: '#FF01AA'}}>* หน่วยบาท</Text></Text>
                    <TextInput onChangeText={setMoney} value={inputMoney}
                        style={[styles.moneyInput]}
                        keyboardType="numeric" 
                        placeholder="ใส่จำนวนเงิน" />
                </SafeAreaView>
                <SafeAreaView style={[{marginTop: 20}]}>
                    <Text style={styles.label}>บันทึกช่วยจำ</Text>
                    <TextInput style={styles.textArea} maxLength={150}
                    numberOfLines={3} multiline={true} textAlignVertical="top"
                    onChangeText={setNote} value={note}
                    placeholder="ตัวอักษรไม่เกิน 150 ตัว"></TextInput>
                </SafeAreaView>
                <View style={[styles.button]}>
                    <Button title="บันทึก" color={'#E6E6E6'} onPress={submit}></Button>
                </View>
            </View>
        </>
    )
}


export default function Receipt() {
    return (
        <From></From>
    )

};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        padding: 5,
        marginTop: 5
    },
    title: {
        fontSize: 36,
        fontWeight: '600'
    },
    form: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        marginLeft: 10,
    },
    label: {
        fontSize: 21,
        fontWeight: '400',
    },
    moneyInput: {
        width: width / 1.2,
        height: 40,
        fontSize: 22,
        padding: 4,
        marginTop: 10,
        borderWidth: 1.3
    },
    textArea:{
        height: 84,
        width: width / 1.2,
        fontSize: 20,
        textAlign: 'left',
        borderWidth: 1,
    },
    button:{
        marginTop: 10,
        width: 150,
        backgroundColor: '#049913',
    }
})