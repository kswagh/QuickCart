import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, ScrollView, BackHandler, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import styles from './styles'

const HomeTab = ({ navigation }) => {

  BackHandler.addEventListener('hardwareBackPress', function () { return true })

  const [storeDetails, setStoreDetails] = useState(null)
  const [storeSearchData, setStoreSearchData] = useState(null)
  const [activityIndicatorFlag, setActivityIndicatorFlag] = useState(true)

  useEffect(() => {
    //Api will replace the dummy json
    let dummyJson = '{"storeDetails": [{"storeId": 1, "brandImage": "https://mma.prnewswire.com/media/222325/aldi_logo.jpg?w=200", "storeName": "Aldi\'s"},' +
      '{"storeId": 2, "brandImage": "https://cdn.corporate.walmart.com/dims4/WMT/ae1b273/2147483647/strip/true/crop/2332x1522+0+0/resize/800x522!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fc6%2Fa8%2F8e08a80f49a98a55c8c6a941d22d%2Fsparkbackground.jpg", "storeName": "Walmart"},' +
      '{"storeId": 3, "brandImage": "https://mediaservice.retailmenot.com/ws/mediagroup/EBVDOCYQUVFKLMMFY242ZDGKYI?width=255&height=255", "storeName": "Target"},' +
      '{"storeId": 4, "brandImage": "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_kwshpnaa/def_height/2700/def_width/2700/version/100012/type/1", "storeName": "Kroger"},' +
      '{"storeId": 5, "brandImage": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1474641785/dpl9lb22fiqpy24iae5p.jpg", "storeName": "Staples"},' +
      '{"storeId": 6, "brandImage": "https://assets1.progressivegrocer.com/files/styles/content_sm/s3/2020-08/unnamed_0.jpg?itok=6S8hI0BZ", "storeName": "Fresh Thyme Market"},' +
      '{"storeId": 7, "brandImage": "https://www.pngkit.com/png/detail/345-3459263_team-cvs-health-logo.png", "storeName": "CVS Pharmacy"},' +
      '{"storeId": 9, "brandImage": "https://livingonthecheap.com/lotc-cms/wp-content/uploads/2020/11/walgreens-logo.jpg", "storeName": "Walgreens"}' +
      ']}'
    let parsedJson = JSON.parse(dummyJson)

    setTimeout(() => {
      setStoreDetails(parsedJson.storeDetails)
      setStoreSearchData(parsedJson.storeDetails)
      setActivityIndicatorFlag(false)
    }, 1500);
  }, []) //[] is dependency array, and first argument is callback function

  //function to search the store in the list
  const searchStore = (text) => {
    const result = storeDetails.filter(store => {
      let storeName = `${store.storeName.toUpperCase()}`;
      let storeNameText = `${text.toUpperCase()}`;

      return storeName.indexOf(storeNameText) > -1
    });

    setStoreSearchData(result)
  }

  const { container, headerView, headerText, searchBarMainView, searchBarInnerView,
    searchTextInput, scrollView, storesHeader, storeClick, brandMainView, brandInnerView,
    brandImage, storeName, storeBorder, noSearchFoundView, noSearchFoundText } = styles

  return (
    <View style={container}>
      <View style={headerView}>
        <Text style={headerText}>Home</Text>
      </View>
      {
        activityIndicatorFlag ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#D54501" />
          </View>
          :
          <View style={{ flex: 1 }}>
            <View style={searchBarMainView}>
              <View style={searchBarInnerView}>
                <Icon name={'search'} size={20} color="#D54501" light />
              </View>
              <TextInput style={searchTextInput} placeholder="Search" placeholderTextColor={'#000000'}
                onChangeText={(text) => { searchStore(text) }}
              />
            </View>
            <Text style={storesHeader}>Your Stores</Text>
            <ScrollView style={scrollView}>
              {
                storeSearchData != "" ?
                  storeSearchData.map((data, index) => (
                    <View key={data.storeId}>
                      <TouchableOpacity style={storeClick}
                        onPress={() => { navigation.navigate('HomeStackTab', { screen: 'ScanCodeScreen', params: { storeId: data.storeId, brandImage: data.brandImage } }) }}
                      >
                        <View style={brandMainView}>
                          <View style={brandInnerView}>
                            <Image style={brandImage} source={{ uri: data.brandImage }} />
                          </View>
                          <Text style={storeName}>{data.storeName}</Text>
                        </View>
                        <Icon name={'chevron-right'} size={20} color="#D54501" light />
                      </TouchableOpacity>
                      {
                        storeSearchData.length != index + 1 ?
                          <View style={storeBorder} />
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

export default HomeTab;