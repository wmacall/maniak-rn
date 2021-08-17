import React, {FC} from 'react';
import {FlatList, View, SafeAreaView, Pressable} from 'react-native';
import {Item, Typography} from '@components';
import styles from './styles';
import i18n from '@i18n';
import {useHome} from '@hooks';
import {Spinner} from 'native-base';
import {COLORS} from '@assets';
import EmptyIcon from 'assets/svg/EmptyIcon';

export const Home: FC = () => {
  const {isLoading, imageList, logOut} = useHome();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Typography variant="h1">{i18n.t('home_screen_title')}</Typography>
        <Pressable onPress={() => logOut()} style={styles.buttonLogOut}>
          <Typography variant="label">
            {i18n.t('home_screen_log_out_button')}
          </Typography>
        </Pressable>
      </View>
      {isLoading ? (
        <Spinner color={COLORS.PRIMARY} size="small" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <EmptyIcon />
              <Typography variant="h1">{i18n.t('empty_home')}</Typography>
            </View>
          )}
          data={imageList}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => <Item {...item} />}
        />
      )}
    </View>
  );
};
