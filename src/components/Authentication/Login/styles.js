import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    modalStyle: {
        height: '20%', width: '90%', borderRadius: 20, padding: 20
    },
    modalTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    modalScript: {
        flex: 2,
        fontSize: 15,
        color: '#000000'
    },
    modalOkButton: {
        fontSize: 15,
        color: '#D54501'
    },
    headerWrapper: {
        backgroundColor: '#D54501',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
        fontStyle: 'italic'
    },
    loginFieldsMainWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'center' 
    },
    fieldsTitle: {
        color: '#000000', fontSize: 15
    },
    emailTitle: {
        marginTop: 60
    },
    passwordTitle: {
        marginTop: 20,
        textAlign: 'left'
    },
    fieldsTextInput: {
        color: '#000000',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end'
    },
    forgotPasswordButtonText: {
        color: '#000000',
        fontSize: 10,
        marginTop: 10,
        marginRight: 5
    },
    loginButton: {
        backgroundColor: '#000000',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 40,
        alignSelf: 'center'
    },
    loginButtonText: { 
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    bottomTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    bottomTextOne: {
        color: '#000000',
        fontSize: 10
    },
    bottomTextTwo: {
        color: '#D54501',
        fontSize: 10
    }

})