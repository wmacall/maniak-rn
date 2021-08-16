import {theme} from '@utils';
import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const HomeIcon: FC<SvgProps> = ({width, height}) => {
  return (
    <Svg
      width={theme.scaleWidth(width as number)}
      height={theme.scaleHeight(height as number)}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.518 9.92a.483.483 0 00-.481.484v8.628h-5.169v-5.416a.483.483 0 00-.482-.485H6.614a.483.483 0 00-.482.485v4.294c0 .267.216.484.482.484a.483.483 0 00.481-.484V14.1h2.81v4.932H.963V7.178L8.5 1.105l7.717 6.218a.48.48 0 00.677-.075.486.486 0 00-.074-.68L8.8.105a.48.48 0 00-.602 0L.18 6.567a.485.485 0 00-.18.378v12.57c0 .268.216.485.482.485h16.036a.483.483 0 00.482-.484v-9.112a.483.483 0 00-.482-.485z"
        fill="#373A4D"
      />
    </Svg>
  );
};

HomeIcon.defaultProps = {
  width: 17,
  height: 20,
};

export default HomeIcon;
