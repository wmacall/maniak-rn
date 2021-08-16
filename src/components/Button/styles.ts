import {COLORS} from '@assets';
import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: theme.scaleWidth(328),
    height: theme.scaleHeight(56),
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    color: COLORS.WHITE,
    textTransform: 'uppercase',
    letterSpacing: theme.scaleWidth(2),
    fontWeight: '700',
  },
});
