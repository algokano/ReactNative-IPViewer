import React, {useCallback, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowRight from 'assets/icons/ArrowRight';
import colors from 'assets/styles/colors';

interface InputButtonRowProps {
  placeholder?: string;
  onPress: (text: string) => void;
}

const InputButtonRow: React.FC<InputButtonRowProps> = ({
  placeholder,
  onPress,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = useCallback(() => {
    onPress(inputValue);
  }, [inputValue]);

  const handleInputChange = (input: string) => {
    const formattedInput = input.replace(/[^0-9.]/g, '');

    if (formattedInput.length <= 15) {
      const parts = formattedInput.split('.');
      const formattedParts = parts.map(part => {
        return part.slice(0, 3);
      });

      setInputValue(formattedParts.join('.'));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleInputChange}
        onSubmitEditing={event => onPress(event.nativeEvent.text)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        testID="button"
        style={styles.button}
        onPress={handleButtonPress}>
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
