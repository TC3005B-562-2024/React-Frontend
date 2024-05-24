import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { InformationBar, ProgressCard, ErrorCard, AlertExpansionPanel, AgentInfo } from '../../components';
import { getAllAlerts } from '../../services';
import { IAlertResponse } from '../../services/alerts/types';
import { IAlertCard } from '../../components/AlertCard/types';
import './Queue.css';



const Queue: React.FC = () => {
  const { id } = useParams();
  const [alertsReceived, setAlertsReceived] = useState<IAlertResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorAlerts, setErrorAlerts] = useState<boolean>(false);

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

  useEffect(() => {
    setLoading(true);
    getAlerts();
  }, []);

  return (
    <>
    <div>
      <div>
        <span className='sections-text'>
          Queue: <span className=' text-aci-orange'>{id}</span>
        </span>
        <InformationBar
          title='Information'
          elements={[
            {
              title: 'Name',
              content: 'Element',
              color: 'black'
            },
            {
              title: 'Status',
              content: 'Element',
              color: 'red'
            },
            {
              title: 'Type',
              content: 'Element',
              color: 'black'
            }
          ]}
          />
        <InformationBar
          title='Metrics'
          elements={[
            {
              title: 'Service Level',
              content: 'Element',
              color: 'yellow'
            },
            {
              title: 'ACR',
              content: 'Element',
              color: 'red'
            },
            {
              title: 'ASA',
              content: 'Element',
              color: 'green'
            },
            {
              title: 'FCR',
              content: 'Element',
              color: 'yellow'
            },
            {
              title: 'Adherence',
              content: 'Element',
              color: 'red'
            }
          ]}
          />
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
          <div>
            <span className='sections-text'>
              Trainings
            </span>
            <div className=' space-y-4 p-1'>
              <ProgressCard
                label='Training 1'
                trainings={[
                  {
                    progress: 50,
                    label: 'Training 1',
                  },
                  {
                    progress: 70,
                    label: 'Training 2',
                  },
                  {
                    progress: 90,
                    label: 'Training 3',
                  }
                ]}
                />

            </div>
           </div>
          <div>
            <span className='sections-text'>
              Agents
            </span>
            <div className='cards-container'>
              <AgentInfo
                id='1'
                name='Agent Name'
                sentiment="NEGATIVE"
                queues={[
                  "Support", "Complaints", "Shoppings", "Thefts"
                ]}
                status='ONCALL'
                topPriorityAlert="LOW"
                />
              <AgentInfo
                id='2'
                name='Agent Name'
                sentiment="POSITIVE"
                queues={[
                  "Support", "Complaints", "Shoppings"
                ]}
                status='AVAILABLE'
                topPriorityAlert="MEDIUM"
                />
              <AgentInfo
                id='3'
                name='Agent Name'
                sentiment="NEGATIVE"
                queues={[
                  "Support", "Complaints", "Shoppings",
                ]}
                status='ONCALL'
                topPriorityAlert="CRITICAL"
                />
              <AgentInfo
                id='4'
                name='Agent Name'
                sentiment="POSITIVE"
                queues={[
                  "Support", "Complaints", "Shoppings", "Thefts"
                ]}
                status='DISCONNECTED'
                topPriorityAlert="MEDIUM"
                />
              <AgentInfo
                id='5'
                name='Agent Name'
                sentiment="POSITIVE"
                queues={[
                  "Support", "Complaints", "Shoppings", "Thefts"
                ]}
                status='AVAILABLE'
                topPriorityAlert="MEDIUM"
                />
              <AgentInfo
                id='6'
                name='Agent Name'
                sentiment="POSITIVE"
                queues={[
                  "Support", "Complaints", "Shoppings", "Thefts"
                ]}
                status='AVAILABLE'
                topPriorityAlert="MEDIUM"
                />
              <AgentInfo
                id='7'
                name='Agent Name'
                sentiment="POSITIVE"
                queues={[
                  "Support", "Complaints", "Shoppings", "Thefts"
                ]}
                status='DISCONNECTED'
                topPriorityAlert="MEDIUM"
                />
            </div>
          </div>
        </div>
    </div>
    </>
  );
};



export default Queue;
