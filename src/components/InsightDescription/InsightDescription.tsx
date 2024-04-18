import { IInsightDescription, PriorityType } from "./types";

const InsightDescription: React.FC<IInsightDescription> = ({ priority, alertId, icon, description }) => {
    const styles = getPriorityStyles(priority);

    return (
        <div className="">
            {alertId && (
                <div>
                    <h1 className={"text-4xl font-bold pb-3"}>
                        Alert: <span className={`${styles.textColor}`}>{alertId}</span>
                    </h1>
                </div>
            )}
            <div className={`flex border-solid border rounded-lg ${styles.bgColor} ${styles.borderColor} ${styles.textColor}`}>
                <div className="flex items-center justify-center px-4">
                    {icon}
                </div>
                <div className="p-2">
                    <h1 className="text-2xl">
                        {priority}
                    </h1>
                    <p>
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
        case "Intervene":
            return {
                bgColor: "bg-[#CC3232] bg-opacity-20",
                borderColor: "border-[#CC3232]",
                textColor: "text-[#CC3232]"
            };
        case "Transfer":
            return {
                bgColor: "bg-[#FF9E00] bg-opacity-20",
                borderColor: "border-[#FF9E00]",
                textColor: "text-[#FF9E00]"
            };
        case "Training":
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
