import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    paddingTop: theme.scaleHeight(119),
    marginHorizontal: theme.scaleWidth(24),
  },
  containerInputs: {
    marginTop: theme.scaleHeight(85),
    marginBottom: theme.scaleHeight(29),
  },
  passwordInput: {
    marginBottom: theme.scaleHeight(11),
  },
  labelForgot: {
    textAlign: 'right',
  },
  containerSignUp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.scaleHeight(160),
  },
});
