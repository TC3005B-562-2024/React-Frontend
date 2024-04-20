import React from "react";
import { IInsightDescription, PriorityType } from "./types";

const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, icon, description }) => {
    const styles = getPriorityStyles(priority);
    const iconName = getIconNameByPriority(priority);
    const customIcon = React.cloneElement(icon, { iconName: iconName });

    return (
        <div className="">
            {alertId && (
                <div>
                    <h1 className={"text-banner font-bold pb-3"}>
                        Alert: <span className={`${styles.textColor}`}>{alertId}</span>
                    </h1>
                </div>
            )}
            <div className={`flex border-solid border rounded-lg ${styles.bgColor} ${styles.borderColor} ${styles.textColor}`}>
                <div className="flex items-center justify-center px-4">
                    {customIcon}
                </div>
                <div className="p-2">
                    <h1 className="text-title capitalize">
                        {priority}
                    </h1>
                    <p className="text-text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsightDescription;

function getPriorityStyles(priority: PriorityType) {
    switch (priority) {
        case "intervene":
            return {
                bgColor: "bg-aci-red bg-opacity-20",
                borderColor: "border-aci-red",
                textColor: "text-aci-red"
            };
        case "transfer":
            return {
                bgColor: "bg-aci-orange bg-opacity-20",
                borderColor: "border-aci-orange",
                textColor: "text-aci-orange"
            };
        case "training":
            return {
                bgColor: "bg-[#F8C73E] bg-opacity-20",
                borderColor: "border-[#F8C73E]",
                textColor: "text-[#F8C73E]"
            };
        default:
            return {
                bgColor: "bg-gray-100",
                textColor: "text-black",
                borderColor: "border-gray-300"
            };
    }
}

function getIconNameByPriority(priority: PriorityType): string {
    switch (priority) {
        case "intervene":
            return "Intervene";
        case "transfer":
            return "Transfer";
        case "training":
            return "Training";
        default:
            return "DefaultIcon";
    }
}
