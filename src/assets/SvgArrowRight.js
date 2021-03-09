import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowRigt(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.66 11.528h14M11.66 18.528l7-7-7-7"
        stroke="#550073"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgArrowRigt;
