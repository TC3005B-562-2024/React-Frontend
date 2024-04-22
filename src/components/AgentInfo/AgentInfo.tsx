import { IAgentInfo, EmotionType } from "./types";
import { IPill } from "../Pill/types";
import { IButton } from "../Button/types";
import { Pill } from "../Pill";
import { Icon } from "../Icon";

const AgentInfo: React.FC<IAgentInfo> = ({ agentName, sentiment, skillArray, status, topPriorityAlert }) => {
  
  // If ONCALL phone,red else if AVAILABLE phone,green else phone,yellow
  const [statusIconName, statusIconColor] = status === 'ONCALL' ? ['phone', 'red'] : status === 'AVAILABLE' ? ['phone', 'green'] : ['phone', 'yellow'];

  return (
    <div className='agent-info__content'>
      <div className="agent-info__content__main-info">
        <div className="agent-info__content__main-info__status-icon">
          <Icon iconName={statusIconName} color={statusIconColor} />
        </div>

        <div className="agent-info__content__main-info__alerts-icon">

        </div>
      </div>
      <div className="agent-info__content__skills">

      </div>
    </div>
  );
};

export default AgentInfo;
