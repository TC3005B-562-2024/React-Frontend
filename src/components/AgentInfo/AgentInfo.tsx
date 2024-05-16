import { IAgentInfo } from "./types";
import { Pill } from "../Pill";
import { Icon } from "../Icon";
import { iconNames } from "../Icon/types";
import './AgentInfo.css';
import classNames from "classnames";

/**
 * Agent Info component that displays the agent's name, sentiment, skills, status, and top priority alert.
 */
const AgentInfo: React.FC<IAgentInfo> = ({ agentName, sentiment, skillArray, status, topPriorityAlert }) => {
  // If ONCALL phone_in_talk green, else if AVAILABLE call_end yellow, else clear_night blue.
  const [statusIconName, statusIconColor] = status === 'ONCALL' ? ['phone_in_talk', 'green'] : status === 'AVAILABLE' ? ['call_end', 'yellow'] : ['clear_night', 'blue'];

  // IF CRITICAL warning red, else if MEDIUM warning orange, else warning yellow.
  const [alertIconName, alertIconColor] = topPriorityAlert === 'CRITICAL' ? ['warning', 'red'] : topPriorityAlert === 'MEDIUM' ? ['warning', 'orange'] : ['warning', 'yellow'];

  const sentimentClasses = classNames('agent-info__content__main-info__text__sentiment', {
    'agent-info__content__main-info__text__sentiment--positive': sentiment === 'POSITIVE',
    'agent-info__content__main-info__text__sentiment--negative': sentiment === 'NEGATIVE',
  });

  // Define an array of colors for the skills
  const skillColors = ['blue', 'red', 'green', 'yellow', 'orange', 'gray'];

  return (
    <div className='agent-info__content'>
      <div className="agent-info__content__main-info">
        <div className="agent-info__content__main-info__icon">
          <Icon
            iconName={statusIconName as typeof iconNames[number]}
            color={statusIconColor as 'green' | 'yellow' | 'blue' | 'black' | 'white' | 'red' | 'gray' | 'orange' | undefined}
          />
        </div>
        <div className='agent-info__content__main-info__text'>
          <span className='agent-info__content__main-info__text__agent-name'>
            {agentName}
          </span>
          {sentiment !== undefined &&
            <span>
              <span className='agent-info__content__main-info__text__sentiment-placeholder'>
                Sentiment:
              </span>
              <span className={sentimentClasses}>
                {' ' + sentiment.charAt(0) + sentiment.substring(1).toLowerCase()}
              </span>
            </span>
          }
        </div>
        {topPriorityAlert !== undefined &&
          <div className="agent-info__content__main-info__icon">
            <Icon
              iconName={alertIconName as typeof iconNames[number]}
              color={alertIconColor as 'green' | 'yellow' | 'blue' | 'black' | 'white' | 'red' | 'gray' | 'orange' | undefined}
            />
          </div>
        }
      </div>
      <div className="agent-info__content__skills">
        {skillArray.map((skill, index) => (
          <Pill
            key={skill}
            text={skill}
            color={skillColors[index % skillColors.length] as 'green' | 'yellow' | 'blue' | 'red' | 'orange' | 'gray'} // Assign color based on skill
            className="agent-info__content__skills__pill"
          />
        ))}
      </div>
    </div>
  );
};

export default AgentInfo;
