import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertExpansionPanel, ErrorCard, IndividualTrainingExpansionPanel, InfoLoader, InformationBar } from "../../components";
import { IAgentInformation } from "../../services/agents/types";
import { getAgentById } from "../../services";
import './Agent.css';
import { IAlertCard } from "../../components/AlertCard/types";

const Agent: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [agentInfo, setAgentInfo] = useState<IAgentInformation | null> (null);
  const [errorAgentInfo, setErrorAgentInfo] = useState<boolean>(false);

  const shortId = (id: string) => {
    return `${id.substring(0, 3)}...${id.slice(-3)}`;
  }

  const getAgentInformation = useCallback(async () => {
    await getAgentById(id)
    .then((res) => {
      if (res !== null) setAgentInfo(res);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setErrorAgentInfo(true);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    getAgentInformation();
  }, [getAgentInformation]);

  return (
    <div className="h-lvh">
      <div className="top-container">
        <h1 className="section-title">Agent: </h1>
        {agentInfo &&
          <>
          <h1 className="agent-id">{shortId(id ?? '')}</h1></>
        }
    </div>
    {loading &&
      <div><InfoLoader></InfoLoader></div>
    }
    {errorAgentInfo &&
      <ErrorCard title='Error fetching agent data'></ErrorCard>
    }
    <div className="item">
      {agentInfo &&
        <InformationBar title={agentInfo?.information.sectionTitle} 
          elements={agentInfo?.information.sections?.map(section => ({
            title: section.sectionTitle,
            content: section.sectionValue,
            color: section.color as "black" | "red" | "green" | "yellow" | "gray"
          })) || []}
        />
      }
      {agentInfo?.contactInformationDTO.map(element => ({
        title: element.title,
        elements: element.sections?.map((section: { sectionTitle: any; sectionValue: any; color: string; }) => ({
          title: section.sectionTitle,
          content: section.sectionValue,
          color: section.color as "black" | "red" | "green" | "yellow" | "gray"
        })) || []
      })).map(info => (
        <InformationBar title={info.title} elements={info.elements} />
      ))}
      {agentInfo?.metrics && 
        <InformationBar
          title="Metrics"
          elements={agentInfo.metrics.sections?.map(section => ({
            title: section.sectionTitle,
            content: section.sectionValue,
            color: section.color as "black" | "red" | "green" | "yellow" | "gray"
          })) || []}
        />
      }
    </div>
    <div className="section-title">Alerts</div>
      {loading &&
        <div><InfoLoader></InfoLoader></div>
      }
      {errorAgentInfo &&
        <ErrorCard title='Error fetching alerts'></ErrorCard>
      }
      {!loading && !errorAgentInfo && agentInfo !== undefined && agentInfo?.alerts.high.length === 0 && agentInfo?.alerts.medium.length === 0 && agentInfo?.alerts.low.length === 0 &&
        <ErrorCard title='No alerts found'></ErrorCard>
      }
    <div className="item">
      {agentInfo && agentInfo?.alerts.high.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alerts.high.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination,
            alertOwner: alert.resource,
            alertPriority: 'CRITIC',
            individualAlertLink: `${alert.id}`
          })) as IAlertCard[]}
        />
      }
      {agentInfo && agentInfo?.alerts.medium.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alerts.medium.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination,
            alertOwner: alert.resource,
            alertPriority: 'MEDIUM',
            individualAlertLink: `${alert.id}`
          })) as IAlertCard[]}
        />
      }
      {agentInfo && agentInfo?.alerts.low.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alerts.low.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination,
            alertOwner: alert.resource,
            alertPriority: 'LOW',
            individualAlertLink: `${alert.id}`
          })) as IAlertCard[]}
        />
      }
    </div>
    <div className="section-title">Trainings</div>
      {loading &&
        <div><InfoLoader></InfoLoader></div>
      }
      {errorAgentInfo &&
        <ErrorCard title='Error fetching trainings'></ErrorCard>
      }
      {!loading && !errorAgentInfo && agentInfo !== undefined && agentInfo?.trainings.length === 0 &&
        <ErrorCard title='No trainings found'></ErrorCard>
      }
    <div className="page-last-item">
      {agentInfo&& agentInfo?.trainings.length !== 0 &&
        <IndividualTrainingExpansionPanel title={`Trainings of Agent ${shortId(id ?? '')}`} 
          trainings={agentInfo.trainings.map(training => ({
            label: training.training.description,
            isComplete: training.trainingCompleted
            })) || []
          }
        />
      }
    </div>
  </div>
  );
};
  
  export default Agent;
  
