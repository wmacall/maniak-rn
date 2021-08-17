import {Typography} from '../Typography';
import React from 'react';
import {FC} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {IHomeItem} from 'screens/App/Home/types';

export const Item: FC<IHomeItem> = ({title, description, image}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{
        uri: image,
      }}
    />
    <View style={styles.containerInformation}>
      <Typography variant="title">{title}</Typography>
      <Typography numberOfLines={1} style={styles.description}>
        {description}
      </Typography>
    </View>
  </View>
);
