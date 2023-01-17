import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ProfileScreen() {
    const navigation = useNavigation();
    return (

        <View style={styles.mainCont}>
            <View style={styles.subCont}>
                <Text style={styles.welcomeTxt}>Welcome to Profile Screen</Text>
                <Button title="back" onPress={() => { navigation.goBack() }} />
            </View>
        </View>

    );
}
export default ProfileScreen;
const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        padding: 10
    },
    subCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeTxt: {
        color: '#000',
        marginBottom: 20
    },
});