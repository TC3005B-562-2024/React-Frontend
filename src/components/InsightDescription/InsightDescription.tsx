import { IInsightDescription } from "./types";

const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, icon, description }) => {
    return (
        <div className="">
            {alertId && (
                <div>
                    <h1 className="text-3xl font-bold">
                        Alert: {alertId}
                    </h1>
                </div>
            )}
            <div className="flex border-solid border-2">
                <div className="flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h1>
                        {priority}
                    </h1>
                    <h1>
                        {description}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default InsightDescription;
