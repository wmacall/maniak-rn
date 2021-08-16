import {COLORS} from '@assets';
import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: theme.scaleHeight(86),
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 15,
  },
  containerItem: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: theme.scaleHeight(8),
  },
});
