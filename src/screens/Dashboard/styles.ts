import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  top: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    paddingVertical: 40
  },
  title: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 16,
  },
  inputWrapper: {
    width: '60%'
  },
  carousel: {
    marginTop: 20,
  }
});
