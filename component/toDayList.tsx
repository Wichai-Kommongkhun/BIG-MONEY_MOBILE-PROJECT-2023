import React, { useEffect } from "react";
import globalStyles from "../globalStyle";
import { openDatabase } from "react-native-sqlite-storage";
import { View, Dimensions, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert } from "react-native";
const { height, width } = Dimensions.get('window');

var date = new Date();
const db = openDatabase({
    name: 'app'
})
var reciepts: any = [];
var expensess: any = [];
var sumReceipt = 0
// WHERE day = ? AND month = ? AND year = ?
// date.getDay(), date.getMonth(), date.getFullYear()
async function getReciepts() {
    (await db).transaction(async txn => {
        txn.executeSql(`SELECT * FROM reciepts WHERE day = ? AND month = ? AND year = ?`,
            [date.getDay(), date.getMonth(), date.getFullYear()],
            (tx, res) => {
                console.log("\n Get Reciepts \n");
                console.log(res.rows.length);
                for (let i = 0; i < res.rows.length; ++i) {
                    // console.log(i, res.rows.item(i));
                    sumReceipt += res.rows.item(i).money
                    reciepts.push(res.rows.item(i));

                }
                return;
            }, error => {
                // console.log(error);
            })
    })
};



async function getExpensess() {
    (await db).transaction(txn => [
        txn.executeSql(`SELECT *, SUM(money) as sum FROM expensess WHERE day =? AND month = ? AND year = ?`,
            [date.getDay(), date.getMonth(), date.getFullYear()],

            (tx, res) => {
                console.log(res.rows.length);

                console.log('\n GET Expensess \n');
                for (let i = 0; i < res.rows.length; i++) {
                    console.log(res.rows.item(i));
                    expensess.push(res.rows.item(i))
                }
                return;
            }, error => {
                // console.log(error);

            })
    ])
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
    function info(id: any) {
        reciepts.forEach((el: any) => {
            if (el.id == id) {
                Alert.alert(`คนให้เงิน : ${el.giver} \n จำนวนเงิน: ${el.money} \n บันทึกช่วยจำ: ${el.note}`)
                return true;
            }
        });
    }
    return (
        <TouchableOpacity key={data.item.product} onPress={() => { info(data.item.id) }}>
            <View style={[styles.subContainer, {
                backgroundColor: '#B7CBD9',
                marginTop: 10, borderRadius: 10
            }]} >
                <Text style={[styles.textList]} >
                    {data.item.giver}
                </Text>
                <Text style={[styles.textList]}>
                    {data.item.money} ฿
                </Text>
            </View>
        </TouchableOpacity>
    )
}


// async function SelectTest(){
//     console.log("Test Select.");
//     (await db).transaction(txn =>{
//         txn.executeSql(`SELECT * FROM receipts`,[],
//         (tx, res)=>{
//             for(let i = 0; i < res.rows.length; i++){
//                 console.log(res.rows.item(i));
//             }
//         })
//     })
// };

// SelectTest()

async function strat() {
    await getReciepts();
    await getExpensess();
}
strat();

function Display() {
    console.log(sumReceipt);

    return (
        <ScrollView horizontal={false}>
            <View style={[globalStyles.container, {
            }]}>
                <Text style={[styles.header]}>รายรับ: {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</Text>
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
                <FlatList data={reciepts} renderItem={rederListReceipt}></FlatList>
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
                        {sumReceipt} ฿
                    </Text>
                </View>

                <Text style={[styles.header]}>รายจ่าย: {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</Text>
                <FlatList data={expensess} renderItem={renderListBuy}
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
                        {/* {sumReceipt} ฿ */}
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
                            {/* { TotalReceipt(muckUpReceipt)- TotalPrice(muckUpProduct)} ฿ */}
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

