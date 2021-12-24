import React, { useEffect } from 'react';
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log(user)
        
        if (user != null) {
            setTimeout(() => {
                navigation.navigate('TabNavigators')
            }, 2000);
        } else {
            setTimeout(() => {
                navigation.navigate('LoginScreen')
            }, 2000);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#D54501', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
                fontSize: 40, fontWeight: 'bold', color: '#ffffff', fontStyle: 'italic'
            }}>Quickcart</Text>
        </View>
    )
}

export default SplashScreen;