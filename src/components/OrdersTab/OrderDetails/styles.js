import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerView: {
        flexDirection: 'row',
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
    orderGeneralDetailsView: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    orderSummText: {
        flex: 1,
        marginTop: 20,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 10
    },
    dateText: {
        marginTop: 20,
        fontSize: 10,
        color: '#8C8C8C',
        marginLeft: 20
    },
    orderIdText: {
        fontSize: 10,
        color: '#8C8C8C',
        marginLeft: 20
    },
    scrollView: {
        paddingHorizontal: 20
    },
    orderDetailsView: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    orderDetailsViewOne: {
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
    prodNameView: {
        flex: 1,
        justifyContent: 'center'
    },
    prodText: {
        color: '#000000',
        fontSize: 15,
        marginLeft: 20
    },
    qtyView: {
        width: 40,
        height: 20,
        backgroundColor: '#E2E2E2',
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyText: {
        color: '#000000'
    },
    itemAmtText: {
        color: '#000000',
        fontSize: 15,
        marginLeft: 40,
        width: 40,
        textAlign: 'right'
    },
    borderView: {
        borderTopWidth: 1,
        marginVertical: 10,
        borderColor: '#E2E2E2'
    },
    totalOrderAmtView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 20
    },
    totalText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        alignSelf: 'flex-end'
    },
    total: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        alignSelf: 'flex-end',
        width: 50,
        textAlign: 'right'
    }
})