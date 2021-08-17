import React from 'react';
import {HomeIcon} from '@assets';
import {Typography} from 'components/Typography';
import {View} from 'react-native';
import styles from './styles';
import {HOME_SCREEN} from '@constants';

export const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <HomeIcon />
        <Typography>{HOME_SCREEN}</Typography>
      </View>
    </View>
  );
};
