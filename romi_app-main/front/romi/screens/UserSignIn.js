import { StyleSheet,Text,View,TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
 
const UserSignIn = () => {
  const navigation = useNavigation()

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
//  listen for login
useEffect(()=>{
let subscribed = auth.onAuthStateChanged(user=>{
  if(user){
navigation.navigate('Home')
  }

})
return subscribed
},[])

  // handle sign up
  const handleSignUp = () =>{
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(`registered with ${user.email}`)
      alert('Your account was created Successfully!')
      setEmail('')
      setPassword('')
    })
    .catch(err =>alert(err.message))
  }

// handle login

const handleLogin = () => {

  auth
  .signInWithEmailAndPassword(email,password)
  .then(userCredentials => {
    const user = userCredentials.user;
    alert(`logged in with ${user.email}`)
    // navigate to the user profile screen
    navigation.navigate('Home')
    console.log(`logged in with ${user.email}`)
    setEmail('')
    setPassword('')
  })
}


  return (
    // set behavior back to padding
    <KeyboardAvoidingView style = {styles.container}  behavior = "height">
      
     <View style = {styles.inputContainer}>
     <TextInput
      placeholder = "Email"
      value = {email}
      onChangeText = {(txt)=>{setEmail(txt)}}
      style = {styles.input}
      />
      
      <TextInput
      placeholder = "Password"
      value = {password}
      onChangeText = {(txt)=>{setPassword(txt)}}
      secureTextEntry={true}
      style = {styles.input}
      />
     </View>
{/* button view */}
<View style = {styles.buttonContainer}>
<TouchableOpacity onPress = {handleLogin} style = {[styles.button]}>
<Text style = {styles.buttonText}>Login</Text>

</TouchableOpacity>
<TouchableOpacity onPress = {handleSignUp} style = {[styles.button,styles.buttonOutline]}>
<Text style = {styles.buttonOutlineText}>Register</Text>

</TouchableOpacity>

</View>


    </KeyboardAvoidingView>
  );
};

export default UserSignIn;

const styles = StyleSheet.create({
container:{flex:1,
justifyContent:'center',
alignItems: 'center',
backgroundColor:'#BDA23A'},

input:{backgroundColor:'#fff0d0',
paddingHorizontal:15,
paddingVertical:10,
borderRadius:10,
marginTop:5},

inputContainer:{width:'80%'},

button:{backgroundColor:'#abd8ea',
width:'100%',
padding:15,
borderRadius:10,
alignItems:'center'
},
buttonText:{
  color:'#BDA23A',
  fontWeight:'700',
fontSize:16},
buttonContainer:{width:'60%',
justifyContent:'center',
alignItems: 'center',
marginTop:40,},
buttonOutline:{backgroundColor:'#fff0d0',
marginTop:5,
borderColor:'#abd8ea',
borderWidth:2},
buttonOutlineText:{
  color:'#abd8ea',
  fontWeight:'700',
fontSize:16},


});
