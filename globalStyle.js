import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    NavView: {
        backgroundColor: '#FFAFFA',
        // height: 100,
        // marginTop: 50
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
})

const listStyles = StyleSheet.create({
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
})

export default globalStyles;