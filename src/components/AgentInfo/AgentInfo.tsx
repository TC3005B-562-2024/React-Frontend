import { IAgentInfo } from "./types";
import { Pill } from "../Pill";
import { Icon } from "../Icon";
import './AgentInfo.css';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { IconNames } from "../Icon/types";

/**
 * Agent Info component that displays the agent's name, sentiment, skills, status, and top priority alert.
 */
const AgentInfo: React.FC<IAgentInfo> = ({ id, name, sentiment, queues, status, topPriorityAlert }) => {
  const navigate = useNavigate();
  // If ONCALL phone_in_talk green, else if Available call_end yellow, else clear_night blue.
  const [statusIconName, statusIconColor] = status === 'ONCALL' ? ['phone_in_talk', 'green'] : status === 'Available' ? ['call_end', 'yellow'] : ['clear_night', 'blue'];

  // IF CRITICAL warning red, else if MEDIUM warning orange, else warning yellow.
  const [alertIconName, alertIconColor] = topPriorityAlert === 'CRITICAL' ? ['warning', 'red'] : topPriorityAlert === 'MEDIUM' ? ['warning', 'orange'] : ['warning', 'yellowA'];

  const sentimentClasses = classNames('agent-info__content__main-info__text__sentiment', {
    'agent-info__content__main-info__text__sentiment--positive': sentiment === 'POSITIVE',
    'agent-info__content__main-info__text__sentiment--negative': sentiment === 'NEGATIVE',
  });

  // Define an array of colors for the skills
  const skillColors = ['blue', 'red', 'green', 'yellow', 'orange', 'gray'];

  const handleAgentClick = () => {
    navigate(`/agents/${id}`);
  }
  
  return (
    <div className='agent-info__content'>
      <div className="agent-info__content__main-info"onClick={handleAgentClick}>
        <div className="agent-info__content__main-info__icon">
          <Icon
            iconName={statusIconName as IconNames}
            color={statusIconColor as 'green' | 'yellow' | 'blue' | 'black' | 'white' | 'red' | 'gray' | 'orange' | undefined}
          />
        </div>
        <div className='agent-info__content__main-info__text'>
          <span className='agent-info__content__main-info__text__agent-name'>
            {name}
          </span>
          {sentiment !== undefined && sentiment !== null &&
            <span>
              <span className='agent-info__content__main-info__text__sentiment-placeholder'>
                Sentiment:
              </span>
              <span className={sentimentClasses}>
                {sentiment &&
                  ' ' + sentiment.charAt(0) + sentiment.substring(1).toLowerCase()
                }
              </span>
            </span>
          }
        </div>
        {topPriorityAlert !== undefined && topPriorityAlert !== null &&
          <div className="agent-info__content__main-info__icon">
            <Icon
            className="h-20"
              iconName={alertIconName as IconNames}
              color={alertIconColor as 'green' | 'yellowA' | 'blue' | 'black' | 'white' | 'red' | 'gray' | 'orange' | undefined}
            />
          </div>
        }
      </div>
      <div className="agent-info__content__skills">
        {queues.map((queue, index) => (
          <Pill
            key={queue.id}
            text={queue.name}
            color={skillColors[index % skillColors.length] as 'green' | 'yellow' | 'blue' | 'red' | 'orange' | 'gray'} // Assign color based on skill
            className="agent-info__content__skills__pill"
            id={queue.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentInfo;
