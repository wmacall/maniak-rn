import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Spinner} from 'native-base';
import i18n from 'i18n';
import {Typography} from '../Typography';
import styles from './styles';
import {COLORS} from '@assets';
import {IButtonProps} from './types';

export const Button: FC<IButtonProps> = ({isLoading, onPress}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (!isLoading) {
          onPress();
        }
      }}>
      {isLoading ? (
        <Spinner color={COLORS.WHITE} size="small" />
      ) : (
        <Typography variant="normal" style={styles.label}>
          {i18n.t('login_screen_title')}
        </Typography>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  isLoading: false,
  onPress: () => {},
};
