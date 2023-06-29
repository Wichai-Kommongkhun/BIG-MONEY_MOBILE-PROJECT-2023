/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer, Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/homeComponent';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


import {openDatabase} from 'react-native-sqlite-storage';

import List from './component/listComponent';
import Today from './component/toDayList';
import HistoryPage from './component/HistoryComponent';

const { height, width } = Dimensions.get('window');

const database = openDatabase({
  name: 'app'
});





// function App(): JSX.Element {
//   // const isDarkMode = useColorScheme() === 'dark';

//   // const backgroundStyle = {
//   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   // };

//   // return (
//   //   <View style={[styles.bgVeiw, styles.container]}>
//   //     <View style={[styles.NavView, , {justifyContent: 'center'}]}>
//   //       <Text style={{fontSize: 30, textAlign: 'center', padding:2, marginTop: 3,}}>BIG MONEY</Text>
//   //     </View>

//   //     <View style={[styles.footerView,]}>
//   //         <Text style={{fontSize: 30, textAlign: 'center', padding:2, marginTop: 3}}>
//   //           IT.KMITL & COS.RU
//   //         </Text>
//   //         <Text style={{fontSize: 18, textAlign: 'center'}}>Wichai Kommongkhun</Text>
//   //     </View>
//   //   </View>

//   // );


// };
const Stack = createNativeStackNavigator();

function getHeader(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case route:
      return route;
  }
}

function App() {

  const createTable = async () =>{
    (await database).transaction(sql =>{
    sql.executeSql(
        `create table if not exists reciepts(
          id integer primary key AUTOINCREMENT, 
          money real not null,
          note text not null,
          giver varchar(255) not null,
          day integer not null,
          month integer not null,
          year integer not null
        );
        create table if not exists expensess (
          id integer primary key AUTOINCREMENT,
          price real not null,
          not text not null,
          product varchar(255) not null,
          unit varchar(100) not null,
          amount real not null,
          day integer not null,
          month integer not null,
          year interger not null
        );
        `,[],(sqltnx, res) =>{
          console.log(sqltnx);
          console.log(res),
          console.log("Create Table successfully");
        
        }, error => {
          console.log("Error: " + error);
          
        }
      )
    })
  };

  useEffect(() =>{
    createTable();
  }, [])

  return (
    <View style={[styles.bgVeiw, container.container]}>
      <View style={[styles.NavView, , { justifyContent: 'center' }]}>
      </View>

      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'
            screenOptions={{ headerShown: false }}
          >
          <Stack.Screen name='Home' component={Home}
          />
          <Stack.Screen name='ListOrder' component={List}></Stack.Screen>
          <Stack.Screen name='Today' component={Today} options={{
            title: 'รายการของวันนี้' , headerBackTitle: 'Back',
            headerShown: true
          }}></Stack.Screen>
          <Stack.Screen name="History" component={HistoryPage} options={{
            title: 'ประวัติรายการทั้งหมด',
            headerShown: false, headerBackTitle: 'Back'
          }}></Stack.Screen>
        </Stack.Navigator>


      </NavigationContainer>

      <View style={[styles.footerView,]}>
        <Text style={{ fontSize: 30, textAlign: 'center', padding: 2, marginTop: 3 }}>
          IT.KMITL & COS.RU
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Wichai Kommongkhun</Text>
      </View>
    </View>

  );

}


const container = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    marginTop: 0
  }
});


const styles = StyleSheet.create({
  bgVeiw: {
    backgroundColor: 'EEFDFC'
  },
  NavView: {
    backgroundColor: '#FFAFFA',
    height: 70,
    // marginTop: 50
  },
  footerView: {
    backgroundColor: '#A8EA91',
    height: 90,
    padding:0
  },

});


export default App;
