import { IButton } from "./types";
import './Button.css';
import { Icon } from "../Icon";
import classNames from "classnames";

/**
 * A default Button component using Google's .
 */
const Button: React.FC<IButton> = ({ onClick, text, textType, color, icon, shadow }) => {

const mainClasses = classNames({
    'aci-button': true,
    'bg-blue-500': color === 'blue',
    'bg-red-500': color === 'red',
    'bg-green-500': color === 'green',
    'bg-yellow-500': color === 'yellow',
    'bg-gray-500': color === 'gray',
    'bg-aci-orange': color === 'orange',
    'shadow-md': shadow,
});

const textClasses = classNames({
    'font-bold text-white': true,
    'text-banner': textType === 'banner',
    'text-section-title': textType === 'section-title',
    'text-title': textType === 'title',
    'text-text': textType === 'text',
    'text-detail': textType === 'detail',
});

    return (
        <>
            <button className={mainClasses} onClick={onClick}>
                {text && <span className={textClasses}>{text}</span>}
                {icon && <Icon iconName={icon.iconName} color="white" filled={icon.filled} />}
            </button>
        </>
    );
};

Button.defaultProps = {
    color: 'orange',
};

export default Button;
