import React from 'react';
import {
 Text,TextInput,View,StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
Icon.loadFont();

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.searchContainer}>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        minLength={2}
        placeholder="Search" 
        style={styles.input} value={term}
        onChangeText={onTermChange} 
        onEndEditing = {onTermSubmit}
        />
               
        <View style={styles.icon}>
            <TouchableOpacity onPress= {onTermSubmit}>
                <Icon name="ios-search" color="#000" size={35} />
            </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:"#fff",
        height:50,
        borderRadius:8,
        marginHorizontal:15,
        flexDirection:"row",
        paddingHorizontal:15,
        marginTop:15,
    },
    icon:{
        marginLeft:15,
        alignSelf:"center"
    },
    input:{
        flex:1,
        fontSize:18
    }
});

export default SearchBar;