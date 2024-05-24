import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
