import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import RestaurantCard from './RestaurantCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as RootNavigation from './../../App';
const RestaurantList = ({title,restaurants}) => {
    if(!restaurants.length){
        return null;
    }
    return (
        <View style={{      
            borderBottomWidth:1,
            borderBottomColor:'#e1e1e1',
            marginLeft:15,
            marginBottom:15}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={restaurants}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(restaurant) => restaurant.id}
                renderItem = {({item}) =>{
                    return (
                        <TouchableOpacity onPress={() => RootNavigation.navigate('RestaurantDetail',{itemId:item.id},)}>
                        <RestaurantCard 
                        name={item.name} 
                        imageSrc={item.image_url} 
                        rating={item.rating} 
                        review={item.review_count}
                        />
                    </TouchableOpacity>
                    )
                 
                }}
                style={styles.list}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
    },
    list:{
        marginBottom:15,
    }
});

export default RestaurantList;
