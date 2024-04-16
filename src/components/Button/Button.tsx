import { IButton } from "./types";
import './Button.css';
import { Typography, Icon } from "..";
import classNames from "classnames";

const Button: React.FC<IButton> = ({ onClick, typo, color, icon, shadow }) => {

const classes = classNames({
    'aci-button': true,
    'bg-blue-500': color === 'blue',
    'bg-red-500': color === 'red',
    'bg-green-500': color === 'green',
    'bg-yellow-500': color === 'yellow',
    'bg-gray-500': color === 'gray',
    'bg-aci-orange': color === 'orange',
    'shadow-md': shadow,
});

    return (
        <>
            <button className={classes} onClick={onClick}>
                {typo && <Typography text={typo?.text} type={typo?.type} color="white" />}
                {icon && <Icon iconName={icon.iconName} color="white" filled={icon.filled} />}
            </button>
        </>
    )
};

Button.defaultProps = {
    color: 'orange',
};

export default Button;
