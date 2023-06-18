/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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


import List from './component/listComponent';

const { height, width } = Dimensions.get('window');


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
const Stack = createNativeStackNavigator()

function App() {

  return (
    <View style={[styles.bgVeiw, container.container]}>
      {/* <View style={[styles.NavView, , { justifyContent: 'center' }]}>
      </View> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: styles.NavView}}>
          <Stack.Screen name='Home' component={Home} options={{title:'HOME', headerBackTitle: ''}} />
          <Stack.Screen name='Receipt' component={List} options={{title:'RECEIPS'}}></Stack.Screen>
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
  }
});


const styles = StyleSheet.create({
  bgVeiw: {
    backgroundColor: 'EEFDFC'
  },
  NavView: {
    backgroundColor: '#FFAFFA',
    // height: 100,
    // marginTop: 50
  },
  footerView: {
    backgroundColor: '#A8EA91',
    height: 100,
  },

});


export default App;
