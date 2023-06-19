import React from "react";
import { Text, Button, StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

import { NavigationContainer, getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receipt from "./receiptComponent";
import BuyConponent from "./BuyComponent";

const Stack = createNativeStackNavigator();


function HomeList({ navigation }: { navigation: any }) {
    const navigations = useNavigation()
    return (
        <View style={[styles.container]}>
            <View>
                <Text style={[styles.title]}>บันทึกรายการ</Text>
            </View>
            <View style={[styles.buttonReceipt]}>
                <Button title="บันทึกรายรับ" color={'black'} onPress={() => navigation.navigate('Receipt')}></Button>
            </View>
            <View style={[styles.buttonBuy]}>
                <Button title="บันทึกรายจ่าย" color={'black'} onPress={()=> navigation.navigate('Expenses')}></Button>
            </View>
            <View style={[styles.buttonBlack]}>
                <Button title="กลับไปหน้าแรก" color={'black'} onPress={()=>{
                    navigations.goBack();
                }}></Button>
            </View>
        </View>
    )
}

export default function List() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator  initialRouteName="HomeList">
            <Stack.Screen name='HomeList' component={HomeList} 
            options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Receipt' component={Receipt} 
            options={{headerShown: true, headerBackTitle: 'Back'}}></Stack.Screen>

            <Stack.Screen  name='Expenses' component={BuyConponent}
            options={{headerShown: true, headerBackTitle: 'Back'}}
             />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#EEFDFC',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: "center",
        paddingTop: 10,
        marginTop: 20
    },
    buttonReceipt: {
        width: 200,
        backgroundColor: '#80CDF8',
        padding: 4,
        marginTop: 20,
    },
    buttonBuy: {
        width: 200,
        backgroundColor: '#FD7B7B',
        padding: 4,
        marginTop: 20,
    },
    buttonBlack: {
        backgroundColor: '#D9D9D9',
        width: 200,
        padding: 4,
        marginTop: 20,
    }
});


function getHeader(route: any){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName){
      case 'Home':
        return 'Home';
      case route:
        return route;
    }
  }