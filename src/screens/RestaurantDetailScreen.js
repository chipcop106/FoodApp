import React,{useState,useRef,useEffect} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import yelp from './../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import RestaurantCard from './../components/RestaurantCard';
// import SkeletonContent from "react-native-skeleton-content";
Icon.loadFont();
const RestaurantDetailScreen = ({route,navigation}) =>{
    const id = route.params.itemId;
    const [loading,setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const componentIsMounted = useRef(true);
    const getRestaurant = async itemId =>{
        try {
            const response = await yelp.get(`/${itemId}`,{})
            if(componentIsMounted.current){
                setRestaurant(response.data);
                setLoading(false);
            }
        } catch (error) {
            setErrorMessage(error);
        }
    
    }
    useEffect(() => {
        getRestaurant(id);
        return () =>{
            componentIsMounted.current = false;
        }
    }, [])
    
    const {image_url,name,hours,rating,review_count,location,photos} = restaurant;
    if(!restaurant){
        return null;
    }
  
    return (
        loading ? (<View style={styles.loading}><Text style={{color:"red"}}>Đang tải dữ liệu...</Text></View>) : 
        (<View style={{}}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:image_url}}
                    style={styles.banner}
                />
            </View>
            <View style={styles.contentWrap}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.metaContainer}>
                <Text style={styles.meta}>Status: {hours && hours.is_open_now && hours.is_open_now === true ? (<Text style={{color:"green"}}>Opening</Text>) : (<Text style={{color:"red"}}>Closed</Text>)}</Text>
                <Text style={styles.seperate}>|</Text>
                <Text style={styles.meta}>Rating: {rating} <Icon name="star" color="#E8C960" size={20} /></Text>  
                <Text style={styles.seperate}>|</Text>
                <Text style={styles.meta}>Reviews: {review_count}</Text>
            </View>
            <Text style={styles.meta} numberOfLines={1}>Location: {location.display_address.join(" ")}</Text>
            <Text style={styles.mainTitle}>Gallery</Text>
            <View style={styles.gallery}>
                <FlatList 
                    data = {photos}
                    keyExtractor = {(photo) => photo}
                    renderItem = {({item}) => <RestaurantCard imageSrc={item}/>}
                    horizontal={true}
                />
            </View>
            </View>
        </View>)
    )
}

const styles = StyleSheet.create({
    contentWrap:{
        paddingHorizontal:15
    }, 
    loading:{
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    imageContainer:{
        flexDirection:"row",
        marginBottom:15,
    },
    banner:{
        height:200,
        flex:1
    },
    metaContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,

    },
    title:{
        fontSize:20,
        fontWeight:"600",
    },
    meta:{
        color:"#707070",
    },
    seperate:{
        color:"#707070",
        marginHorizontal:15,
    },
    gallery:{
       marginTop:15,
    },
    mainTitle:{
        fontSize:16,
        fontWeight:"600",
        marginTop:30
    }
});

export default RestaurantDetailScreen;