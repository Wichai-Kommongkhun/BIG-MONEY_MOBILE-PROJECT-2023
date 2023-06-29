import React from "react";
import globalStyles from "../globalStyle";

import { View, Dimensions, Text, StyleSheet, ScrollView, FlatList } from "react-native";
const { height, width } = Dimensions.get('window');

var date = new Date();

const muckUpProduct = [
    { product: 'Book', totalPrice: 200, amount: 1, price: 200 },
    { product: 'Pen', totalPrice: 50, amount: 5, price: 10 },
    { product: 'phone', totalPrice: 5000, amount: 1, price: 5000 }
];

const muckUpReceipt = [
    { money: 6000, note: '', giver: 'MOM' },
    {money: 200, not: '', giver: 'DAD'}
]

const TotalPrice = (muckUpProduct: any) => {
    let price = 0;
    muckUpProduct.forEach((item: any) => {
        price += item.totalPrice;
    });
    return price;
};

const TotalReceipt = (muckUpReceipt: any) =>{
    let money = 0;
    muckUpReceipt.forEach((item: any) =>{
        money += item.money
    })
    return money;
}

function renderListBuy(data: any) {
    return (
        <View key={data.item.product} style={[styles.subContainer, {
            backgroundColor: '#ECCEC8',
            marginTop: 10, borderRadius: 10
        }]}>
            <Text style={[styles.textList]}>
                {data.item.product}
            </Text>
            <Text style={[styles.textList]}>
                {data.item.totalPrice} ฿
            </Text>
        </View>
    )
}

function rederListReceipt(data: any) {
    return (
        <View key={data.item.product} style={[styles.subContainer, {
            backgroundColor: '#B7CBD9',
            marginTop: 10, borderRadius: 10
        }]}>
            <Text style={[styles.textList]}>
                {data.item.giver}
            </Text>
            <Text style={[styles.textList]}>
                {data.item.money} ฿
            </Text>
        </View>
    )
}

function Display() {
    return (
        <ScrollView horizontal={false}>
            <View style={[globalStyles.container, {

            }]}>
                <Text style={[styles.header]}>รายรับ: {date.getDate() + '/'+date.getMonth()+'/'+date.getFullYear()}</Text>
                <View style={[styles.subContainer, {
                    borderBottomWidth: 1
                }]}>
                    <Text style={[styles.textList]}>
                        ผู้ให้
                    </Text>
                    <Text style={[styles.textList]}>
                        จำนวนเงิน
                    </Text>
                </View>
                <FlatList data={muckUpReceipt} renderItem={rederListReceipt}></FlatList>
                <View style={[styles.subContainer, {
                    backgroundColor: '#BBB2DE',
                    marginTop: 10, borderRadius: 10, marginBottom: 20
                }]}>
                    <Text style={[styles.textList]}>
                        รวมทั้งหมด
                    </Text>
                    <Text style={[styles.textList, {
                        fontWeight: '700'
                    }]}>
                        {TotalReceipt(muckUpReceipt)} ฿
                    </Text>
                </View>

                <Text style={[styles.header]}>รายจ่าย: {date.getDate() + '/'+date.getMonth()+'/'+date.getFullYear()}</Text>
                <FlatList data={muckUpProduct} renderItem={renderListBuy}
                >
                </FlatList>
                

                <View style={[styles.subContainer, {
                    backgroundColor: '#F2AAEB',
                    marginTop: 10, borderRadius: 10, marginBottom: 20
                }]}>
                    <Text style={[styles.textList]}>
                        รวมทั้งหมด
                    </Text>
                    <Text style={[styles.textList, {
                        fontWeight: '700'
                    }]}>
                        {TotalPrice(muckUpProduct)} ฿
                    </Text>
                </View>

                <View>
                    <Text style={[{
                        fontSize: 26
                    }]}>สรุปยอดเงินเหลือ:</Text>
                                    <View style={[styles.subContainer, {
                    backgroundColor: '#1CB16A',
                    marginTop: 10, borderRadius: 10, marginBottom: 20
                }]}>
                    <Text style={[styles.textList]}>
                        ยอดเงินเหลือ
                    </Text>
                    <Text style={[styles.textList, {
                        fontWeight: '700'
                    }]}>
                        { TotalReceipt(muckUpReceipt)- TotalPrice(muckUpProduct)} ฿
                    </Text>
                </View>
                </View>

            </View>
        </ScrollView>

    )
}

export default function Today() {
    return (
        <Display></Display>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: '600'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    container: {
        flex: 1,
    },
    textList: {
        fontSize: 20,
        fontWeight: '600'
    }

});

