import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TitleCase, noUndersocore } from '../../Utils/utils';
import { AgentInfo, AlertExpansionPanel, ErrorCard, InfoLoader, InformationBar, ProgressCard } from '../../components';
import { IAlertCard } from '../../components/AlertCard/types';
import { getQueueInfo } from '../../services';
import { IQueueInformation } from '../../services/queue/types';
import './Queue.css';

const Queue: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [queueInfo, setQueueInfo] = useState<IQueueInformation | null > (null);
  const [errorQueueInfo, setErrorQueueInfo] = useState<boolean>(false);


  const getQueueInformation = async (id: string | undefined) => {
    await getQueueInfo(id)
    .then((res) => {
      if (res !== null) setQueueInfo(res);
    })
    .catch((err) => {
      console.error(err);
      setErrorQueueInfo(true);
    });
    setLoading(false);
  };

  useEffect(() => {
    getQueueInformation(id);
  }, [id]);
  
  return (
    <div className='px-2 mb-3'>
      <span data-testid="queue-title" className='queue__sections-text'>
        Queue: {loading ? 
        (<div/>) :
        (<span data-testid="queue-title-id" className=' text-aci-orange'>{queueInfo?.information.sections && (queueInfo.information.sections[0].sectionValue ?? '')}</span>)
        }
      </span>
      {loading ?
        (<InfoLoader testId='infoloader'/>) :
        (
          !loading && queueInfo && !errorQueueInfo ? (
            <div data-testid="queue-information-metrics-section">
              <InformationBar
                title={queueInfo.information.sectionTitle}
                elements={queueInfo.information.sections?.map(section => ({
                  title: section.sectionTitle,
                  content: section.sectionValue,
                  color: section.color as "black" | "red" | "green" | "yellow" | "gray"
                })) || []}
              />
              {queueInfo && queueInfo?.metrics.sections !== null && queueInfo?.metrics.sections.length !== 0 &&
                <InformationBar 
                  title={queueInfo.metrics.sectionTitle}
                  elements={queueInfo.metrics.sections?.map(section => ({
                    title: TitleCase(noUndersocore(section.sectionTitle)),
                    content: section.sectionValue,
                    color: section.color as "black" | "red" | "green" | "yellow" | "gray"
                  })) || []}
                />
              }
            </div>
          ) : 
          (
            <ErrorCard title='Error fetching queue'></ErrorCard>
          )
        )
      }

      <span data-testid="alert-section" className='queue__sections-text'>
        Alerts
      </span>
      {loading ? 
        (<InfoLoader/>) :
        (
          !loading && queueInfo && !errorQueueInfo ? (
            <div className="flex flex-col space-y-4 p-1" data-testid="alerts-section">
              {queueInfo && queueInfo?.alerts.high.length !== 0 &&
                <AlertExpansionPanel
                  alerts={queueInfo?.alerts.high.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category?.denomination,
                    alertOwner: alert.resource,
                    alertPriority: 'CRITIC',
                    individualAlertLink: `${alert.id}`
                  })) as IAlertCard[]}
                />
              }
              {queueInfo && queueInfo?.alerts.medium.length !== 0 &&
                <AlertExpansionPanel
                  alerts={queueInfo?.alerts.medium.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category?.denomination,
                    alertOwner: alert.resource,
                    alertPriority: 'MEDIUM',
                    individualAlertLink: `${alert.id}`
                  })) as IAlertCard[]}
                />
              }
              {queueInfo && queueInfo?.alerts.low.length !== 0 &&
                <AlertExpansionPanel
                  alerts={queueInfo?.alerts.low.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category?.denomination ?? 'Unknown Category',
                    alertOwner: alert.resource,
                    alertPriority: 'LOW',
                    individualAlertLink: `${alert.id}`
                  })) as IAlertCard[]}
                />
              }
              {queueInfo && queueInfo?.alerts.high.length === 0 && queueInfo?.alerts.medium.length === 0 && queueInfo?.alerts.low.length === 0 &&
                <ErrorCard title='No alerts found'></ErrorCard>
              }
            </div>
          ) : (
            <ErrorCard title='Error fetching alerts'></ErrorCard>
          )
        )
      }
      <span className='queue__sections-text'>
        Trainings
      </span>
      {loading ? 
        (<InfoLoader/>) :
        (
          !loading && queueInfo && !errorQueueInfo ? (
            <div data-testid="trainings-section">
              {queueInfo && queueInfo.trainings && queueInfo.trainings.map(training => (
                <ProgressCard
                  key={training.resourceName}
                  label={training.resourceName}
                  trainings={[
                    {
                      progress: training.resourceTrainingProgress,
                      label: training.resourceName
                    }
                  ]}
                />
              ))}
              {
                queueInfo.trainings.length === 0 && (
                  <ErrorCard title='No trainings found.'></ErrorCard>
                )
              }
            </div>
          ) : (
            <ErrorCard title='Error fetching trainings'></ErrorCard>
          )
        )
      }
      <span className='queue__sections-text'>
        Agents
      </span>
      {loading ? 
        (<InfoLoader/>) : 
        (
          !loading && queueInfo && !errorQueueInfo ? (
            <div className='queue__cards-container' data-testid="agents-section">
              {queueInfo && queueInfo.agents.map(agent => (
                <AgentInfo
                  key={agent.id}
                  id={agent.id}
                  name={agent.name}
                  sentiment={agent.sentiment}
                  queues={agent.queues}
                  status={agent.status as "ONCALL" | "Available" | "DISCONNECTED" | null}
                  topPriorityAlert={agent.topPriorityAlert}
                />
              ))
              }
            </div>
          ) : (
            <ErrorCard title='Error fetching agents'></ErrorCard>
          )
        )
      }
    </div>
  );
};

export default Queue;
