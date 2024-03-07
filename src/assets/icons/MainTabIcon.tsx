import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

function MainTabIcon({color = '#97A2B0'}) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <G clipPath="url(#clip0_2284_3548)">
        <Path
          d="M19.0003 9.20977L13.6673 5.06177C13.1993 4.69768 12.6232 4.5 12.0303 4.5C11.4373 4.5 10.8613 4.69768 10.3933 5.06177L5.05927 9.20977C4.73872 9.45905 4.47937 9.7783 4.30103 10.1431C4.12269 10.5079 4.03008 10.9087 4.03027 11.3148V18.5148C4.03027 19.0452 4.24099 19.5539 4.61606 19.929C4.99113 20.3041 5.49984 20.5148 6.03027 20.5148H18.0303C18.5607 20.5148 19.0694 20.3041 19.4445 19.929C19.8196 19.5539 20.0303 19.0452 20.0303 18.5148V11.3148C20.0303 10.4918 19.6503 9.71477 19.0003 9.20977Z"
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 15.5C13.79 16.833 10.208 16.833 8 15.5"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2284_3548">
          <Rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default MainTabIcon;
