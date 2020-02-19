import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    StatusBar,
} from 'react-native'
import * as Font from 'expo-font'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    state =  {
        fontLoaded: false,
    }
        
    async componentDidMount() {
        await Font.loadAsync({
          'shelter': require('../../assets/fonts/shelter.otf'),
        });
    
        this.setState({ fontLoaded: true });
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}></Image>
                    <Text style={styles.title}> Instragam </Text>
                </View>

            </View>

        )
    }
}




const styles = StyleSheet.create({
    container: {
       marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        height: 30,
        fontSize: 28,
        fontFamily: null
    }
})

export default Header