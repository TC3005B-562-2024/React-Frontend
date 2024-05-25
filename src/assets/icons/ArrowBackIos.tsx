import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
