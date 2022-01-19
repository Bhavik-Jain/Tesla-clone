import React from "react";
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {styles} from './styles';
import StyledButton from "../StyledButton";

export default function CarItem(props) {

    const {title, tagline, taglineCTA, image} = props.car;
    
    return(
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>
                    {tagline} {''}
                    <Text style={styles.subTitleCTA}>
                        {taglineCTA}
                    </Text>
                    </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type="primary" 
                    content={'Custom Order'} 
                    onPress={() => {
                        console.warn('custom order');
                    }}
                />

                <StyledButton 
                    type="Secondary" 
                    content={'Existing Inventory'} 
                    onPress={() => {
                        console.warn('existing inventory');
                    }}
                />
            </View>
        </View>
    );    
}

// const styles = StyleSheet.create({
//     carContainer: {
//         width: '100%',
//         height: '100%'
//     },
//     titles: {
//         marginTop: '30%',
//         width: '100%',
//         alignItems: 'center'
//     },
//     title: {
//         fontSize: 35,
//         fontWeight: '500'
//     },
//     subTitle: {
//         fontSize: 12,
//         color: '#5c5e62'
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//         position: 'absolute'
//     }
// });