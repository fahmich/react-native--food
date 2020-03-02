import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search-plus" style={styles.iconStyle} />      
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        
        style={styles.inputStyle}
        placeholder="Search+"

        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#F0EEEE',
  
    flexDirection: 'row',
    marginBottom: 25
  },
  inputStyle: {
    // borderColor:'black',
    // borderWidth:1,
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
