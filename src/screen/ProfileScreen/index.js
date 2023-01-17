import component from './ProfileScreen';
export default component;

// import React from "react";
// import {
//     View, Text, Button, Image, StyleSheet,
//     Dimensions,
//     TouchableOpacity,
// } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import menu from '../../assets/menu.png'
// import {
//     DrawerItem,
//     DrawerContentScrollView,
//     createDrawerNavigator,
// } from '@react-navigation/drawer';

// const DrawerNav = createDrawerNavigator();

// function DrawerContent(props) {
//     const navigation = useNavigation();
//     return (
//         <DrawerContentScrollView {...props}>
//             <View style={styles.drawerContent}>

//                 <Drawer.Section style={styles.drawerSection}>
//                     <DrawerItem
//                         label="Profile"
//                         onPress={() => {
//                             navigation.navigate('ScreenB');
//                         }}
//                     />
//                     <DrawerItem label="Add Member" onPress={() => { }} />
//                 </Drawer.Section>

//                 <Drawer.Section style={styles.drawerSection}>
//                     <DrawerItem
//                         label="Logout"
//                         onPress={() => {
//                             navigation.navigate('ScreenB');
//                         }}
//                     />
//                 </Drawer.Section>
//             </View>
//         </DrawerContentScrollView>
//     );
// }
// function HomeScreen() {
//     const navigation = useNavigation();
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>
//                 <Image source={menu} style={{ height: 20, width: 20 }} />
//                 <Text style={{ flex: 1, textAlign: 'center', color: '#000', fontWeight: 'bold', fontSize: 20 }}>Home</Text>
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ color: '#000', marginBottom: 20 }}>Welcome to HomeScreen</Text>

//                 <Button title="next" onPress={() => { navigation.navigate("ScreenB") }}>

//                 </Button>
//             </View>
//         </View>
//     );
// }

// export const RootNavigator = () => {

//     return (
//         <DrawerNav.Navigator drawerContent={() => <DrawerContent />}>
//             <DrawerNav.Screen name="HomeScreen" component={HomeScreen} />
//         </DrawerNav.Navigator>
//     );
// };

// const styles = StyleSheet.create({
//     drawerContent: {
//         flex: 1,
//     },
//     userInfoSection: {
//         paddingLeft: 20,
//     },
//     title: {
//         marginTop: 20,
//         fontWeight: 'bold',
//     },
//     caption: {
//         fontSize: 14,
//         lineHeight: 14,
//     },
//     row: {
//         marginTop: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     section: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 15,
//     },
//     paragraph: {
//         fontWeight: 'bold',
//         marginRight: 3,
//     },
//     drawerSection: {
//         marginTop: 15,
//     },
//     preference: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 12,
//         paddingHorizontal: 16,
//     },
//     button: {
//         padding: 15,
//         borderRadius: 10,
//         margin: 5,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
// });
// export default HomeScreen;