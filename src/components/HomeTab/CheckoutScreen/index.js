import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { requestOneTimePayment } from 'react-native-paypal';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import ModalBox from 'react-native-modalbox'
import { StackActions } from '@react-navigation/native';
import styles from './styles'

//Paypal sandbox key
const token = "sandbox_2454s5x4_rqtzs7c6vppy2zht"

const CheckoutScreen = ({ route, navigation }) => {

  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [isAlertModalOpenFlag, setAlertModalOpenFlag] = useState(false)
  const [alertBoxMessage, setAlertBoxMessage] = useState("")
  const [activityIndicatorFlag, setActivityIndicatorFlag] = useState(true)

  useEffect(() => {
    setCartItems(route.params.cartItems)
  }, []) //[] is dependency array, and first argument is callback function

  //call this useeffect only when cartItems changes
  useEffect(() => {
    calculateCartTotal()
  }, [cartItems]) //[] is dependency array, and first argument is callback function

  //function to calculate cart total
  const calculateCartTotal = () => {
    let sum = 0

    cartItems.map((data, index) => {
      sum += data.productPrice * data.productQty
    })

    setCartTotal(sum)

    setTimeout(() => {
      setActivityIndicatorFlag(false)
    }, 1500);
  }

  //make payment  
  const makePayment = async () => {
    try {
      // const {nonce, payerId, email, firstName, lastName, phone } 
      //can use above params on return of requestOneTimePayment await
      await requestOneTimePayment(
        token,
        {
          amount: cartTotal.toString(),
          currency: 'USD',
          localeCode: 'en_US',
          shippingAddressRequired: false,
          userAction: 'commit',
          intent: 'authorize',
        }
      );

      Alert.alert(
        "Alert",
        "Payment Successful!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

      navigation.dispatch(StackActions.popToTop());
    } catch (error) {
      setAlertModalOpenFlag(true)
      setAlertBoxMessage("Payment cancelled!")
    }
  }

  //function to increase product quantity
  const increaseProdQty = (productId) => {
    let objIndex = cartItems.findIndex((obj => obj.productId == productId))

    if (cartItems[objIndex].productQty < 10) {
      let newCartItems = [...cartItems]

      newCartItems[objIndex].productQty += 1

      setCartItems(newCartItems)

      calculateCartTotal()
    }
  }

  //function to decrease product quantity
  const decreaseProdQty = (productId) => {

    let objIndex = cartItems.findIndex((obj => obj.productId == productId))

    if (cartItems[objIndex].productQty > 1) {
      let newCartItems = [...cartItems]

      newCartItems[objIndex].productQty -= 1

      setCartItems(newCartItems)

      calculateCartTotal()
    }
  }

  //function to remove the item from th cart
  const removeCartItem = (productId) => {

    if (cartItems.length > 1) {
      let objIndex = cartItems.findIndex((obj => obj.productId == productId))

      let newCartItems = [...cartItems]

      newCartItems.splice(objIndex, 1)

      setCartItems(newCartItems)

      calculateCartTotal()
    } else {
      setAlertModalOpenFlag(true)
      setAlertBoxMessage("You need to have atleast one item in the cart!")
    }
  }

  const { container, modalMainView, alertText, alertMessage, okButton, headerView, headerText,
    activityIndicator, yourItemsText, scrollView, productMainView, productInnerView, productImageView,
    productImage, removeButtonAndProductNameView, productName, removeButton, removeButtonText,
    decreaseProductQtyView, decreaseProductQtyBtn, prodQtyView, prodQtyText, increaseProdQtyBtn,
    productPrice, borderView, cartTotalView, totalText, total, makePaymentBtn, makePaymentText } = styles


  return (
    <View style={container}>
      <ModalBox isOpen={isAlertModalOpenFlag} style={modalMainView}
        onClosed={() => { setAlertModalOpenFlag(false) }}
      >
        <Text style={alertText}>Alert</Text>
        <Text style={alertMessage}>{alertBoxMessage}</Text>
        <TouchableOpacity style={okButton}
          onPress={() => { setAlertModalOpenFlag(false) }}
        >
          <Text style={{ fontSize: 15, color: '#D54501' }}>Ok</Text>
        </TouchableOpacity>
      </ModalBox>
      <View style={{ flex: 1 }}>
        <View style={headerView}>
          <TouchableOpacity onPress={() => {
            navigation.navigate({
              name: 'ScanCodeScreen',
              params: { cartItems: cartItems },
              merge: true,
            });
          }}>
            <Icon name={'chevron-left'} size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={headerText}>Checkout</Text>
        </View>
        {
          activityIndicatorFlag ?
            <View style={activityIndicator}>
              <ActivityIndicator size="large" color="#D54501" />
            </View>
            :
            <View style={{ flex: 1 }}>
              <Text style={yourItemsText}>Your Items</Text>
              <ScrollView style={scrollView}>
                {
                  cartItems.map((data, index) => (
                    <View key={data.productId}>
                      <View style={productMainView}>
                        <View style={productInnerView}>
                          <View style={productImageView}>
                            <Image style={productImage} source={{ uri: route.params.brandImage }} />
                          </View>
                          <View style={removeButtonAndProductNameView}>
                            <Text style={productName}>{data.productName}</Text>
                            <TouchableOpacity style={removeButton} onPress={() => { removeCartItem(data.productId) }}>
                              <Icon name={'trash-alt'} size={10} color="#000000" />
                              <Text style={removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={decreaseProductQtyView}>
                            <TouchableOpacity style={decreaseProductQtyBtn}
                              onPress={() => { decreaseProdQty(data.productId) }}
                            >
                              <Icon name={'minus'} size={10} color="#000000" />
                            </TouchableOpacity>
                            <View style={prodQtyView}>
                              <Text style={prodQtyText}>{data.productQty}</Text>
                            </View>
                            <TouchableOpacity style={increaseProdQtyBtn}
                              onPress={() => { increaseProdQty(data.productId) }}
                            >
                              <Icon name={'plus'} size={10} color="#000000" />
                            </TouchableOpacity>
                          </View>
                          <Text style={productPrice}>{'$' + data.productPrice}</Text>
                        </View>
                      </View>
                      <View style={borderView} />
                    </View>
                  ))
                }
                <View style={cartTotalView}>
                  <Text style={totalText}>{'Total: '}</Text>
                  <Text style={total}>{'$' + cartTotal}</Text>
                </View>
                <TouchableOpacity onPress={() => { makePayment() }} style={makePaymentBtn}>
                  <Text style={makePaymentText}>Make Payment</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
        }
      </View>
    </View>
  )
}

export default CheckoutScreen;