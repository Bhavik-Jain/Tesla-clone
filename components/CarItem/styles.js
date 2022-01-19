import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 14,
        color: '#5c5e62'
    },
    subTitleCTA: {
        textDecorationLine: 'underline'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});