import { IButton } from "./types";
import './Button.css';
import { Typography, Icon } from "..";
import classNames from "classnames";

const Button: React.FC<IButton> = ({ text, color, icon}) => {

const classes = classNames({
    'aci-button': true,
    'bg-blue-500': color === 'blue',
    'bg-red-500': color === 'red',
    'bg-green-500': color === 'green',
    'bg-yellow-500': color === 'yellow',
    'bg-gray-500': color === 'gray',
    'bg-aci-orange': color === 'orange',
});

    return <>
        <button className={classes} onClick={() => alert('Has presionado un botón!')}>
            {text && <Typography text={text} type="title" color="white" />}
            {icon && <Icon iconName="star" color="white"/>}
        </button>
    </>
};

export default Button;
