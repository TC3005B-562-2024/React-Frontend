import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    <path d="m280-120-56-56 63-66q-106-12-176.5-91.5T40-520q0-117 81.5-198.5T320-800h120v80H320q-83 0-141.5 58.5T120-520q0 72 46 127t117 69l-59-59 56-57 160 160-160 160Zm240-40v-280h360v280H520Zm0-360v-280h360v280H520Zm80-80h200v-120H600v120Z"
    fill={props.fill} />
  </svg>
)
export default SvgComponent
