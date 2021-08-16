import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: theme.scaleHeight(21),
  },
  textLabel: {
    marginBottom: theme.scaleHeight(4),
  },
  containerInput: {
    backgroundColor: COLORS.TEAL_GREY,
    width: theme.scaleWidth(328),
    borderRadius: theme.scaleHeight(2),
    height: theme.scaleHeight(48),
    padding: 0,
    paddingHorizontal: theme.scaleWidth(24),
    color: COLORS.PRIMARY,
  },
  icon: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(18),
  },
});
