import React from "react";
import { IInformationBar } from "./types";
import { ItemSubitem } from "../ItemSubitem";

const InformationBar: React.FC<IInformationBar> = ({
    title,
    elements,
}) => {
    return (
        <div className='text-center text-white text-text font-bold inline-block rounded-lg bg-white drop-shadow-lg w-full mb-4'>
            <div className='text-title bg-aci-orange rounded-t-lg text-left indent-2.5 '>
                {title}
            </div>
            <div className='flex flex-wrap justify-between'>
                {elements.map((element, index) => {
                    return (
                        <ItemSubitem
                            className="mx-10"
                            key={index}
                            {...element}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default InformationBar;
