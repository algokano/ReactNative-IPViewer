import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';

interface NetworkInfoProps {
  ipAddress: string | undefined;
  location: string | undefined;
  timezone: string | undefined;
  isp: string | undefined;
}

const NetworkInfo: React.FC<NetworkInfoProps> = ({
  ipAddress,
  location,
  timezone,
  isp,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>IP Address</Text>
        <Text style={styles.value}>{ipAddress}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Location</Text>
        <Text style={styles.value}>{location}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Timezone</Text>
        <Text style={styles.value}>UTC {timezone}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>ISP</Text>
        <Text style={styles.value}>{isp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    paddingVertical: 20,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 12,
  },
});

export default NetworkInfo;
