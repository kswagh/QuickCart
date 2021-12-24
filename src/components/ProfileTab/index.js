import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';
import styles from './styles';

const HomeTab = ({ navigation }) => {
  const [email, setEmail] = useState("")

  useEffect(() => {
    try {
      const setEmailFunc = async () => {
        const email = await AsyncStorage.getItem('@email')
        setEmail(email)
      }
      setEmailFunc()
    } catch (e) {
      // error reading value
    }

  }, []) //[] is dependencey array, and first argument is callback function

  //logout function 
  const logout = () => {
    auth()
      .signOut()
      .then(async (response) => {

        await AsyncStorage.removeItem('@email')

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'LoginScreen' }
            ],
          })
        )
      })
      .catch((error) => {
        Alert.alert(
          "Alert",
          "Something went wrong!",
          [
            { text: "OK" }
          ]
        );
      })
  }

  const {container, headerView, headerText, emailView, emailText, emailInput, logoutBtnView, logoutBtn, logoutText} = styles

  return (
    <View style={container}>
      <View style={headerView}>
        <Text style={headerText}>Profile</Text>
      </View>
      <View style={emailView}>
        <Text style={emailText}>Email</Text>
        <TextInput style={emailInput}
          value={email} editable={false} />
      </View>
      <View style={logoutBtnView}>
        <TouchableOpacity onPress={() => { logout() }} style={logoutBtn}>
          <Text style={logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeTab;