import { openDatabase } from "react-native-sqlite-storage";
import db from "./config/sqlite";


async function SelectTest(){
    console.log("Test Select.");
    (await db).transaction(txn =>{
        txn.executeSql(`SELECT * FROM receipts`,[],
        (tx, res)=>{
            for(let i = 0; i < res.rows.length; i++){
                console.log(res.rows.item(i));
            }
        })
    })
};

SelectTest()
