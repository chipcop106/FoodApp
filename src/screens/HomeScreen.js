import React,{useState} from 'react';
import {
 Text,View,StyleSheet,ScrollView
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from './../hooks/useRestaurants';
import RestaurantList from './../components/RestaurantList'
const HomeScreen = () => {
    const [term, setTerm] = useState("");
    const [loading,searchApi,restaurants,errorMessage] = useRestaurants();
    const filterResultByPrice = (price) =>{
        // price === '$' | '$$' | '$$$'
        return restaurants.filter(restaurant => restaurant.price === price);
    }

    return (
        <>
            <View style={{marginBottom:15}}>
                <SearchBar 
                term={term} 
                onTermChange= {setTerm}
                onTermSubmit={() => searchApi(term)}
                />
            </View>
            
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {loading ? (<Text>Đang tải dữ liệu</Text>) :
            <ScrollView>
                <RestaurantList restaurants = {filterResultByPrice('$')} title="Cost Effective"/>
                <RestaurantList restaurants = {filterResultByPrice('$$')} title="Bit Pricier"/>
                <RestaurantList restaurants = {filterResultByPrice('$$$')} title="Big Price"/>
            </ScrollView>
}
        </>
    );
};
const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        flex:1
    }
});

export default HomeScreen;