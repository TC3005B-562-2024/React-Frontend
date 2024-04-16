import { IButton } from "./types";
import './Button.css';
import { Icon } from "../Icon";
import classNames from "classnames";

/**
 * A default Button component using Google's .
 */
const Button: React.FC<IButton> = ({ onClick, text, size, color, icon, shadow }) => {

const mainClasses = classNames({
    'aci-button': true,
    'bg-aci-blue': color === 'blue',
    'bg-aci-red': color === 'red',
    'bg-aci-green': color === 'green',
    'bg-aci-yellow': color === 'yellow',
    'bg-gray-400': color === 'gray',
    'bg-aci-orange': color === 'orange',
    'shadow-md': shadow,
});

const textClasses = classNames({
    'font-bold text-white': true,
    'text-banner': size === 'banner',
    'text-section-title': size === 'section-title',
    'text-title': size === 'title',
    'text-text': size === 'text',
    'text-detail': size === 'detail',
});

    return (
        <>
            <button className={mainClasses} onClick={onClick}>
                {text && <span className={textClasses}>{text}</span>}
                {icon && <Icon iconName={icon.iconName} color="white" filled={icon.filled} size={size}/>}
            </button>
        </>
    );
};

Button.defaultProps = {
    color: 'orange',
    size: 'text',
};

export default Button;
