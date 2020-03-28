import React from 'react';
import {
 Text,TextInput,View,StyleSheet
} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
        <Text>Hello SearchBar</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:"#f0eeee"
    }
});

export default SearchBar;