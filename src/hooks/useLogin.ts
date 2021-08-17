import {COLORS} from '@assets';
import i18n from '@i18n';
import {regex} from '@utils';
import {Toast} from 'native-base';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store';
import {
  removeMessage,
  requestUserData,
  setStartLoading,
  setStopLoading,
} from 'store/user/action';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(({user}: AppState) => ({
    isLoading: user.isLoading,
    error: user.error,
  }));

  const onLogin = async () => {
    dispatch(setStartLoading());
    if (regex.email.test(email)) {
      if (password.trim() !== '') {
        dispatch(requestUserData(email, password));
      } else {
        Alert.alert(i18n.t('app_name'), i18n.t('validation_invalid_email'));
        dispatch(setStopLoading());
      }
    } else {
      Alert.alert(i18n.t('app_name'), i18n.t('validation_invalid_password'));
      dispatch(setStopLoading());
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        text: error,
        duration: 4000,
        textStyle: {textAlign: 'center'},
        style: {backgroundColor: COLORS.PRIMARY},
        onClose: () => dispatch(removeMessage()),
      });
    }
  }, [error, dispatch]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    showPassword,
    onLogin,
    setShowPassword,
  };
};
