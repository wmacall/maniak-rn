import React, {FC, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ILoginProps} from './types';
import {Content} from 'native-base';
import styles from './styles';
import i18n from 'i18n';
import {Button, Input, Typography} from '@components';

export const Login: FC<ILoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <SafeAreaView />
        <Typography variant="h1">{i18n.t('login_screen_title')}</Typography>
        <Typography variant="normal">
          {i18n.t('login_screen_subtitle')}
        </Typography>
        <View style={styles.containerInputs}>
          <Input
            label="Email"
            value={email}
            placeholder="email"
            onChangeText={_v => setEmail(_v)}
            keyboardType="email-address"
          />
          <Input
            placeholder="password"
            value={password}
            onChangeText={_v => setPassword(_v)}
            secureTextEntry={!showPassword}
            label="Password"
            containerStyle={styles.passwordInput}
            style={styles.passwordContainer}
            icon
            onPressIcon={() => setShowPassword(prev => !prev)}
          />
          <Typography style={styles.labelForgot}>
            {i18n.t('login_screen_forgot_password_label')}
          </Typography>
        </View>
        <Button isLoading={isLoading} onPress={() => setIsLoading(true)} />
        <View style={styles.containerSignUp}>
          <Typography variant="title">
            {i18n.t('login_screen_have_account')}
            <Typography variant="title-bold">
              {i18n.t('login_screen_sign_up')}
            </Typography>
          </Typography>
        </View>
      </Content>
    </View>
  );
};
