import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertCard, ErrorCard, IndividualTrainingExpansionPanel, InformationBar } from "../../components";
import classNames from 'classnames';
import './Agent.css';
import { IAlertResponse } from "../../services/alerts/types";
import { getAllAlerts } from "../../services";
import Config from "../../config";

const Agent: React.FC = () => {
  const { id } = useParams();
  const [alertsReceived, setAlertsReceived] = useState<IAlertResponse>();
  const [loadingAlerts, setLoading] = useState<boolean>(false);
  const [errorAlerts, setErrorAlerts] = useState<boolean>(false);

  const statusColor = 'red';
  const durationColor = 'green';
  const emotionColor = 'yellow';
  const serviceLevelColor = 'yellow';
  const acrColor = 'green';
  const asaColor = 'yellow';
  const fcrColor = 'red';
  const adherenceColor = 'red';

  const topContainer = classNames(
    'top-container',
  );
  const sectionTitle = classNames(
    'section-title',
  );
  const agentId = classNames(
    'agent-id',
  );
  const item = classNames(
    'item',
  );
  const pageLastItem = classNames(
    'page-last-item',
  );

  const getAlerts = async () => {
    await getAllAlerts()
    .then((res) => {
      if (res !== null) setAlertsReceived(res);
    }) 
    .catch(() => {
      setErrorAlerts(true);
    });
    setLoading(false);
  };
    
  useEffect(() => {
    setLoading(true);
    getAlerts();
  }, []);

  return (
    <div className="h-lvh">
      <div className={topContainer}>
        <h1 className={sectionTitle}>Agent: </h1>
        <h1 className={agentId}>{id}</h1>
    </div>
    <div className={item}><InformationBar title="Information" elements={[
      {
        title: 'Name',
        content: 'Element',
        color: 'black'
      },
      {
        title:'Skill',
        content: 'Element',
        color: 'black'
      },
      {
        title: 'Status',
        content: 'Element',
        color: statusColor
      }]}/>
    </div>

    <div className={item}><InformationBar title="Contact Information" elements={[
          {
          title: 'ID',
          content: 'Element',
          color: 'black'
        },
        {
          title: 'Duration',
          content: 'Element',
          color: durationColor
        },
        {
          title: 'Emotion',
          content: 'Element',
          color: emotionColor
        }]}/></div>

        <div className={item}><InformationBar title="Metrics" elements={[{
          title: 'Service Level',
          content: 'Element',
          color: serviceLevelColor
        },
        {
          title: 'ACR',
          content: 'Element',
          color: acrColor
        },
        {
          title: 'ASA',
          content: 'Element',
          color: asaColor
        },
        {
          title: 'FCR',
          content: 'Element',
          color: fcrColor
        },
        {
          title: 'Adherence',
          content: 'Element',
          color: adherenceColor
        }]} /></div>

        <div className={sectionTitle}>Alerts</div>

        {loadingAlerts && 
          <div className="text-text">
            <ErrorCard title={"Loading..."}></ErrorCard>
          </div>
        }
        {errorAlerts && 
          <div className="text-text">
            <ErrorCard title={"Error fetching alerts"}></ErrorCard>
          </div>
        }
        {!loadingAlerts && !errorAlerts && 
          <div className="text-text">
            <ErrorCard title={"No alerts found"}></ErrorCard>
          </div>
        }
        {alertsReceived !== undefined && alertsReceived.high.length !== 0 && alertsReceived.high.map(alert =>
          <AlertCard alertName={alert.insight.category.denomination} alertOwner={alert.resource} alertPriority={"CRITIC"} individualAlertLink={`${Config.FRONT_URL}alerts/${alert.id}`} alertId={alert.id}/>
        )}
        {alertsReceived !== undefined && alertsReceived.high.length !== 0 && alertsReceived.medium.map(alert =>
          <AlertCard alertName={alert.insight.category.denomination} alertOwner={alert.resource} alertPriority={"MEDIUM"} individualAlertLink={`${Config.FRONT_URL}alerts/${alert.id}`} alertId={alert.id}/>
        )}
        {alertsReceived !== undefined && alertsReceived.high.length !== 0 && alertsReceived.low.map(alert =>
          <AlertCard alertName={alert.insight.category.denomination} alertOwner={alert.resource} alertPriority={"LOW"} individualAlertLink={`${Config.FRONT_URL}alerts/${alert.id}`} alertId={alert.id}/>
        )}
        <div className={sectionTitle}>Trainings</div>
        <div className={pageLastItem}><IndividualTrainingExpansionPanel title={"Trainings of Agent..."} trainings={[
          {label: 'Training Description',
          isComplete: true},
          {
          label: 'Training Description',
          isComplete: false}
          ]} /></div>

    </div>
  );
};
  
  export default Agent;
  
