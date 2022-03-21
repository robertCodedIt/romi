import React, {useState} from 'react';
import { ScrollView, StyleSheet, ImageBackground,TextInput } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';
function HomeScreen () {
   const navigation = useNavigation()
   const handleLogout = ()=>{
     auth
    .signOut()
    .then(()=>{
      console.log('unsubscribed')
      navigation.navigate('Login')
    })
    .catch(err=>alert(err.message))
   }
    return (
        <ImageBackground source={require('../assets/LIVE0.jpg')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
      
          <Card style={styles.card}>
            <Card.Title title= ' Go to Chat' />
            <Card.Content>
              <Button mode="contained" onPress={() => navigation.navigate('Login')}>
                Go!
              </Button>
              <Button mode="contained" onPress={() => navigation.navigate('ChatRoom')}>
                Chat!
              </Button>
              <Button mode="contained" onPress={() => {handleLogout()}}>
                Logout!
              </Button>
            </Card.Content>
          </Card>
        
       
        </ImageBackground>
      )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  },
  textInput: {
    marginBottom: 10
  }
});

export default HomeScreen