import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Components from 'components';

function Dashboard(): React.ReactElement {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>IP Tracker</Text>
        <View style={styles.inputWrapper}>
          <Components.InputButtonRow placeholder="Search for any IP address" />
        </View>
      </View>
      <Components.NetworkInfo
        ipAddress="12.12.1212"
        location="Tashkent"
        timezone="UTC +5"
        isp="Uzonline"
      />
    </ScrollView>
  );
}

export default Dashboard;
