import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import { openDatabase } from "react-native-sqlite-storage";

var db = openDatabase({ name: "UserDatabase.db" });

const ViewUser = ({ navigation }) => {

    let [usuarioProcurado, setUsuarioProcurado] = useState('');
    let [usuarioDados, setUsuarioDados] = useState({});

    function procurar_usuario(){
        setUsuarioDados({});
        db.transaction(function (txn){
            txn.executeSql(
                "SELECT * FROM table_user WHERE user_id = ?",
                [usuarioProcurado],
                function(tx, res){
                    if (res.rows.length > 0){
                        setUsuarioDados(res.rows.item(0))
                    }else{
                        alert('contato nao encontrado!');
                    }
                }
            )
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1}}>
                    <MyTextInput 
                        placeholder="Digite um id"
                        onChangeText={setUsuarioProcurado}
                        style={{ padding: 10 }}
                    />
                    <MyButton title="Procurar Contato" onClick={procurar_usuario} />
                    <View
                        style={{
                            marginHorizontal: 35,
                            marginTop: 10,
                        }}
                    >
                        <Text>ID: { usuarioDados.user_id }</Text>
                        <Text>Nome: { usuarioDados.user_name }</Text>
                        <Text>Email: { usuarioDados.user_email }</Text>
                        <Text>Número: { usuarioDados.user_number }</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ViewUser;
