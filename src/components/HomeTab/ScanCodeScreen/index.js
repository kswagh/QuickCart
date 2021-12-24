import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import ModalBox from 'react-native-modalbox'
import styles from './styles'


const ScanCodeScreen = ({ route, navigation }) => {
    const [cartCount, updateCount] = useState(0)
    const [isAlertModalOpenFlag, setAlertModalOpenFlag] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [alertBoxMessage, setAlertBoxMessage] = useState("")
    const [reRenderedFlag, setReRenderedFlag] = useState(false)

    useEffect(() => {
        if (route.params?.cartItems) {
            setCartItems(route.params.cartItems)
            updateCount(route.params.cartItems.length)
        }
    }, [route.params?.cartItems]);

    //On scan success
    const onSuccess = e => {

        //check for redundant products in the cart
        const result = cartItems.filter(cartItem => {
            let barcodeOne = `${cartItem.productBarcode.toUpperCase()}`
            let barcodeTwo = `${e.data.toUpperCase()}`

            return barcodeOne.indexOf(barcodeTwo) > -1
        })

        if (result == "") {
            //Api call to check the product, if available add it in the cart
            //Get the product id, project name and price of the product
            //Can use Amazon Api for this, or shop specific Api's
            updateCount(cartCount + 1)
            let productDetails = {
                productId: e.data,
                productName: "Product " + cartCount,
                productPrice: 20,
                productQty: 1,
                productBarcode: e.data
            }
            setCartItems(cartItems => [...cartItems, productDetails])
            setAlertBoxMessage("One item added in the cart!")
            setAlertModalOpenFlag(true)
        } else {
            setAlertBoxMessage("Item already added in the cart. Proceed to the cart, to increase the quantity of the product.")
            setAlertModalOpenFlag(true)
        }
    }

    const { container, modalMainView, alertText, alertMessage, okButton, innerMainView,
        scanCodeText, cartView, cartViewText } = styles

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
            <View style={innerMainView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name={'chevron-left'} size={20} color="#ffffff" />
                </TouchableOpacity>
                <Text style={scanCodeText}>Scan Code</Text>
                <TouchableOpacity onPress={() => {
                    if (cartCount > 0) {
                        setReRenderedFlag(true)
                        navigation.navigate('HomeStackTab', { screen: 'CheckoutScreen', params: { cartItems: cartItems, brandImage: route.params.brandImage } })
                    } else {
                        setAlertBoxMessage("Please add atleast 1 item in the cart!")
                        setAlertModalOpenFlag(true)
                    }
                }}>
                    <Icon name={'shopping-cart'} size={20} color="#ffffff" />
                    {
                        cartCount > 0 ?
                            <View style={cartView}>
                                <Text style={cartViewText}>{cartCount}</Text>
                            </View>
                            :
                            null
                    }
                </TouchableOpacity>
            </View>
            <QRCodeScanner onRead={onSuccess} reactivate={true} reactivateTimeout={2000} />
        </View>
    )
}

export default ScanCodeScreen;