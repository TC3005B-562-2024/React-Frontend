import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InformationBar, ProgressCard, ErrorCard, AlertExpansionPanel, AgentInfo } from '../../components';
import { getAllAlerts } from '../../services';
import { IAlertResponse } from '../../services/alerts/types';
import { IAlertCard } from '../../components/AlertCard/types';
import './Skill.css';
import { ISection, ISkillById } from '../../services/skills/types';
import { getSkillById } from '../../services/skills/getSkillById';
import { noUndersocore } from '../../Utils/utils';

const Skill: React.FC = () => {
  const { id } = useParams();
  const [alertsReceived, setAlertsReceived] = useState<IAlertResponse>();
  const [skill, setSkill] = useState<ISkillById>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorAlerts, setErrorAlerts] = useState<boolean>(false);
  const [errorSkill, setErrorSkill] = useState<boolean>(false);

  const getAlerts = async () => {
    await getAllAlerts()
      .then((res) => {
        if (res !== null) setAlertsReceived(res);
        if (res === undefined) {
          setErrorAlerts(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorAlerts(true);
      });
    setLoading(false);
  };

  const getSkill = async () => {
    const safeId = id || '';
    await getSkillById(safeId)
      .then((res) => {
        if (res !== null) setSkill(res);
        if (res === undefined) {
          setErrorSkill(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorSkill(true);
      });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getSkill();
    getAlerts();
  }, [id]);

  return (
    <>
      <div>
        <div>
          <span className='sections-text'>
            Skill: <span className=' text-aci-orange'>{id}</span>
          </span>
          {errorSkill &&
            <ErrorCard title='Error fetching Skill'></ErrorCard>
          }
          {!loading && !errorSkill && alertsReceived !== undefined && alertsReceived.high.length === 0 && alertsReceived.medium.length === 0 && alertsReceived.low.length === 0 &&
            <ErrorCard title='No skills found'></ErrorCard>
          }
          {skill?.skillsInformationDTO && skill.skillsInformationDTO.sections.length === 0 ? (
            <InformationBar
              title='Information'
              elements={skill?.skillsInformationDTO.sections.map((section) => ({
                title: section.sectionTitle || '',
                content: section.sectionValue || '',
                color: section.color || 'black'
              })) || []}
            />
          ) : (
            <div></div>
          )}

          {skill?.metrics?.sections && skill.metrics.sections.length > 0 ? (
            <InformationBar
              title='Metrics'
              elements={skill.metrics.sections.map((section: ISection) => ({
                title: noUndersocore(section.sectionTitle),
                content: section.sectionValue || '',
                color: section.color || 'black'
              }))}
            />
          ) : (
            <div></div>
          )}
          {alertsReceived !== undefined && alertsReceived.high.length !== 0 && alertsReceived.medium.length !== 0 && alertsReceived.low.length !== 0 ? (
            <div>
              <span className='sections-text'>
                Alerts
              </span>
              {loading &&
                <ErrorCard title='Loading...'></ErrorCard>
              }
              {errorAlerts &&
                <ErrorCard title='Error fetching alerts'></ErrorCard>
              }
              {!loading && !errorAlerts && alertsReceived !== undefined && alertsReceived.high.length === 0 && alertsReceived.medium.length === 0 && alertsReceived.low.length === 0 &&
                <ErrorCard title='No alerts found'></ErrorCard>
              }

              <div className="flex flex-col space-y-4 p-1">
                {alertsReceived !== undefined && alertsReceived.high.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={alertsReceived.high.map(alert => ({
                      alertId: alert.id,
                      alertName: alert.insight.category.denomination,
                      alertOwner: alert.resource,
                      alertPriority: 'CRITIC',
                      individualAlertLink: `${alert.id}`
                    })) as IAlertCard[]}
                  />
                }
                {alertsReceived !== undefined && alertsReceived?.medium.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={alertsReceived.medium.map(alert => ({
                      alertId: alert.id,
                      alertName: alert.insight.category.denomination,
                      alertOwner: alert.resource,
                      alertPriority: 'MEDIUM',
                      individualAlertLink: `${alert.id}`
                    })) as IAlertCard[]}
                  />
                }
                {alertsReceived !== undefined && alertsReceived.low.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={alertsReceived.low.map(alert => ({
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
          ) : (
            <div></div>
          )}

          {skill?.trainings && skill.trainings.length > 0 ? (
            <div>
              <span className='sections-text'>
                Trainings
              </span>
              <div className=' space-y-4 p-1'>

                <ProgressCard
                  label=''
                  trainings={skill.trainings.map(training => ({
                    label: training.label,
                    progress: training.progress
                  }))}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <span className='sections-text'>
              Agents
            </span>
            <div className='cards-container'>
              {skill?.agents.map((agent) => (
                <AgentInfo
                  id={agent.id}
                  name={agent.name}
                  sentiment={agent.sentiment}
                  queues={agent.queues}
                  status={agent.status}
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
