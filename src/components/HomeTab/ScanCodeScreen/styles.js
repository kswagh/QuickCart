import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
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
    innerMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#D54501',
        height: 60
    },
    scanCodeText: {
        flex: 1,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    cartView: {
        position: 'absolute',
        right: -5,
        top: -5,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartViewText: {
        fontSize: 7,
        color: '#ffffff'
    }
})