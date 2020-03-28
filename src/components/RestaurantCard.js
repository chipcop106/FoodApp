import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
export default RestaurantCard = ({name,imageSrc,rating,review}) =>{
    return (
        <View style={styles.cardStyle}>
            <TouchableOpacity>
                <Image 
                    source={{uri:imageSrc}}
                    style={styles.image}
                />
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.meta}>Rating: {rating} <Icon name="star" color="#E8C960" size={20} />,  Reviews: {review}</Text>
              
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'#fff',
        padding:15,
        marginRight:15,
        borderRadius:8,
        width:300
    },
    name:{
        fontSize:18,
        color:'#000',
        marginTop:10,
        fontWeight:'600'
    },
    image:{
        height:125,
        width:270,
        borderRadius:8
    },
    meta:{
        marginTop:5,
        color:"#707070"
    }
});