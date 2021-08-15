import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ILoginProps} from './types';
import styles from './styles';
import i18n from '../../../i18n';

const Login: FC<ILoginProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('login_screen_title')}</Text>
    </View>
  );
};

export default Login;
