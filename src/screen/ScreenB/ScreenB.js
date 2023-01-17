import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ScreenB() {
    const navigation = useNavigation();
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#000', marginBottom: 20 }}>Welcome to Profile Screen</Text>

            <Button title="back" onPress={() => { navigation.goBack() }}>

            </Button>
        </View>

    );
}

export default ScreenB;