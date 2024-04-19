import { IAgentInfo,EmotionType } from "./types";
import { IPill } from "../Pill/types";
import {IButton} from "../Button/types";
import { Pill } from "../Pill";

const AgentInfo: React.FC<IAgentInfo> = ({AgentName, Emotion, skillArray, Status, topPriorityAlert,}) => {
    const styles = getEmotionType(Emotion);
    
    return (
        <div className="container mx-auto px-4 relative">
          <div className="text-left flex justify-between">
            <div>
            <p className="top-0 ">{Status}</p>
              <p>{AgentName}</p>
              <p>Emoción: {Emotion}</p>
              
              {skillArray.map((elemento,index) => (
                <Pill key={index} text={elemento} color="blue" />
              ))}
            </div>
            
            <div className="text-right">
              <p>{topPriorityAlert}</p>
            </div>
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