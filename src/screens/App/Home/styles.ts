import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    marginVertical: theme.scaleHeight(28),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.scaleWidth(24),
  },
  buttonLogOut: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
