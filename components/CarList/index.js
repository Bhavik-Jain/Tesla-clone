import { FlatList, View, Dimensions } from "react-native";
import { styles } from "../CarList/styles";
import CarItem from '../CarItem';
import cars from "./Cars";

export default function CarList(props) {
    return(
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false} 
            />
        </View>
    ); 
}