import React from "react";
import { IErrorCard } from "./types";

const ErrorCard: React.FC<IErrorCard> = ({ title }) => {
    return (
        <div className="bg-white-500 text-red-700 text-left p-4 rounded-xl shadow-lg text-2xl font-bold">
            {title}
        </div>
    );
};

export default ErrorCard;