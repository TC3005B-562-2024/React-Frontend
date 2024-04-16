import { IIcon } from "./types";
import classNames from "classnames";

const Icon: React.FC<IIcon> = ({ iconName, color, filled}) => {

    const unfilledStyle = {
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const filledStyle = {
        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const classes = classNames({
        'material-symbols-outlined': true,
        'text-black': color === 'black',
        'text-white': color === 'white',
        'text-red-600': color === 'red',
        'text-green-600': color === 'green',
        'text-blue-600': color === 'blue',
        'text-yellow-600': color === 'yellow',
        'text-gray-400': color === 'gray',
        'text-aci-orange': color === 'orange',
    });

    return (
        <>
            <span style={filled ? filledStyle : unfilledStyle} className={classes}>
                {iconName}
            </span>
        </>
    );
};

Icon.defaultProps = {
    color: 'white',
    filled: false,
};

Icon.defaultProps = {
    color: 'white',
    filled: false,
};

export default Icon;
