import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerView: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#D54501',
        height: 60
    },
    headerText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBarMainView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#F4F4F4',
        borderRadius: 10
    },
    searchBarInnerView: {
        marginLeft: 10
    },
    searchTextInput: {
        flex: 1,
        color: '#000000',
        marginHorizontal: 10
    },
    yourOrdersView: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    scrollView: {
        paddingHorizontal: 20
    },
    orderClickBtn: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    orderInnerMainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    brandImageView: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 25
    },
    brandImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 25
    },
    storeDetailsView: {
        flex: 1,
        justifyContent: 'center'
    },
    storeName: {
        color: '#000000',
        fontSize: 15,
        marginLeft: 20
    },
    storeDate: {
        color: '#8C8C8C',
        fontSize: 10,
        marginLeft: 20
    },
    storeId: {
        color: '#8C8C8C',
        fontSize: 10,
        marginLeft: 20
    },
    storeAmt: {
        color: '#000000',
        fontSize: 15,
        marginLeft: 20
    },
    rightIcon: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    noSearchFoundView: {
        marginTop: '50%',
        alignSelf: 'center'
    },
    noSearchFoundText: {
        fontSize: 15,
        color: '#000000'
    }
})