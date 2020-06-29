import React, {useContext}from 'react';
import { View, Text, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

export default IndexScreen = () =>{
    const {data, addBlogPost } = useContext(BlogContext);

    return <View>
        <Text>Index Screen</Text>
        <Button 
            title="Add Post"
            onPress={()=>addBlogPost()}
        />
        <FlatList
         data={data}
         keyExtractor={(blogPost)=>blogPost.title}
         renderItem={({item})=>{
             return <Text>{item.title}</Text>
         }}
         />
    </View>
}