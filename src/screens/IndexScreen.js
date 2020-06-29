import React, {useContext}from 'react';
import { View, Text } from 'react-native';
import BlogContext from '../context/BlogContext';

export default IndexScreen = () =>{
    const value = useContext(BlogContext);
    return <View>
        <Text>Hello</Text>
        <Text>{value}</Text>
    </View>
}