import React from "react";
import { IInsightDescription } from "./types";
import { Icon } from "../Icon";
import classNames from 'classnames';
import './InsightDescription.css';

/**
 * Component that shows the description of an Insight
 */
const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, description }) => {
    const renderIcon = (priority: "intervene" | "transfer" | "training") => {
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

    const priorityClass = classNames({
        'insight-description__container__card--intervene': priority === 'intervene',
        'insight-description__container__card--transfer': priority === 'transfer',
        'insight-description__container__card--training': priority === 'training',
      });

    return (
        <div className="insight-description__container">
            {alertId && (
                <div>
                    <span className="insight-description__container__alert-id">
                        Alert: <span className="text-aci-orange">{alertId}</span>
                    </span>
                </div>
            )}
            <div className={priorityClass}>
                <div className="insight-description__container__card__icon">
                    {renderIcon(priority)}
                </div>
                <div className="insight-description__container__card__content">
                    <h1 className="insight-description__container__card__content__priority">
                        {priority}
                    </h1>
                    <p className="insight-description__container__card__content_description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsightDescription;
