import React, { Component } from 'react';
import Header from './components/Header'
import { View } from 'react-native'
import Post from './components/Post'
import { render } from 'react-dom';

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Maria Elena',
      comment: 'Muito massa! <3'
    }, {
      nickname: 'Jacó Armínio',
      comment: 'Mal paia'
    }]
      return (
        <View style={{ flex: 1 }}>
          <Header/>
          <Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
        </View>
      )
  }
}

