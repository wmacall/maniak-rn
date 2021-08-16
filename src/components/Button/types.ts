import {PressableProps} from 'react-native';

export interface IButtonProps extends PressableProps {
  isLoading?: boolean;
  onPress: () => void;
}
