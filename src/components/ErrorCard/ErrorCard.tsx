import React from "react";
import { IErrorCard } from "./types";

/**
 * An error card that displays the error message
 */

const ErrorCard: React.FC<IErrorCard> = ({ title }) => {
    return (
        <div className="w-full bg-white text-aci-red text-left px-5 py-1 rounded-xl shadow-lg text-text font-bold">
            {title}
        </div>
    );
};

export default ErrorCard;