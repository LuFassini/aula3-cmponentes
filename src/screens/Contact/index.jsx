import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from "./style"

export default function Contact() {

  const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <Text>Contact</Text>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate ("Contact")}>

        <Text> Contact </Text>

        </TouchableOpacity>


    </View>
  )
};
