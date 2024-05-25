import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
