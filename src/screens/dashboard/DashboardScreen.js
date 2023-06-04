import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../../css/style';

const Tab = createMaterialTopTabNavigator();

function DashboardScreen({ state, descriptors, navigation, position }) {
  return (
    <View style={styles.container}>
      <Text style={styles.space}> Redirect Screen!</Text>
      <View style={styles.space}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.space}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default DashboardScreen;