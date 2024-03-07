import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ArrowRight from 'assets/icons/ArrowRight';
import colors from 'assets/styles/colors';

interface InputButtonRowProps {
  placeholder?: string;
}

const InputButtonRow: React.FC<InputButtonRowProps> = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = useCallback(() => {
    Alert.alert('Entered Data', inputValue);
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: colors.white,
  },
  button: {
    width: 40,
    height: 40,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    paddingHorizontal: 4,
  },
});

export default InputButtonRow;
