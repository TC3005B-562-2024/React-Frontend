import { ITypography } from "./types";
import classNames from "classnames";

const Typography: React.FC<ITypography> = ({ type, color, bold, text }) => {

  const classes = classNames({
    'text-4xl': type === 'banner',
    'text-2xl': type === 'section title',
    'text-xl': type === 'title',
    'text-base': type === 'text',
    'text-xs': type === 'detail',
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

  // Function to format text with inline styles for highlighting
  const formatText = (text: string) => {
    // Assuming the text is provided in the format "[COLOR]Hellow World[/COLOR]"
    const parts = text.split(/\[(.*?)\]/); 
    let result: JSX.Element[] = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // Normal text
        result.push(<span key={i} className={classes}>{parts[i]}</span>);
      } else {
        // Highlighted text
        const colorClass = `text-${parts[i]}-500`; // Assuming part is a valid color
        result.push(<span key={i} className={`${classes} ${colorClass}`}>{parts[i + 1]}</span>);
        i++; 
      }
    }
    return result;
  };

  return (
    <>
      <div>{formatText(text)}</div>
    </>
  )
}

Typography.defaultProps = {
  type: 'text',
  color: 'black',
  bold: false,
};

export default Typography;
