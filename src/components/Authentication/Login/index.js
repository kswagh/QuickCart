import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth'
import ModalBox from 'react-native-modalbox'
import styles from './styles'

//function to validate fields and login
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [emailValidFlag, setEmailValidFlag] = useState(true)
  const [password, setPassword] = useState("")
  const [passwordValidationFlag1, setPasswordValidationFlag1] = useState(true)//for 8 or more characters
  const [passwordValidationFlag2, setPasswordValidationFlag2] = useState(true)//Uppper & lowercase letters
  const [passwordValidationFlag3, setPasswordValidationFlag3] = useState(true)//At least one number
  const [passwordValidationFlag4, setPasswordValidationFlag4] = useState(true)//At least one special character
  const [passwordValidFlag, setPasswordValidFlag] = useState(true)

  const [isAlertModalOpenFlag, setAlertModalOpenFlag] = useState(false)
  const [alertBoxMessage, setAlertBoxMessage] = useState("")

  //function to validate fields
  const validateFields = async () => {
    Keyboard.dismiss()

    let isValidatedFlag = true
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if (email == "" || !regexEmail.test(email)) {
      isValidatedFlag = false
      setEmailValidFlag(false)
    } else {
      setEmailValidFlag(true)
    }

    let validationCount1 = 0//for 8 or more characters
    let validationCount2 = 0//lowercase letters
    let validationCount3 = 0//upper letters
    let validationCount4 = 0//At least one number
    let validationCount5 = 0//At least one specal character

    for (let i = 0; i < password.length; i++) {

      validationCount1++//for 8 characters

      if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
        //for uppercase
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
          validationCount2++
        }

        //for lowercase
        if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
          validationCount3++
        }
      }

      if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {//for numbers
        validationCount4++
      }

      if ((password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 38) || password.charAt(i) == '@') {//for special characters
        
        validationCount5++
      }
    }

    //for 8 characters
    if (validationCount1 < 8) {
      isValidatedFlag = false
      setPasswordValidationFlag1(false)
    } else {
      setPasswordValidationFlag1(true)
    }

    //for lower case and uppercase
    if (validationCount2 == 0 || validationCount3 == 0) {
      isValidatedFlag = false
      setPasswordValidationFlag2(false)
    } else {
      setPasswordValidationFlag2(true)
    }
    //for numbers
    if (validationCount4 == 0) {
      isValidatedFlag = false
      setPasswordValidationFlag3(false)
    } else {
      setPasswordValidationFlag3(true)
    }

    //for special characters
    if (validationCount5 == 0) {
      isValidatedFlag = false
      setPasswordValidationFlag4(false)
    } else {
      setPasswordValidationFlag4(true)
    }

    //password validation
    if (password == "" || !regexPassword.test(password)) {
      isValidatedFlag = false
      setPasswordValidFlag(false)
    } else {
      setPasswordValidFlag(true)
    }

    //code to execute if all validations satisfy
    if (isValidatedFlag) {
      try {
        //Authenticate the user
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(async () => {
            await AsyncStorage.setItem('@email', email)
            navigation.navigate('TabNavigators')
          })
          .catch(error => {
            if (error === 'auth/wrong-password') {
              setAlertModalOpenFlag(true)
              setAlertBoxMessage("Wrong password")
            } else if (error === 'auth/user-not-found') {
              setAlertModalOpenFlag(true)
              setAlertBoxMessage("User not found")
            } else {
              setAlertModalOpenFlag(true)
              setAlertBoxMessage(error.message)
            }
          });
      } catch (e) {
        setAlertModalOpenFlag(true)
        setAlertBoxMessage(e)
      }
    }
  }

  //function to manage forgot password
  const forgotPassword = async () => {
    if (email != "") {
      auth().sendPasswordResetEmail(email)
        .then(function (user) {
          setAlertModalOpenFlag(true)
          setAlertBoxMessage("Please check your email...")
        }).catch(function (e) {
          setAlertModalOpenFlag(true)
          setAlertBoxMessage(e)
        })
    }
  }

  const { container, modalStyle, modalTitle, modalScript, modalOkButton, headerWrapper, headerText,
    loginFieldsMainWrapper, fieldsTitle, emailTitle, passwordTitle, fieldsTextInput,
    forgotPasswordButton, forgotPasswordButtonText, loginButton, loginButtonText, bottomTextWrapper,
    bottomTextOne, bottomTextTwo } = styles

  return (
    <View style={container}>
      <ModalBox isOpen={isAlertModalOpenFlag} style={modalStyle}
        onClosed={() => { setAlertModalOpenFlag(false) }}
      >
        <Text style={modalTitle}>Alert</Text>
        <Text style={modalScript}>{alertBoxMessage}</Text>
        <TouchableOpacity style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}
          onPress={() => { setAlertModalOpenFlag(false) }}
        >
          <Text style={modalOkButton}>Ok</Text>
        </TouchableOpacity>
      </ModalBox>
      <View style={headerWrapper}>
        <Text style={headerText}>Quickcart</Text>
      </View>
      <View style={loginFieldsMainWrapper}>
        <Text style={[fieldsTitle, emailTitle]}>Email</Text>
        <TextInput style={[!emailValidFlag ? { borderColor: '#D54501' } : { borderColor: '#000000' }, fieldsTextInput]}
          onChangeText={(email) => { setEmail(email) }} value={email} autoCapitalize={'none'} />
        {
          !emailValidFlag ?
            <Text style={{ color: '#D54501' }}>Invalid Email</Text>
            :
            null

        }
        <Text style={[fieldsTitle, passwordTitle]}>Password</Text>
        <TextInput secureTextEntry={true} style={[!passwordValidFlag ? { borderColor: '#D54501' } : { borderColor: '#000000' }, fieldsTextInput]}
          onChangeText={(password) => { setPassword(password) }} value={password} autoCapitalize={'none'} />
        {
          !passwordValidFlag ?
            <View>
              <Text style={{ color: '#000000' }}>Your password must have:</Text>
              {
                !passwordValidationFlag1 ?
                  <Text style={{ color: '#D54501' }}>8 or more characters</Text>
                  :
                  <Text style={{ color: '#000000' }}>8 or more characters</Text>

              }
              {
                !passwordValidationFlag2 ?
                  <Text style={{ color: '#D54501' }}>Upper and lower letters</Text>
                  :
                  <Text style={{ color: '#000000' }}>Upper and lower letters</Text>

              }
              {
                !passwordValidationFlag3 ?
                  <Text style={{ color: '#D54501' }}>At least one number</Text>
                  :
                  <Text style={{ color: '#000000' }}>At least one number</Text>
              }
              {
                !passwordValidationFlag4 ?
                  <Text style={{ color: '#D54501' }}>At least one special character</Text>
                  :
                  <Text style={{ color: '#000000' }}>At least one special character</Text>
              }
            </View>
            :
            null

        }
        <TouchableOpacity style={forgotPasswordButton} onPress={() => { forgotPassword() }}>
          <Text style={forgotPasswordButtonText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { validateFields() }} style={loginButton} >
          <Text style={loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={bottomTextWrapper}>
          <Text style={bottomTextOne}>Don't have an account?</Text>
          <Text style={bottomTextTwo} onPress={() => { navigation.navigate('RegistrationScreen') }}> Register</Text>
        </View>
      </View>
    </View >
  )
}

export default Login