import { IPill } from "./types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Pill: React.FC<IPill> = ({ text, color, className = "", id }) => {

  const navigate = useNavigate();

  const handleQueueClick = () => {
    navigate(`/queues/${id}`);
  }

  const classes = classNames(className, {
    'inline-block rounded-lg px-2 hover:cursor-pointer': true,
    'bg-aci-red': color === 'red',
    'bg-aci-green': color === 'green',
    'bg-aci-blue': color === 'blue',
    'bg-aci-yellow': color === 'yellow',
    'bg-gray-400': color === 'gray',
    'bg-aci-orange': color === 'orange',
  });

  return (
    <div className={classes} onClick={handleQueueClick}>
      <span className='text-datail text-white'>
        {text}
      </span>
    </div>
  );
};

export default Pill;
