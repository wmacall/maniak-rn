import React from 'react';
import {FlatList, View, SafeAreaView, Pressable} from 'react-native';
import {Item, Typography} from '@components';
import styles from './styles';
import i18n from '@i18n';

export const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Typography variant="h1">{i18n.t('home_screen_title')}</Typography>
        <Pressable style={styles.buttonLogOut}>
          <Typography variant="label">
            {i18n.t('home_screen_log_out_button')}
          </Typography>
        </Pressable>
      </View>
      <FlatList
        data={[{}, {}, {}, {}]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <Item />}
      />
    </View>
  );
};
