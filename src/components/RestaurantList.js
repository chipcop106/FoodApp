import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import RestaurantCard from './RestaurantCard';
export default RestaurantList = ({title,restaurants}) => {
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
                    return <RestaurantCard name={item.name} imageSrc={item.image_url} rating={item.rating} review={item.review_count}/>
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
