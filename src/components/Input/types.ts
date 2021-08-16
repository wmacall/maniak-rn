import {TypographyVariantTypes} from 'components/Typography/types';
import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface IInputProps extends TextInputProps {
  label?: string | null;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  labelVariant?: TypographyVariantTypes;
}
