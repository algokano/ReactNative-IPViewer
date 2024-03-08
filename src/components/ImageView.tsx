import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ImageRequireSource,
  Image,
} from 'react-native';
import colors from 'assets/styles/colors';

interface ImageViewProps {
  imageSource: ImageRequireSource;
  isSelected?: boolean;
  onPress?: () => void;
}

const ImageView: React.FC<ImageViewProps> = ({
  imageSource,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity disabled={!onPress} style={styles.container}>
      <Image
        resizeMode={'cover'}
        source={imageSource}
        style={[styles.image, isSelected && styles.redBorder]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  redBorder: {
    borderWidth: 3,
    borderColor: colors.red,
  },
});

export default ImageView;
