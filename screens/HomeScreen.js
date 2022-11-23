import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { firstfonction } from '../reducers/users';

export default function HomeScreen({navigation}) {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(firstfonction('testttttt'))
    navigation.navigate("Login")
  }



  return (
    <View>
      <TouchableOpacity onPress={() => handleClick()}>
      <Text style={styles.button}>Bienvenue sur Twitter (by Hmida & Jocelyn)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingTop: '50%',
  },
})