import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import StudentDashboard from './screens/dashboard_student'
import PendingSurveys from './screens/PendingSurveys'
import TutorDashboard from './screens/dashboard_tutor'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login"component={Login}/>
                <Stack.Screen name="StudentDashboard"component={StudentDashboard}/>
                <Stack.Screen name="TutorDashboard"component={TutorDashboard}/>
                <Stack.Screen name="PendingSurveys"component={PendingSurveys}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

