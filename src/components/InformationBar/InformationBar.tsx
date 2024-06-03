import React from "react";
import { IInformationBar } from "./types";
import { ItemSubitem } from "../ItemSubitem";

const InformationBar: React.FC<IInformationBar> = ({
    title,
    elements,
}) => {
    return (
        <div data-testid="information-bar" className='text-center text-white text-text font-bold inline-block rounded-lg bg-white drop-shadow-lg w-full mb-4'>
            <div data-testid="information-bar-title" className='text-title bg-aci-orange rounded-t-lg text-left indent-2.5 '>
                {title}
            </div>
            <div data-testid="information-bar-grid" className='grid grid-cols-1 md:grid-cols-5 gap-4 '>
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
