import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ImageView from '../ImageView';

const mockImageSource = { uri: 'mock-image-uri' };

describe('ImageView', () => {
  test('renders without crashing', () => {
    render(<ImageView imageSource={mockImageSource} />);
  });

  test('calls onPress when TouchableOpacity is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <ImageView imageSource={mockImageSource} onPress={mockOnPress} />
    );
    const touchableOpacity = getByTestId('touchableOpacity');

    fireEvent.press(touchableOpacity);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when TouchableOpacity is disabled', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <ImageView imageSource={mockImageSource} />
    );
  
    const touchableOpacity = getByTestId('touchableOpacity');
    fireEvent.press(touchableOpacity);
  
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});