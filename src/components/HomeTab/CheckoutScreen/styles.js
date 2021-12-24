import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    modalMainView: {
        height: '20%',
        width: '90%',
        borderRadius: 20,
        padding: 20
    },
    alertText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    alertMessage: {
        flex: 2,
        fontSize: 15,
        color: '#000000'
    },
    okButton: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
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
        flex: 1,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    yourItemsText: {
        marginTop: 20,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    searchTextInput: {
        flex: 1,
        color: '#000000',
        marginHorizontal: 10
    },
    scrollView: {
        paddingHorizontal: 20
    },
    productMainView: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    productInnerView: { 
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImageView: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 25
    },
    productImage: { 
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 25
    },
    removeButtonAndProductNameView: { 
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20 
    },
    productName: { 
        color: '#000000',
        fontSize: 15
    },
    removeButton: { 
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    removeButtonText: { 
        color: '#000000',
        fontSize: 10,
        marginLeft: 10
    },
    decreaseProductQtyView: { 
        width: 80,
        height: 25,
        backgroundColor: '#E2E2E2',
        flexDirection: 'row',
        marginLeft: 20
    },
    decreaseProductQtyBtn: { 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    proQtyView: { 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    prodQtyText: {
        color: '#000000'
    },
    increaseProdQtyBtn: { 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    productPrice: { 
        color: '#000000',
        fontSize: 15,
        marginLeft: 20,
        textAlign: 'right',
        width: 50
    },
    borderView: { 
        borderTopWidth: 1,
        marginVertical: 10,
        borderColor: '#E2E2E2'
    },
    cartTotalView: { 
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    totalText:{ 
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
    },
    makePaymentBtn: {
        backgroundColor: '#000000',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    makePaymentText:{
        color: '#ffffff',
        fontWeight: 'bold'
    }
})