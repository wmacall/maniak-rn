import {COLORS} from '@assets';
import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(6),
    paddingVertical: theme.scaleHeight(8),
    borderBottomColor: COLORS.GREY_TWO,
    borderBottomWidth: theme.scaleWidth(1),
  },
  containerInformation: {
    marginLeft: theme.scaleWidth(6),
  },
  image: {
    height: theme.scaleHeight(60),
    width: theme.scaleWidth(60),
    borderRadius: theme.scaleWidth(10),
    backgroundColor: COLORS.TEAL_GREY,
  },
  description: {
    color: COLORS.GREY,
    maxWidth: theme.scaleWidth(278),
    marginTop: theme.scaleHeight(4),
  },
});
