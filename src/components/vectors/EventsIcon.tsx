import * as React from "react"
import Svg, { Path } from 'react-native-svg'

interface EventsIconProps {
  color?: string;
  width?: number;
  height?: number;
  focused?: boolean;
}

const EventsIcon = ({ color = "#14AE5C", width = 25, height = 24,focused = false, ...props  }: EventsIconProps) => (
  
  <Svg
    width={focused ? width * 1.2 : width}
    height={focused ? height * 1.2 : height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M10.64 4.934a1.48 1.48 0 0 0-2.438.541l-4.92 13.536A1.484 1.484 0 0 0 4.664 21c.175-.001.348-.033.512-.094l13.535-4.922a1.481 1.481 0 0 0 .541-2.437L10.64 4.934ZM6.294 15.106l1.8-4.95 5.937 5.937-4.95 1.8-2.787-2.787Zm8.893-8.356a3.545 3.545 0 0 1 .36-1.46c.497-.993 1.435-1.54 2.64-1.54.629 0 1.032-.215 1.28-.676.13-.258.206-.54.22-.83a.75.75 0 0 1 1.5.006c0 1.206-.798 3-3 3-.628 0-1.03.215-1.28.676-.13.258-.205.54-.22.83a.75.75 0 1 1-1.5-.006Zm-2.25-3V1.5a.75.75 0 0 1 1.5 0v2.25a.75.75 0 1 1-1.5 0Zm9.531 7.72a.752.752 0 0 1-.53 1.28.75.75 0 0 1-.531-.22l-1.5-1.5a.75.75 0 0 1 1.061-1.062l1.5 1.501Zm.457-4.008-2.25.75a.75.75 0 1 1-.475-1.424l2.25-.75a.75.75 0 1 1 .475 1.424Z"
    />
  </Svg>
)
export default EventsIcon
