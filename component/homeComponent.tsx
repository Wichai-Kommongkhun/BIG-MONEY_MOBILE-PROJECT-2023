import * as React from "react";
import { Text, Button, StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export default function Home({navigation}: {navigation: any}) {
    return (
        <View style={[container.container]}>
            <View>
                <Text style={[{ fontSize: 40, textAlign: 'center',}, text.nav]}>
                    BIG MONEY
                </Text>
            </View>
            <View style={[styles.button]}>
                <Button title="บันทึกรายการ" color={'black'} onPress={() => navigation.navigate('Receipt')}></Button>
            </View>
            <View style={[styles.button]}>
                <Button title="รายการของวันนี้" color={'black'}  ></Button>
            </View>
            <View style={[styles.button]}>
                <Button title="รายการทั้งหมด" color={'black'}  ></Button>
            </View>
            <View style={[styles.button]}>
                <Button title="ข้อมูลเกี่ยวกับแอพลิเคชั่นและช่วยเหลือ" color={'black'}></Button>
            </View>
        </View>
    )
};


const container = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'column',
        backgroundColor: '#EEFDFC',
        alignItems: 'center'
    }
})

const styles = StyleSheet.create({
    button: {
        width: 230,
        backgroundColor: '#D9D9D9',
        padding: 5,
        marginTop: 10,
        marginBottom: 10
    }
});

const text = StyleSheet.create({
    nav:{
      fontWeight:'800',
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 20
    }
  })