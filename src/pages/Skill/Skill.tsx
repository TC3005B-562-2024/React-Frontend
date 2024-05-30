import React, { useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { InformationBar, ProgressCard, ErrorCard, AlertExpansionPanel, AgentInfo, InfoLoader } from '../../components';
import { getSkillInfo } from '../../services';
import { IAlertCard } from '../../components/AlertCard/types';
import './Skill.css';
import { ISkillInformation } from '../../services/skillInfo/types';
import { shortId, noUndersocore, TitleCase } from "../../Utils/utils";

const Skill: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorSkillInfo, setErrorSkillInfo] = useState<boolean>(false);
  const [skillInfo, setSkillInfo] = useState<ISkillInformation | null>(null);

  const getSkillInformation = useCallback(async () => {
    await getSkillInfo(id)
    .then((res) =>{
      if (res !== null) setSkillInfo(res);
    })
    .catch((err) => {
      console.error(err);
      setErrorSkillInfo(true);
    })
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    getSkillInformation();
  }, [getSkillInformation]);

  return (
    <>
    <div>
      <div>
        <span className='sections-text'>
          Skill: <span className=' text-aci-orange'>{shortId(id ?? '')}</span>
        </span>
        {loading &&
          <InfoLoader></InfoLoader>
        }
        {errorSkillInfo &&
          <ErrorCard title='Error fetching skill'></ErrorCard>
        }
        <div>
          {skillInfo &&
          <InformationBar
            title={skillInfo.skillsInformationDTO.title}
            elements={skillInfo.skillsInformationDTO.sections?.map(section => ({
              title: section.sectionTitle,
              content: section.sectionValue,
              color: section.color as "black" | "red" | "green" | "yellow" | "gray"
            })) || []}
          />
          }
          {skillInfo && skillInfo?.metrics.sections !== null &&
          <InformationBar 
            title={skillInfo.metrics.sectionTitle}
            elements={skillInfo.metrics.sections?.map(section => ({
              title: TitleCase(noUndersocore(section.sectionTitle)),
              content: section.sectionValue,
              color: section.color as "black" | "red" | "green" | "yellow" | "gray"
            })) || []}
          />
          }
        </div>
        <div>
          <span className='sections-text'>
            Alerts
          </span>
          {loading &&
            <InfoLoader></InfoLoader>
          }
          {errorSkillInfo &&
            <ErrorCard title='Error fetching alerts'></ErrorCard>
          }
          {!loading && !errorSkillInfo && skillInfo !== undefined && skillInfo?.alerts.high.length === 0 && skillInfo?.alerts.medium.length === 0 && skillInfo?.alerts.low.length === 0 &&
            <ErrorCard title='No alerts found'></ErrorCard>
          }
          <div className="flex flex-col space-y-4 p-1">
            {skillInfo && skillInfo?.alerts.high.length !== 0 &&
              <AlertExpansionPanel
                alerts={skillInfo?.alerts.high.map(alert => ({
                  alertId: alert.id,
                  alertName: alert.insight.category.denomination,
                  alertOwner: alert.resource,
                  alertPriority: 'CRITIC',
                  individualAlertLink: `${alert.id}`
                })) as IAlertCard[]}
              />
            }
            {skillInfo && skillInfo?.alerts.medium.length !== 0 &&
              <AlertExpansionPanel
                  alerts={skillInfo?.alerts.medium.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category.denomination,
                    alertOwner: alert.resource,
                    alertPriority: 'MEDIUM',
                    individualAlertLink: `${alert.id}`
                  })) as IAlertCard[]}
                />
              }
              {skillInfo && skillInfo?.alerts.low.length !== 0 &&
                <AlertExpansionPanel
                  alerts={skillInfo.alerts.low.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category.denomination,
                    alertOwner: alert.resource,
                    alertPriority: 'LOW',
                    individualAlertLink: `${alert.id}`
                  })) as IAlertCard[]}
                />
              }
            </div>
          </div>
          <div>
            <span className='sections-text'>
              Trainings
            </span>
            <div className=' space-y-4 p-1'>
            {loading &&
              <InfoLoader></InfoLoader>
            }
            {skillInfo &&
              <ProgressCard
                label='Trainings of Call'
                trainings={skillInfo.trainings.map(training => ({
                  progress: training.resourceTrainingProgress,
                  label: training.resourceName
                }))}
              />
            }
            </div>
          </div>
          <div>
            <span className='sections-text'>
              Agents
            </span>
            {loading &&
                <InfoLoader></InfoLoader>
              }
              {errorSkillInfo &&
                <ErrorCard title='Error fetching agents'></ErrorCard>
              }
            <div className='cards-container'>
              {skillInfo && skillInfo.agents.map(agent => (
                <AgentInfo 
                  key={agent.id}
                  id={agent.id}
                  name={agent.name}
                  sentiment={agent.sentiment}
                  queues={agent.queues}
                  status={agent.status as "ONCALL" | "AVAILABLE" | "DISCONNECTED" | null}
                  topPriorityAlert={agent.topPriorityAlert}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Skill
