import colors from 'assets/styles/colors';
import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, ColorValue, ActivityIndicator} from 'react-native';

interface SpinnerProps {
  processing: boolean;
  color?: ColorValue;
  size?: 'small' | 'large';
}

function Spinner({
  processing = false,
  size = 'large',
  color = colors.brandColor,
}: PropsWithChildren<SpinnerProps>) {
  if (processing) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator color={color} animating size={size} />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  spinnerWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
