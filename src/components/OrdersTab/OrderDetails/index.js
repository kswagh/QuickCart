import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, ActivityIndicator, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import styles from './styles'

const OrdersDetails = ({ route, navigation }) => {

    const [orderDetails, setOrderDetails] = useState(null)
    const [searchOrderDetails, setOrderSearchDetails] = useState(null)
    const [activityIndicatorFlag, setActivityIndicatorFlag] = useState(true)

    useEffect(() => {
        let dummyJson = '{"orderDetails": [{"itemId": 1, "itemName": "Item1", "qty": "2", "itemAmount": "10"},' +
            '{"itemId": 2, "itemName": "Item2", "qty": "2", "itemAmount": "20"},' +
            '{"itemId": 3, "itemName": "Item3", "qty": "2", "itemAmount": "5"},' +
            '{"itemId": 4, "itemName": "Item4", "qty": "2", "itemAmount": "5"},' +
            '{"itemId": 5, "itemName": "Item5", "qty": "2", "itemAmount": "10"},' +
            '{"itemId": 6, "itemName": "Item6", "qty": "2", "itemAmount": "10"},' +
            '{"itemId": 7, "itemName": "Item7", "qty": "2", "itemAmount": "20"},' +
            '{"itemId": 8, "itemName": "Item8", "qty": "2", "itemAmount": "10"},' +
            '{"itemId": 9, "itemName": "Item9", "qty": "2", "itemAmount": "10"}]}'

        let parsedJson = JSON.parse(dummyJson)

        setTimeout(() => {
            setOrderDetails(parsedJson.orderDetails)
            setOrderSearchDetails(parsedJson.orderDetails)
            setActivityIndicatorFlag(false)
        }, 1500);
    }, []) //[] is dependencey array, and first argument is callback function

    //function to search the order details in the list
    const searchOrders = (text) => {
        const result = orderDetails.filter(order => {
            let storeName = `${order.itemName.toUpperCase()}`;
            let itemAmount = `${order.itemAmount}`;
            let searchText = `${text.toUpperCase()}`;

            if (storeName.indexOf(searchText) > -1 || itemAmount.includes(searchText)) {
                return true
            }
        });

        setOrderSearchDetails(result)
    }

    const { container, headerView, activityIndicator, searchBarMainView, searchBarInnerView,
        searchTextInput, scrollView, orderGeneralDetailsView, orderSummText, dateText, orderIdText,
        orderDetailsView, orderDetailsViewOne, brandImage, brandImageView, prodNameView, prodText,
        qtyView, qtyText, itemAmtText, borderView, totalOrderAmtView, totalText, total } = styles

    return (
        <View style={container}>
            <View style={headerView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name={'chevron-left'} size={20} color="#ffffff" />
                </TouchableOpacity>
                {/* <Text style={{ flex: 1, color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Order Details</Text> */}
            </View>
            {
                activityIndicatorFlag ?
                    <View style={activityIndicator}>
                        <ActivityIndicator size="large" color="#D54501" />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={searchBarMainView}>
                            <View style={searchBarInnerView}>
                                <Icon name={'search'} size={20} color="#D54501" light />
                            </View>
                            <TextInput style={searchTextInput} placeholder="Search" placeholderTextColor={'#000000'}
                                onChangeText={(text) => { searchOrders(text) }}
                            />
                        </View>
                        <View style={orderGeneralDetailsView}>
                            <Text style={orderSummText}>Order Summary</Text>
                            <View>
                                <Text style={dateText}>Date: {route.params.date}</Text>
                                <Text style={orderIdText}>Order ID: {route.params.orderId}</Text>
                            </View>
                        </View>
                        <ScrollView style={scrollView}>
                            {
                                searchOrderDetails != null ?
                                    searchOrderDetails.map((data, index) => (
                                        <View key={index}>
                                            <View style={orderDetailsView}>
                                                <View style={orderDetailsViewOne}>
                                                    <View style={brandImageView}>
                                                        <Image style={brandImage} source={{ uri: route.params.brandImage }} />
                                                    </View>
                                                    <View style={prodNameView}>
                                                        <Text style={prodText}>{data.itemName}</Text>
                                                    </View>
                                                </View>
                                                <View style={qtyView}>
                                                    <Text style={qtyText}>{data.qty}</Text>
                                                </View>
                                                <Text style={itemAmtText}>{'$' + data.itemAmount}</Text>
                                            </View>
                                            <View style={borderView} />
                                        </View>
                                    ))
                                    :
                                    null
                            }
                            <View style={totalOrderAmtView}>
                                <Text style={totalText}>{'Total: '}</Text>
                                <Text style={total}>{'$' + route.params.orderAmount}</Text>
                            </View>
                        </ScrollView>
                    </View>
            }
        </View>
    )
}

export default OrdersDetails;