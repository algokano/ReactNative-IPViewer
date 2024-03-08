import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputButtonRow from '../InputButtonRow';

describe('InputButtonRow', () => {
  test('renders correctly with placeholder', () => {
    const onPressMock = jest.fn();
    const placeholder = 'Enter value';
    const { getByPlaceholderText, getByTestId } = render(
      <InputButtonRow placeholder={placeholder} onPress={onPressMock} />
    );

    const input = getByPlaceholderText(placeholder);
    const button = getByTestId('button');

    expect(input).toBeDefined();
    expect(button).toBeDefined();
  });

  test('calls onPress with correct value on button press', () => {
    const onPressMock = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <InputButtonRow placeholder='Enter value' onPress={onPressMock} />
    );

    const input = getByPlaceholderText('Enter value');
    const button = getByTestId('button');

    fireEvent.changeText(input, '123.45');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledWith('123.45');
  });

  test('formats input correctly', () => {
    const onPressMock = jest.fn();
    const { getByPlaceholderText } = render(
      <InputButtonRow placeholder='Enter value' onPress={onPressMock} />
    );

    const input = getByPlaceholderText('Enter value');

    fireEvent.changeText(input, '12.34');
    expect(input.props.value).toBe('12.34');
  });
});
