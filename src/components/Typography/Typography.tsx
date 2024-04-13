import { ITypography } from "./types";
import classNames from "classnames";

const Typography: React.FC<ITypography> = ({ type, color, bold, text }) => {

  const classes = classNames({
    'text-4xl': type === 'banner',
    'text-2xl': type === 'section title',
    'text-xl': type === 'title',
    'text-base': type === 'text',
    'text-black': color === 'black',
    'text-white': color === 'white',
    'text-red-600': color === 'red',
    'text-green-600': color === 'green',
    'text-blue-600': color === 'blue',
    'text-yellow-600': color === 'yellow',
    'text-gray-400': color === 'gray',
    'text-aci-orange': color === 'orange',
    'font-bold': bold,
  }); 
  
  return (
    <>
      {type === 'banner' && <h1 className={classes}>{text}</h1>}
      {type === 'section title' && <h2 className={classes}>{text}</h2>}
      {type === 'title' && <h3 className={classes}>{text}</h3>}
      {type === 'text' && <p className={classes}>{text}</p>}
    </>
  )
}

export default Typography;
