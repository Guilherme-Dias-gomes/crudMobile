import { StyleSheet, Text, View } from "react-native";
import NewItens from "./components/NewItens";



export default function landingPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista To Do</Text>
            <NewItens/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:30, borderRadius: 10
    },
    title:{
        fontSize: 30
    }
})