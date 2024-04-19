import React from "react";
import { IItemSubitem } from "./types";
import classNames from "classnames";


const ItemSubitem: React.FC<IItemSubitem> = ({ 
    title, 
    content, 
    color, 
}) => {
    const classes = classNames({
        'text-black': color === 'black',
        'text-red-600': color === 'red',
        'text-green-600': color === 'green',
        'text-yellow-600': color === 'yellow',
        'text-gray-400': color === 'gray',
    
    })
    return(
        <div className='text-center text-gray-400 text-text font-bold inline-block'>
            {title}
            <div className={classes}>
                {content}
            </div> 
        </div>
    )
}

ItemSubitem.defaultProps = {
    title: 'Item',
    content: 'Subitem',
    color: 'black',
}

export default ItemSubitem;