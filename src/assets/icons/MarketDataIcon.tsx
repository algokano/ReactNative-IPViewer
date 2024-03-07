import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MarketDataIcon({color = '#97A2B0'}) {
  return (
    <Svg width={20} height={17} viewBox="0 0 20 17" fill="none">
      <Path
        d="M1.25 6.5H19.25M5.25 11.5H5.26M9.25 11.5H11.25M4.25 1.5H16.25C17.9069 1.5 19.25 2.84315 19.25 4.5V12.5C19.25 14.1569 17.9069 15.5 16.25 15.5H4.25C2.59315 15.5 1.25 14.1569 1.25 12.5V4.5C1.25 2.84315 2.59315 1.5 4.25 1.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default MarketDataIcon;
