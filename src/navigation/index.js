import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../assets/home.png';
import sel_home from '../assets/sel_home.png'
import RootNavigator from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'
import NotificationScreen from '../screen/NotificationScreen';
import myProfile from '../assets/myProfile.png'
import sel_myProfile from '../assets/sel_myProfile.png'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={RootNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {

                        fontSize: 12,
                        fontWeight: '500',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? sel_home : home}
                            style={{ height: 25, width: 25 }}
                        />
                    ),
                }} />
            <Tab.Screen name="Notification" component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Notification',
                    tabBarLabelStyle: {

                        fontSize: 12,
                        fontWeight: '500',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? sel_myProfile : myProfile}
                            style={{ height: 25, width: 25 }}
                        />
                    ),
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: {

                        fontSize: 12,
                        fontWeight: '500',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? sel_myProfile : myProfile}
                            style={{ height: 25, width: 25 }}
                        />
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='HomeScreen'
                        component={MyTabs}
                        options={{
                            headerShown: false,
                            header: null
                        }}
                    />
                    <Stack.Screen
                        name='NotificationScreen'
                        component={NotificationScreen}
                        options={{
                            headerShown: false,
                            header: null
                        }}
                    />
                    <Stack.Screen
                        name='ProfileScreen'
                        component={ProfileScreen}
                        options={{
                            headerShown: false,
                            header: null
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    );
}
