import React, {useContext}from 'react';
import { View, Text } from 'react-native';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

export default IndexScreen = () =>{
    const blogPost = useContext(BlogContext);
    return <View>
        <Text>Hello</Text>
        <FlatList
         data={blogPost}
         keyExtractor={(blogPost)=>blogPost.title}
         renderItem={({item})=>{
             return <Text>{item.title}</Text>
         }}
         />
    </View>
}