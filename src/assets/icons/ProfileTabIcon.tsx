import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileTabIcon({color = '#97A2B0'}) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        d="M14.1667 16V13.8333C14.1667 13.0819 13.8682 12.3612 13.3368 11.8299C12.8055 11.2985 12.0848 11 11.3334 11H5.66671C4.91526 11 4.19459 11.2985 3.66324 11.8299C3.13188 12.3612 2.83337 13.0819 2.83337 13.8333V16"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16H14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49996 7.79167C10.0648 7.79167 11.3333 6.52314 11.3333 4.95833C11.3333 3.39353 10.0648 2.125 8.49996 2.125C6.93515 2.125 5.66663 3.39353 5.66663 4.95833C5.66663 6.52314 6.93515 7.79167 8.49996 7.79167Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileTabIcon;
