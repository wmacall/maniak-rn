import {theme} from '@utils';
import {COLORS} from 'assets/colors';
import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const EyeIcon: FC<SvgProps> = ({width, height}) => {
  return (
    <Svg
      width={theme.scaleWidth(width as number)}
      height={theme.scaleHeight(height as number)}
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.782 1.759C16.612.624 14.205 0 12.005 0S7.398.624 5.228 1.759C2.92 2.963 1.104 4.65.105 6.509a.871.871 0 00.34 1.175c.127.07.27.105.408.105.3 0 .595-.165.748-.45C2.92 4.886 5.705 3.122 8.506 2.283a5.54 5.54 0 00-1.93 4.212C6.577 9.537 9.009 12 12 12c2.997 0 5.424-2.468 5.424-5.505a5.532 5.532 0 00-1.93-4.212c2.8.84 5.586 2.603 6.905 5.056a.843.843 0 001.157.345.871.871 0 00.34-1.174c-.99-1.859-2.806-3.547-5.114-4.751zm-6.777 7.009c-1.235 0-2.234-1.01-2.24-2.263-.004-1.27.99-2.284 2.24-2.289.04 0 .074 0 .113.005-.074.19-.113.4-.113.615.005.92.733 1.659 1.639 1.659.211 0 .413-.04.6-.115 0 .035.005.065.005.1-.005 1.269-.994 2.283-2.244 2.288z"
        fill={COLORS.BLACK}
      />
    </Svg>
  );
};

EyeIcon.defaultProps = {
  width: 24,
  height: 12,
};
