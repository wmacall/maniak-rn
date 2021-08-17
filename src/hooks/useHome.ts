import {getImagesList} from '@api';
import {useEffect, useState} from 'react';
import {IHomeItem} from 'screens/App/Home/types';
import {useDispatch} from 'react-redux';
import {REMOVE_USER_DATA} from 'store/user/types';

export const useHome = () => {
  const [imageList, setImageList] = useState<IHomeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getImages = async () => {
    try {
      const {data} = await getImagesList();
      setImageList(data);
      setIsLoading(false);
    } catch (error) {
      console.log({error});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const logOut = () => {
    dispatch({
      type: REMOVE_USER_DATA,
    });
  };

  return {
    isLoading,
    imageList,
    logOut,
  };
};
