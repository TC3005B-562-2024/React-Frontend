import { IPill } from "./types";
import classNames from "classnames";

const Pill: React.FC<IPill> = ({ text, color, className = "" }) => {

  const classes = classNames(className, {
    'inline-block rounded-lg px-2': true,
    'bg-aci-red': color === 'red',
    'bg-aci-green': color === 'green',
    'bg-aci-blue': color === 'blue',
    'bg-aci-yellow': color === 'yellow',
    'bg-gray-400': color === 'gray',
    'bg-aci-orange': color === 'orange',
  });

  return (
    <div className={classes}>
      <span className='text-datail text-white'>
        {text}
      </span>
    </div>
  );
};

export default Pill;
