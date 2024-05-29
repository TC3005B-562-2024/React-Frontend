import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertExpansionPanel, ErrorCard, IndividualTrainingExpansionPanel, InformationBar } from "../../components";
import { IAgentInformation } from "../../services/agents/types";
import { getAgentById } from "../../services";
import './Agent.css';
import { IAlertCard } from "../../components/AlertCard/types";

const Agent: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [agentInfo, setAgentInfo] = useState<IAgentInformation | null> (null);
  const [errorAgentInfo, setErrorAgentInfo] = useState<boolean>(false);

  const shortId = (id: string) => {
    return `${id.substring(0, 3)}...${id.slice(-3)}`;
  }

  const getAgentInformation = useCallback(async () => {
    await getAgentById(id)
    .then((res) => {
      if (res !== null) setAgentInfo(res);
    })
    .catch((err) => {
      console.error(err);
      setErrorAgentInfo(true);
    });
    setLoading(false);
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
      <ErrorCard title='Loading...'></ErrorCard>
      }
      {errorAgentInfo &&
        <ErrorCard title='Error fetching agent data'></ErrorCard>
      }
    <div className="item">
      {agentInfo &&
        <InformationBar title={agentInfo.agentInformationDTO.title} 
          elements={agentInfo.agentInformationDTO.sections?.map(section => ({
            title: section.sectionTitle,
            content: section.sectionValue,
            color: section.color as "black" | "red" | "green" | "yellow" | "gray"
          })) || []}
        />
      }
      {agentInfo?.contactInformationDTO.map(element => ({
        title: element.title,
        elements: element.sections?.map(section => ({
          title: section.sectionTitle,
          content: section.sectionValue,
          color: section.color as "black" | "red" | "green" | "yellow" | "gray"
        })) || []
      })).map(info => (
        <InformationBar title={info.title} elements={info.elements} />
      ))}
      {agentInfo && 
        <InformationBar
          title={agentInfo.metrics.sectionTitle}
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
        <ErrorCard title='Loading...'></ErrorCard>
      }
      {errorAgentInfo &&
        <ErrorCard title='Error fetching alerts'></ErrorCard>
      }
      {!loading && !errorAgentInfo && agentInfo !== undefined && agentInfo?.alertPriorityDTO.high.length === 0 && agentInfo?.alertPriorityDTO.medium.length === 0 && agentInfo?.alertPriorityDTO.low.length === 0 &&
        <ErrorCard title='No alerts found'></ErrorCard>
      }
    <div className="item">
      {agentInfo && agentInfo?.alertPriorityDTO.high.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alertPriorityDTO.high.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination,
            alertOwner: alert.resource,
            alertPriority: 'CRITIC',
            individualAlertLink: `${alert.id}`
          })) as IAlertCard[]}
        />
      }
      {agentInfo && agentInfo?.alertPriorityDTO.medium.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alertPriorityDTO.medium.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination,
            alertOwner: alert.resource,
            alertPriority: 'MEDIUM',
            individualAlertLink: `${alert.id}`
          })) as IAlertCard[]}
        />
      }
      {agentInfo && agentInfo?.alertPriorityDTO.low.length !== 0 &&
        <AlertExpansionPanel
          alerts={agentInfo?.alertPriorityDTO.low.map(alert => ({
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
        <ErrorCard title='Loading...'></ErrorCard>
      }
      {errorAgentInfo &&
        <ErrorCard title='Error fetching trainings'></ErrorCard>
      }
      {!loading && !errorAgentInfo && agentInfo !== undefined && agentInfo?.trainings.length === 0 &&
        <ErrorCard title='No trainings found'></ErrorCard>
      }
    <div className="page-item">
      {agentInfo&& agentInfo?.trainings.length !== 0 &&
        <IndividualTrainingExpansionPanel
          title={`Trainings of Agent ${shortId(id ?? '')}`}
          trainings={agentInfo.trainings.map(training => ({
            label: training.label,
            isComplete: training.isComplete
          }))} 
        />
      }
    </div>
  </div>
  );
};
  
  export default Agent;
  
