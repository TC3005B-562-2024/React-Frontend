import { IPill } from "./types";
import classNames from "classnames";

const Pill: React.FC<IPill> = ({ text, color }) => {

    const classes = classNames({
        'inline-block rounded-lg px-2 py-1': true,
        'bg-red-600': color === 'red',
        'bg-green-600': color === 'green',
        'bg-blue-600': color === 'blue',
        'bg-yellow-600': color === 'yellow',
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
