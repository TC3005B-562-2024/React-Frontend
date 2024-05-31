import React, { useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { InformationBar, ProgressCard, ErrorCard, AlertExpansionPanel, AgentInfo, InfoLoader } from '../../components';
import { getQueueInfo } from '../../services';
import { IQueueInformation } from '../../services/queue/types';
import { IAlertCard } from '../../components/AlertCard/types';
import { shortId, noUndersocore, TitleCase } from '../../Utils/utils';
import './Queue.css';

const Queue: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [queueInfo, setQueueInfo] = useState<IQueueInformation | null > (null);
  const [errorQueueInfo, setErrorQueueInfo] = useState<boolean>(false);


  const getQueueInformation = useCallback(async () => {
    await getQueueInfo(id)
    .then((res) => {
      if (res !== null) setQueueInfo(res);
    })
    .catch((err) => {
      console.error(err);
      setErrorQueueInfo(true);
    });
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    getQueueInformation();
  }, [getQueueInformation]);
  
  return (
    <div>
      <div>
        <span data-testid="queue-title" className='sections-text'>
          Queue: <span className=' text-aci-orange'>{shortId(id ?? '')}</span>
        </span>
        {loading &&
          <InfoLoader></InfoLoader>
        }
        {errorQueueInfo &&
        <ErrorCard title='Error fetching queue'></ErrorCard>
        }
        <div>
          {queueInfo &&
            <InformationBar
              title={queueInfo.information.sectionTitle}
              elements={queueInfo.information.sections?.map(section => ({
                title: section.sectionTitle,
                content: section.sectionValue,
                color: section.color as "black" | "red" | "green" | "yellow" | "gray"
              })) || []}
            />
            }
          {queueInfo && queueInfo?.metrics.sections !== null &&
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
        <div>
            <span data-testid="alert-section" className='sections-text'>
              Alerts
            </span>
            {loading &&
              <InfoLoader></InfoLoader>
            }
            {errorQueueInfo &&
              <ErrorCard title='Error fetching alerts'></ErrorCard>
            }
            {!loading && !errorQueueInfo && queueInfo !== undefined && queueInfo?.alerts.high.length === 0 && queueInfo?.alerts.medium.length === 0 && queueInfo?.alerts.low.length === 0 &&
              <ErrorCard title='No alerts found'></ErrorCard>
            }
            <div className="flex flex-col space-y-4 p-1">
              {queueInfo && queueInfo?.alerts.high.length !== 0 &&
                <AlertExpansionPanel
                  alerts={queueInfo?.alerts.high.map(alert => ({
                    alertId: alert.id,
                    alertName: alert.insight.category.denomination,
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
                    alertName: alert.insight.category.denomination,
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
            </div>
          </div>
          <div>
            <span data-testid="trainings-section" className='sections-text'>
              Trainings
            </span>
            <div className=' space-y-4 p-1'>
            {loading &&
              <InfoLoader></InfoLoader>
            }
            {queueInfo &&
              <ProgressCard
                label='Trainings of Call'
                trainings={queueInfo.trainings.map(training => ({
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
            {errorQueueInfo && 
              <ErrorCard title='Error fetching agents'></ErrorCard>
            }
            <div className='cards-container'>
              {queueInfo && queueInfo.agents.map(agent => (
                <AgentInfo
                  key={agent.id}
                  id={agent.id}
                  name={agent.name}
                  sentiment={agent.sentiment}
                  queues={agent.queues}
                  status={agent.status as "ONCALL" | "AVAILABLE" | "DISCONNECTED" | null}
                  topPriorityAlert={agent.topPriorityAlert}
                />
              ))
              }
            </div>
          </div>
        </div>
    </div>
  );
};

export default Queue;
