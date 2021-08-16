import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {IInputProps} from './types';
import {COLORS} from '@assets';
import styles from './styles';
import {Typography} from '../Typography';

export const Input: FC<IInputProps> = ({
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  label,
  style,
  containerStyle,
  labelStyle,
  labelVariant = 'label',
}) => (
  <View style={[styles.container, containerStyle]}>
    {label ? (
      <Typography variant={labelVariant} style={[styles.textLabel, labelStyle]}>
        {label}
      </Typography>
    ) : null}
    <TextInput
      style={[styles.containerInput, style]}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  </View>
);

Input.defaultProps = {
  autoCapitalize: 'none',
  placeholder: '',
  value: '',
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
  placeholderTextColor: COLORS.GREY,
  label: null,
  style: {},
  containerStyle: {},
  labelStyle: {},
};
