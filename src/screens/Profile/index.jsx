import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {

  const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <Text>Home</Text>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate ("Home")}>

        <Text> Profile </Text>

        </TouchableOpacity>


    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});