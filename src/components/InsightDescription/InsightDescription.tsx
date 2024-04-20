import React from "react";
import { IInsightDescription, PriorityType } from "./types";
import { Icon } from "../Icon";
import classNames from 'classnames';
import './styles.css';

const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, description }) => {
    const alertClass = classNames({
        'insight-description__container__alert-id__span--intervene': priority === 'intervene',
        'insight-description__container__alert-id__span--transfer': priority === 'transfer',
        'insight-description__container__alert-id__span--training': priority === 'training',
    });

    const priorityClass = classNames({
        'insight-description__container__card--intervene': priority === 'intervene',
        'insight-description__container__card--transfer': priority === 'transfer',
        'insight-description__container__card--training': priority === 'training',
      });

    return (
        <div className="w-full">
            {alertId && (
                <div>
                    <h1 className={"insight-description__container__alert-id"}>
                        Alert: <span className={alertClass}>{alertId}</span>
                    </h1>
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
