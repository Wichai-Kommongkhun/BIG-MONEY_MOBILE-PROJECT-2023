import React from "react";

import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../globalStyle";

const Stack = createNativeStackNavigator();
// const navigations = useNavigation()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months_th = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",];

const daySaving = [
    { day: 'Monday 20 September 2023' },
    { day: 'Monday 19 September 2023' },
    { day: 'Monday 18 September 2023' },
    { day: 'Monday 17 September 2023' },
    { day: 'Monday 16 September 2023' }, { day: 'Monday 16 September 2023' },
    { day: 'Monday 16 September 2023' }, { day: 'Monday 16 September 2023' },
]

function Display({ navigation }: any) {
    const navigations = useNavigation()
    return (
        <>
            <View style={[styles.container]}>
                <View style={[styles.button, { backgroundColor: '#E7F880' }]}>
                    <Button title="รายการของเดือนนี้" color={'#000000'} onPress={() => {
                        navigation.navigate('Thismonth')
                    }}></Button>
                </View>
                <View style={[styles.button, { backgroundColor: '#A3F63A' }]}>
                    <Button title="รายการของปีนี้" color={'#000000'} onPress={() => {
                        navigation.navigate('ThisYear')
                    }}></Button>
                </View>
                <View style={[styles.button, { backgroundColor: '#F580F8' }]}>
                    <Button title="รายการย้อนหลัง 3 ปี" color={'#000000'} onPress={() => {
                        navigation.navigate('AllLastYears')
                    }}></Button>
                </View>
                <View style={[styles.button, { backgroundColor: '#D9D9D9' }]}>
                    <Button title="กลับหน้าหลัก" color={'#000000'} onPress={() => {
                        navigations.goBack()
                    }}></Button>
                </View>
            </View>
        </>
    )
}
function ShowThisMounth() {
    let date = new Date();
    let styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#333232'
        },
        header: {
            flex: .55,
            backgroundColor: '#E8E8E8'
        },
        textDiv: {
            padding: 15,
        },
        fontText: {
            fontSize: 22,
            marginTop: 10,
            fontWeight: '600'
        }
    });

    let styles1 = StyleSheet.create({
        containerView: {
            padding: 10,
        },
        font: {
            color: '#FFF',
        },
        button: {
            marginTop: 10,
            backgroundColor: '#EEB154',
            borderRadius: 10
        }
    })

    function list(daySaving: any) {
        return (
            <>
                <View key={daySaving.item.day} style={[styles1.button]}>
                    <Button title={daySaving.item.day} color={'#000'}></Button>
                </View>
            </>
        )
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: '#333232' }}>
                <View style={[styles.container]}>
                    <View style={[styles.header]}>
                        <View style={[styles.textDiv]}>
                            <Text style={{ fontSize: 26, fontWeight: '700' }}>สรุปยอดของเดือนนี้: <Text style={{ color: '#1D51F0' }}>{months[date.getMonth()]} {date.getFullYear()}</Text></Text>
                            <Text style={[styles.fontText]}>รายรับ:</Text>
                            <Text style={[styles.fontText]}>รายจ่าย:</Text>
                            <Text style={[styles.fontText]}>ยอดเงินคงเหลือ:</Text>
                        </View>
                    </View>
                    <View style={[styles1.containerView]}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: 27,
                            marginTop: 10, marginBottom: 10, marginLeft: 10
                        }}>ข้อมูลวันที่มีการบันทึก</Text>
                        <FlatList data={daySaving} renderItem={list}></FlatList>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

function ShowThisYears() {

    let date = new Date();
    let styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#333232'
        },
        header: {
            flex: .55,
            backgroundColor: '#E8E8E8'
        },
        textDiv: {
            padding: 15,
        },
        fontText: {
            fontSize: 22,
            marginTop: 10,
            fontWeight: '600'
        }
    });
    let styles1 = StyleSheet.create({
        containerView: {
            padding: 10,
        },
        font: {
            color: '#FFF',
        },
        button: {
            marginTop: 10,
            backgroundColor: '#EEB154',
            borderRadius: 10,
            padding: 5
        }
    });

    function ListMonth(data: any) {
        return (
            <>
                <View key={data.item} style={[styles1.button]}>
                    <Button title={'รายการของเดือน-' + data.item} color={'#000000'}></Button>
                </View>
            </>
        )
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: '#00485F' }}>
                <View style={[styles.container]}>
                    <View style={[styles.header]}>
                        <View style={[styles.textDiv]}>
                            <Text style={{ fontSize: 26, fontWeight: '700' }}>สรุปยอดของปีนี้: <Text style={{ color: '#BA51A0' }}>    {date.getFullYear()}</Text></Text>
                            <Text style={[styles.fontText]}>รายรับ:</Text>
                            <Text style={[styles.fontText]}>รายจ่าย:</Text>
                            <Text style={[styles.fontText]}>ยอดเงินคงเหลือ:</Text>
                        </View>
                    </View>
                </View>
                <FlatList data={months_th} renderItem={ListMonth}></FlatList>

            </ScrollView>
        </>
    )
}

function ShowAllYears() {
    const years = [
        {year: '2022'},{year: '2021'},{year: '2020'}, 
    ];

    const list = (years: any) => {
        const listStyle = StyleSheet.create({
            button:{
                backgroundColor: '#11593B',
                padding: 10,
                marginTop: 15,
                width: 300
            }
        })
        return (
            <>
                <View style={[styles.container, listStyle.button, {
                    marginTop: 30
                }]} key={years.item.year}>
                    <Button title={'รายการของ '+years.item.year} color={'#FFF'}></Button>
                </View>
            </>  
        )
    }

    return (
        <>
            <View style={[styles.container, ]}>
                <FlatList data={years} renderItem={list} style={{
                    marginTop: 50
                }}></FlatList>
            </View>
        </>
    )
}

export default function HistoryPage() {
    return (
        <>
            <Stack.Navigator initialRouteName="AllPage" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AllPage" component={Display} options={{
                }}></Stack.Screen>

                <Stack.Screen name="Thismonth" component={ShowThisMounth} options={{
                    title: 'รายการของเดือนนี้', headerBackTitle: 'Back', headerShown: true
                }} />

                <Stack.Screen name="ThisYear" component={ShowThisYears} options={{
                    title: 'รายการของปีนี้', headerShown: true, headerBackTitle: 'Back'
                }} />

                <Stack.Screen name="AllLastYears" component={ShowAllYears} options={{
                    title: 'รายการย้อนหลัง 3 ปี', headerShown: true, headerBackTitle: 'Back'
                }} />

            </Stack.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#333232'
    },
    button: {
        padding: 10,
        marginTop: 15,
        width: 300,
        borderRadius: 10
    }
})