import i18n from '@i18n';
import {regex} from '@utils';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {REQUEST_DATA_USER} from 'store/user/types';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onLogin = async () => {
    setIsLoading(true);
    try {
      if (regex.email.test(email)) {
        if (password.trim() !== '') {
          dispatch({
            type: REQUEST_DATA_USER,
            payload: {
              username: email,
              password,
            },
          });
          setIsLoading(false);
        } else {
          Alert.alert(i18n.t('app_name'), i18n.t('validation_invalid_email'));
          setIsLoading(false);
        }
      } else {
        Alert.alert(i18n.t('app_name'), i18n.t('validation_invalid_password'));
        setIsLoading(false);
      }
    } catch (error) {
      console.log({error});
      setIsLoading(false);
    }
  };

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
