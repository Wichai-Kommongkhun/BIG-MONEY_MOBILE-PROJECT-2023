import { openDatabase } from "react-native-sqlite-storage";


const db = openDatabase({
    name: 'app.db'
})

export default db;