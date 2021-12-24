import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import styles from './styles'

const OrdersTab = ({ navigation }) => {

    const [orderDetails, setOrderDetails] = useState(null)
    const [searchOrderData, setOrderSearchData] = useState(null)
    const [activityIndicatorFlag, setActivityIndicatorFlag] = useState(true)

    useEffect(() => {
        let dummyJson = '{"orderDetails": [{"orderId": 9, "storeName": "Walgreens", "brandImage": "https://livingonthecheap.com/lotc-cms/wp-content/uploads/2020/11/walgreens-logo.jpg", "date": "Oct 20 2021", "orderAmount": "100"},' +
            '{"orderId": 8, "storeName": "Kroger", "brandImage": "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_kwshpnaa/def_height/2700/def_width/2700/version/100012/type/1", "date": "Oct 18 2021", "orderAmount": "100"},' +
            '{"orderId": 7, "storeName": "Target", "brandImage": "https://mediaservice.retailmenot.com/ws/mediagroup/EBVDOCYQUVFKLMMFY242ZDGKYI?width=255&height=255", "date": "Oct 16 2021", "orderAmount": "100"},' +
            '{"orderId": 6, "storeName": "CVS Pharmacy", "brandImage": "https://www.pngkit.com/png/detail/345-3459263_team-cvs-health-logo.png", "date": "Oct 16 2021", "orderAmount": "100"},' +
            '{"orderId": 5, "storeName": "Aldi\'s", "brandImage": "https://mma.prnewswire.com/media/222325/aldi_logo.jpg?w=200", "date": "Oct 14 2021", "orderAmount": "100"},' +
            '{"orderId": 4, "storeName": "Target", "brandImage": "https://mediaservice.retailmenot.com/ws/mediagroup/EBVDOCYQUVFKLMMFY242ZDGKYI?width=255&height=255", "date": "Oct 11 2021", "orderAmount": "100"},' +
            '{"orderId": 3, "storeName": "Aldi\'s", "brandImage": "https://mma.prnewswire.com/media/222325/aldi_logo.jpg?w=200", "date": "Oct 9 2021", "orderAmount": "100"},' +
            '{"orderId": 2, "storeName": "Walgreens", "brandImage": "https://livingonthecheap.com/lotc-cms/wp-content/uploads/2020/11/walgreens-logo.jpg", "date": "Oct 6 2021", "orderAmount": "100"},' +
            '{"orderId": 1, "storeName": "Walmart", "brandImage": "https://cdn.corporate.walmart.com/dims4/WMT/ae1b273/2147483647/strip/true/crop/2332x1522+0+0/resize/800x522!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fc6%2Fa8%2F8e08a80f49a98a55c8c6a941d22d%2Fsparkbackground.jpg", "date": "Oct 5 2021", "orderAmount": "100"}]}'

        let parsedJson = JSON.parse(dummyJson)

        setTimeout(() => {
            setOrderDetails(parsedJson.orderDetails)
            setOrderSearchData(parsedJson.orderDetails)
            setActivityIndicatorFlag(false)
        }, 1500);
    }, []) //[] is dependencey array, and first argument is callback function

    //function to search orders in the list
    const searchOrder = (text) => {
        const result = orderDetails.filter(order => {
            let storeName = `${order.storeName.toUpperCase()}`;
            let orderId = `${order.orderId}`;
            let orderDate = `${order.date.toUpperCase()}`;
            let orderAmount = `${order.orderAmount}`;
            let searchText = `${text.toUpperCase()}`;

            if (storeName.indexOf(searchText) > -1 || orderId.includes(searchText) || orderDate.includes(searchText)
                || orderAmount.includes(searchText)) {
                return true
            }
        });
        setOrderSearchData(result)
    }

    const { container, headerView, headerText, searchBarMainView, searchBarInnerView,
        searchTextInput, scrollView, activityIndicator, yourOrdersView, orderClickBtn,
        brandImage, storeName, orderInnerMainView, brandImageView, storeDetailsView,
        storeDate, storeId, storeAmt, rightIcon, borderView, noSearchFoundView, noSearchFoundText } = styles

    return (
        <View style={container}>
            <View style={headerView}>
                <Text style={headerText}>Orders</Text>
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
                                onChangeText={(text) => { searchOrder(text) }}
                            />
                        </View>
                        <Text style={yourOrdersView}>Your Orders</Text>
                        <ScrollView style={scrollView}>
                            {
                                searchOrderData != "" ?
                                    searchOrderData.map((data, index) => (
                                        <View key={index}>
                                            <TouchableOpacity style={orderClickBtn}
                                                onPress={() => {
                                                    navigation.navigate('OrdersStackTab', {
                                                        screen: 'OrderDetailsScreen',
                                                        params: { orderId: data.orderId, brandImage: data.brandImage, date: data.date, orderAmount: data.orderAmount }
                                                    })
                                                }}
                                            >
                                                <View style={orderInnerMainView}>
                                                    <View style={brandImageView}>
                                                        <Image style={brandImage} source={{ uri: data.brandImage }} />
                                                    </View>
                                                    <View style={storeDetailsView}>
                                                        <Text style={storeName}>{data.storeName}</Text>
                                                        <Text style={storeDate}>{data.date}</Text>
                                                        <Text style={storeId}>{'Order ID: ' + data.orderId}</Text>
                                                    </View>
                                                </View>
                                                <Text style={storeAmt}>{'$' + data.orderAmount}</Text>
                                                <View style={rightIcon}>
                                                    <Icon name={'chevron-right'} size={20} color="#D54501" light />
                                                </View>
                                            </TouchableOpacity>
                                            {
                                                searchOrderData.length != index + 1 ?
                                                    <View style={borderView} />
                                                    :
                                                    null
                                            }
                                        </View>
                                    ))
                                    :
                                    <View style={noSearchFoundView}>
                                        <Text style={noSearchFoundText}>No search found</Text>
                                    </View>
                            }

                        </ScrollView>
                    </View>
            }
        </View>
    )
}

export default OrdersTab;