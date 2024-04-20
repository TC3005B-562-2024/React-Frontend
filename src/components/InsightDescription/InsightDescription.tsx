import React from "react";
import { IInsightDescription, PriorityType } from "./types";
import { Icon } from "../Icon";
import classNames from 'classnames';

const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, description }) => {
    const styles = getPriorityStyles(priority);

    return (
        <div className=" container">
            {alertId && (
                <div>
                    <h1 className={"text-banner font-bold pb-3"}>
                        Alert: <span className={`${styles.textColor}`}>{alertId}</span>
                    </h1>
                </div>
            )}
            <div className={`flex border-solid border rounded-lg ${styles.bgColor} ${styles.borderColor} ${styles.textColor}`}>
                <div className=" min-w-16 mx-6">
                    {renderIcon(priority)}
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

const renderIcon = (priority: PriorityType) => {
    switch (priority) {
        case "intervene":
            return <Icon iconName="sentiment_dissatisfied" color="red" />;
        case "transfer":
            return <Icon iconName="move_down" color="orange" />;
        case "training":
            return <Icon iconName="warning" color="orange" />;
        default:
            return <Icon iconName="warning" color="orange" />
    }
}

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
