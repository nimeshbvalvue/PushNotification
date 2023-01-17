import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text
} from 'react-native';
import {
    DrawerContentScrollView,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import firebase from '@react-native-firebase/app'
import { useNavigation } from '@react-navigation/native';
const DrawerNav = createDrawerNavigator();
function DrawerContent(props) {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={[styles.userInfoSection, { marginTop: 15 }]}>
                    <Text style={styles.title}>Demo Example</Text>
                </View>
                <View style={styles.line} />
                <TouchableOpacity style={styles.userInfoSection}
                    onPress={() => { navigation.navigate('ProfileScreen') }}>
                    <Text style={styles.title}>User Profile</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.userInfoSection}
                    onPress={() => { navigation.navigate('NotificationScreen') }}>
                    <Text style={styles.title}>Notification</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>
        </DrawerContentScrollView>
    );
}

function HomeScreen() {
    const navigation = useNavigation();

    const sendMsg = async () => {
        const myToken = await firebase.messaging().getToken()

        const data = {
            "to": myToken,
            "notification": {
                "title": "Send by mobile",
                "body": "Rich Notification ",
                "mutable_content": true,
                "sound": "Tri-tone"
            },

        }
        const response = await fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "key=xxxxxx"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    return (
        <View style={styles.mainCont}>
            <View style={styles.subCont}>
                <Text style={styles.welcomeTxt}>Welcome to HomeScreen</Text>
                <Button title="send notification" onPress={() => { sendMsg() }} />
            </View>
            <Button title="next" onPress={() => { navigation.navigate("ProfileScreen") }} />
        </View>
    );
}

function RootNavigator() {
    return (
        <DrawerNav.Navigator drawerContent={() => <DrawerContent />}>
            <DrawerNav.Screen name="Welcome Home" component={HomeScreen} />
        </DrawerNav.Navigator>
    );
};
export default RootNavigator;
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
    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginVertical: 10,
        color: '#000',
        fontWeight: 'bold',
    },
    line: {
        borderBottomWidth: 0.5,
        borderColor: '#000'
    },

});


