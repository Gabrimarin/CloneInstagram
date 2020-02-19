import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Marinho',
            email: 'gabriel12367@live.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Legaaaaal!'
            }, {
                nickname: 'Ana Luiza',
                comment: 'Belíssimo Retrato'
            }]
        }, {
            id: Math.random(),
            nickname: 'Franchisco',
            email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item}/>} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})