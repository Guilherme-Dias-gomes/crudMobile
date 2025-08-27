import { FlatList, ScrollView, StyleSheet, Text,  } from "react-native";
import NewItens from "./components/NewItens";



export default function landingPage(){
    return(
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', margin:30, borderRadius: 10}}>
            <Text style={styles.title}>Lista To Do</Text>
            <NewItens/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30
    }
})