import { IIcon } from "./types";
import classNames from "classnames";

const Icon: React.FC<IIcon> = ({ iconName, color, filled, size}) => {

    const unfilledStyle = {
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const filledStyle = {
        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const classes = classNames({
        'material-symbols-outlined': true,
        // Color
        'text-black': color === 'black',
        'text-white': color === 'white',
        'text-red-600': color === 'red',
        'text-green-600': color === 'green',
        'text-blue-600': color === 'blue',
        'text-yellow-600': color === 'yellow',
        'text-gray-400': color === 'gray',
        'text-aci-orange': color === 'orange',
        // Size
        'text-banner': size === 'banner',
        'text-section-title': size === 'section-title',
        'text-title': size === 'title',
        'text-text': size === 'text',
        'text-detail': size === 'detail',
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
    size: 'text',
};

export default Icon;
