import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
