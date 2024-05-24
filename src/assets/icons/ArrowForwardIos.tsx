import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
