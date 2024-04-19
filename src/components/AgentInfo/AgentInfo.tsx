import { IAgentInfo, EmotionType } from "./types";
import { IPill } from "../Pill/types";
import { IButton } from "../Button/types";
import { Pill } from "../Pill";

const AgentInfo: React.FC<IAgentInfo> = ({ AgentName, Emotion, skillArray, Status, topPriorityAlert, }) => {
  const styles = getEmotionType(Emotion);

  return (
    <div className="">
      <div className="flex items-center space-x-7 pb-3 rounded-3xl">
        <p className=" scale-[180%]">{Status}</p>
        <div className="">
          <p className="text-4xl pb-2">{AgentName}</p>
          <p className="text-lg">Emoción: {Emotion}</p>
        </div>
        <p className="scale-[180%]">{topPriorityAlert}</p>
      </div>
      <div className="space-x-2 scale-[90%]">
        {skillArray.map((elemento, index) => (
          <Pill key={index} text={elemento} color="blue" />
        ))}
      </div>
    </div>
  );
};

export default AgentInfo;

function getEmotionType(Emotion: EmotionType) {
  switch (Emotion) {
    case "Positive":
      return {
        textColor: "text-[#99C140]"
      };
    case "Negative":
      return {
        textColor: "text-[#CC3232]"
      };
    default:
      return {
        textColor: "text-black",
      };
  }
}
