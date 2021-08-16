import {Typography} from '../Typography';
import React from 'react';
import {FC} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export const Item: FC = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{
        uri: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      }}
    />
    <View style={styles.containerInformation}>
      <Typography variant="title">Joyce</Typography>
      <Typography numberOfLines={1} style={styles.description}>
        Aenean nibh dui, interdum non rhoncus fgejg ergergAenean nibh dui,
        interdum non rhoncus fgejg ergerg Aenean nibh dui, interdum non rhoncus
        fgejg ergerg
      </Typography>
    </View>
  </View>
);
