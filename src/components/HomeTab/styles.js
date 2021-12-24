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
    scrollView: {
        paddingHorizontal: 20
    },
    storesHeader: {
        marginTop: 20,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    storeClick: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    brandMainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    brandInnerView: {
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
    storeName: {
        color: '#000000',
        fontSize: 15,
        marginLeft: 20
    },
    storeBorder: {
        borderTopWidth: 1,
        marginVertical: 10,
        borderColor: '#E2E2E2'
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