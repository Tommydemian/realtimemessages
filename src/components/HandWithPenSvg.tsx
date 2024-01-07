import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
export const HandWithPen = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 0h28v28H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01111)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
);
