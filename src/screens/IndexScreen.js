import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

export default IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return <View>
        <Button
            title="Add Post"
            onPress={() => addBlogPost()}
        />
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})