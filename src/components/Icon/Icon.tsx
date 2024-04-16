import { IIcon } from "./types";
import classNames from "classnames";

import AmazonConnectIcon from '../../assets/amazon-connect.svg?react';

const Icon: React.FC<IIcon> = ({ iconName, color, filled}) => {

    const unfilledStyle = {
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const filledStyle = {
        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    if(iconName !== 'logo') {
        const iconClasses = classNames({
            'material-symbols-outlined': true,
            'text-black': color === 'black',
            'text-white': color === 'white',
            'text-aci-blue': color === 'blue',
            'text-aci-red': color === 'red',
            'text-aci-green': color === 'green',
            'text-aci-yellow': color === 'yellow',
            'text-gray-400': color === 'gray',
            'text-aci-orange': color === 'orange',
        });

        return (
            <span style={filled ? filledStyle : unfilledStyle} className={iconClasses}>{iconName}</span>
        );
    }else{
        const svgClasses = classNames({
            'fill-black': color === 'black',
            'fill-white': color === 'white',
            'fill-aci-blue': color === 'blue',
            'fill-aci-red': color === 'red',
            'fill-aci-green': color === 'green',
            'fill-aci-yellow': color === 'yellow',
            'fill-gray-400': color === 'gray',
            'fill-aci-orange': color === 'orange',
        });

        return (
            <AmazonConnectIcon className={svgClasses}/> 
        );
    }

};

Icon.defaultProps = {
    color: 'white',
    filled: false,
};

export default Icon;
