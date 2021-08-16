import React, {FC} from 'react';
import {Text} from 'react-native';
import {ITypographyProps} from './types';
import styles from './styles';

export const Typography: FC<ITypographyProps> = ({
  children,
  variant = 'normal',
  style,
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'normal':
        return styles.normal;
      case 'label':
        return styles.label;
      case 'title':
        return styles.title;
      case 'title-bold':
        return styles.titleBold;
      case 'caption':
        return styles.caption;
    }
  };

  const selectedStyle = getStyles();

  return <Text style={[selectedStyle, style]}>{children}</Text>;
};
