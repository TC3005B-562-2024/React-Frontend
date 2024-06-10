import React from "react";
import { IItemSubitem } from "./types";
import classNames from "classnames";


const ItemSubitem: React.FC<IItemSubitem> = ({
    className,
    title = 'Item',
    content = 'Subitem',
    color = 'black',
}) => {
    const parentClasses = classNames(
        ' box-border text-center text-gray-400 text-text font-bold inline-flex flex-col items-center',
        className
    );

    const classes = classNames({
        'text-black': color === 'black',
        'text-red-600': color === 'red',
        'text-green-600': color === 'green',
        'text-yellow-600': color === 'yellow',
        'text-gray-400': color === 'gray',

    })
    return (
        <div data-testid="ItemSubitem" className={parentClasses}>
            {title}
            <div className={classes} data-testid="ItemSubitem-content">
                {content}
            </div>
        </div>
    )
}

export default ItemSubitem;