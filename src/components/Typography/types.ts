import {TextProps} from 'react-native';

export type TypographyVariantTypes =
  | 'h1'
  | 'normal'
  | 'label'
  | 'title'
  | 'title-bold'
  | 'caption';

export interface ITypographyProps extends TextProps {
  variant?: TypographyVariantTypes;
}
