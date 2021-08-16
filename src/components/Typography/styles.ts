import {StyleSheet} from 'react-native';
import {theme} from '@utils';
import {COLORS} from '@assets';

export default StyleSheet.create({
  h1: {
    fontSize: theme.scaleFont(28),
    lineHeight: theme.scaleHeight(33),
    fontWeight: '400',
    color: COLORS.PRIMARY,
  },
  normal: {
    fontSize: theme.scaleFont(14),
    lineHeight: theme.scaleHeight(16),
    fontWeight: '400',
    color: COLORS.PRIMARY,
  },
  label: {
    fontSize: theme.scaleFont(12),
    lineHeight: theme.scaleHeight(14),
    textTransform: 'uppercase',
    letterSpacing: theme.scaleWidth(1),
    fontWeight: '400',
    color: COLORS.PRIMARY,
  },
  title: {
    fontSize: theme.scaleFont(16),
    lineHeight: theme.scaleHeight(19),
    fontWeight: '400',
    color: COLORS.PRIMARY,
  },
  titleBold: {
    fontSize: theme.scaleFont(16),
    lineHeight: theme.scaleHeight(19),
    fontWeight: '700',
    color: COLORS.PRIMARY,
  },
  caption: {
    color: COLORS.GREY,
    fontWeight: '400',
    fontSize: theme.scaleFont(14),
    lineHeight: theme.scaleHeight(16),
  },
});
