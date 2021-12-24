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
    emailView: {
        flex: 1,
        paddingHorizontal: 20
    },
    emailText: {
        color: '#000000',
        marginTop: 20,
        fontSize: 15
    },
    emailInput: {
        color: '#808080',
        borderColor: '#808080',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5
    },
    logoutBtnView: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    logoutBtn: {
        backgroundColor: '#000000',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5
    },
    logoutText: {
        color: '#ffffff',
        fontWeight: 'bold'
    }

})