import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InformationBar, ProgressCard, ErrorCard, AlertExpansionPanel, AgentInfo, InfoLoader } from '../../components';
import { IAlertCard } from '../../components/AlertCard/types';
import './Skill.css';
import { ISection, ISkillById } from '../../services/skills/types';
import { getSkillById } from '../../services/skills/getSkillById';
import { noUndersocore } from '../../Utils/utils';

const Skill: React.FC = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState<ISkillById>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorSkill, setErrorSkill] = useState<boolean>(false);

  const getSkill = async (id: string | undefined) => {
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
    getSkill(id);
  }, [id]);

  return (
    <>
      <div>
        <div>
          <span data-testid="skill-title" className='sections-text'>
            Skill: 
            {loading ? 
              (<InfoLoader testId='infoloader'/>) : 
              (<span className=' text-aci-orange'>{` ${skill?.alias}`}</span>)
            }
          </span>
          {errorSkill &&
            <ErrorCard title='Error fetching Skill'></ErrorCard>
          }
          {!loading && skill?.skillsInformationDTO && skill.skillsInformationDTO.sections.length === 0 ? (
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

          {!loading && skill?.metrics?.sections && skill.metrics.sections.length > 0 ? (
            <InformationBar
              title='Metrics'
              elements={skill.metrics.sections.map((section: ISection) => ({
                title: noUndersocore(section.sectionTitle),
                content: section.sectionValue,
                color: section.color || 'black'
              }))}
            />
          ) : (
            <div></div>
          )}
          {!loading && skill?.alerts &&
            <div>
              <span data-testid="alert-section" className='sections-text'>
                Alerts
              </span>
              {loading &&
                <ErrorCard title='Loading...'></ErrorCard>
              }
              <div className="flex flex-col space-y-4 p-1">
                {skill?.alerts?.high.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={skill?.alerts?.high.map(alert => ({
                      alertId: alert.id,
                      alertName: alert.insight.category.denomination,
                      alertOwner: alert.resource,
                      alertPriority: 'CRITIC',
                      individualAlertLink: `${alert.id}`
                    })) as IAlertCard[]}
                  />
                }
                {skill?.alerts?.medium.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={skill?.alerts?.medium.map(alert => ({
                      alertId: alert.id,
                      alertName: alert.insight.category.denomination,
                      alertOwner: alert.resource,
                      alertPriority: 'MEDIUM',
                      individualAlertLink: `${alert.id}`
                    })) as IAlertCard[]}
                  />
                }
                {skill?.alerts?.low.length !== 0 &&
                  <AlertExpansionPanel
                    alerts={skill?.alerts?.low.map(alert => ({
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
          }
          <span className='sections-text'>
            Trainings
          </span>
          {loading && <InfoLoader />}
          {!loading && skill?.trainings && skill.trainings.length > 0 ? (
            <div>
              <div className='space-y-4 p-1'>
                <ProgressCard
                  label={`Trainings of ${skill.alias}`}
                  trainings={skill.trainings.map(training => ({
                    label: training.resourceName,
                    progress: training.resourceTrainingProgress * 100
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
            <div className='cards-container mb-2'>
              {loading ? 
                (<InfoLoader />) : 
                (
                  skill?.agents.map((agent) => (
                    <AgentInfo
                      id={agent.id}
                      name={agent.name}
                      sentiment={agent.sentiment}
                      queues={agent.queues}
                      status={agent.status}
                      topPriorityAlert={agent.topPriorityAlert}
                    />
                  ))
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill
