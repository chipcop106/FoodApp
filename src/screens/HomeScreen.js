import React,{useState} from 'react';
import {
 Text,View,StyleSheet,ScrollView, SafeAreaView,StatusBar
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from './../hooks/useRestaurants';
import RestaurantList from './../components/RestaurantList'
const HomeScreen = () => {
    const styleTypes = ['default','dark-content', 'light-content'];
    const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[1]);
    const [term, setTerm] = useState("");
    const [loading,searchApi,restaurants,errorMessage] = useRestaurants();

    console.log(styleStatusBar);
    const filterResultByPrice = (price) =>{
        // price === '$' | '$$' | '$$$'
        return restaurants.filter(restaurant => restaurant.price === price);
    }


    return (
        <>
        <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
        <SafeAreaView>
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
        </SafeAreaView>
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