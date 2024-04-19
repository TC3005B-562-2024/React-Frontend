import React from "react";
import { IInformationBar } from "./types";
import {ItemSubitem} from "../ItemSubitem";

const InformationBar: React.FC<IInformationBar> = ({
    title,
    elements,
}) => {
    return (
        <div className='text-center text-white text-text font-bold inline-block rounded-lg bg-white drop-shadow-lg w-full'>
            <div className='text-title bg-aci-orange rounded-t-lg text-left indent-2.5 '>
                {title}
            </div>
            <div className='grid grid-cols-5 gap-auto flex justify-left'>
                {elements.map((element, index) => {
                    return (
                        <ItemSubitem
                            key={index}
                            {...element.itemsubitem}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default InformationBar;