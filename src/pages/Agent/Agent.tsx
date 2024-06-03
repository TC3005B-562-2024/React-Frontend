import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertExpansionPanel, ErrorCard, Icon, InfoLoader, InformationBar } from "../../components";
import { IAgentInformation } from "../../services/agents/types";
import { getAgentById } from "../../services";
import './Agent.css';
import { IAlertCard } from "../../components/AlertCard/types";
import { shortId, noUndersocore } from "../../Utils/utils";
import { IconNames } from "../../components/Icon/types";

const Agent: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [agentInfo, setAgentInfo] = useState<IAgentInformation | null>(null);
  const [errorAgentInfo, setErrorAgentInfo] = useState<boolean>(false);
  const [trainingValues, setTrainingValues] = useState<any[]>([]);
  const [completedTrainings, setCompletedTrainings] = useState<number>(0);


  const getAgentInformation = useCallback(async () => {
    try {
      const res = await getAgentById(id);
      if (res !== null) {
        setAgentInfo(res);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setErrorAgentInfo(true);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    setLoading(true);
    getAgentInformation();
  }, [getAgentInformation]);

  useEffect(() => {
    const storedTrainingValues = JSON.parse(localStorage.getItem(`trainingValues-${id}`) || '[]');
    if (storedTrainingValues.length > 0) {
      setTrainingValues(storedTrainingValues);
    } else if (agentInfo) {
      const newTrainingValues = agentInfo.trainings?.map(training => ({
        label: training.training.description,
        isComplete: training.trainingCompleted
      })) || [];
      setTrainingValues(newTrainingValues);
    }
  }, [agentInfo, id]);

  useEffect(() => {
    if (trainingValues.length > 0) {
      localStorage.setItem(`trainingValues-${id}`, JSON.stringify(trainingValues));
      const totalTrainings = trainingValues.length;
      const completed = trainingValues.filter(training => training.isComplete).length;
      const percentage = totalTrainings > 0 ? (completed / totalTrainings) * 100 : 0;
      setCompletedTrainings(percentage);
    }
  }, [trainingValues, id]);

  useEffect(() => {
    return () => {
      localStorage.removeItem(`trainingValues-${id}`);
    };
  }, [id]);

  const handleOnClick = (index: number) => {
    const updatedTrainingValues = trainingValues.map((training, i) => 
      i === index ? { ...training, isComplete: !training.isComplete } : training
    );
    setTrainingValues(updatedTrainingValues);
  };

  return (
    <div className="h-lvh">
      <div className="top-container">
        <h1 className="section-title">Agent: </h1>
        {agentInfo &&
          <>
            <h1 className="agent-id">{shortId(id ?? '')}</h1>
          </>
        }
      </div>
      {loading && <div><InfoLoader /></div>}
      {errorAgentInfo && <ErrorCard title='Error fetching agent data' />}
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
              title: noUndersocore(section.sectionTitle),
              content: section.sectionValue,
              color: section.color as "black" | "red" | "green" | "yellow" | "gray"
            })) || []}
          />
        }
      </div>
      <div className="section-title">Alerts</div>
      {loading && <div><InfoLoader /></div>}
      {errorAgentInfo && <ErrorCard title='Error fetching alerts' />}
      {!loading && !errorAgentInfo && agentInfo !== undefined && agentInfo?.alerts.high.length === 0 && agentInfo?.alerts.medium.length === 0 && agentInfo?.alerts.low.length === 0 &&
        <ErrorCard title='No alerts found' />
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
      {loading && <div><InfoLoader /></div>}
      {errorAgentInfo && <ErrorCard title='Error fetching trainings' />}
      {agentInfo && trainingValues.length === 0 &&  <div className="page-last-item"><ErrorCard title='No trainings found' /></div>}
      {trainingValues.length > 0 && 
      <div className="page-last-item">
      <div className='flex border-solid rounded-md border-2 border-gray-100'>
        <div className='flex-1 mx-4 my-4'>
          <span className="flex-1 grow font-bold">Trainings of agent {shortId(id ?? '')}: </span>
        </div>
        <div className='flex items-center my-4 mr-4'>
          <span className="text-aci-green font-semibold mx-2 mr-2 my-2">{completedTrainings}% </span>
        </div>
      </div>
      {trainingValues.map((training, index) => (
        <div key={index} className='bg-white box-content rounded-md shadow-md'>
          <div className='flex'>
            <div className='flex-1 mx-4 my-4'>
              {training.label}
            </div>
            <div className='flex items-center my-4 mr-4'>
              <button className='h-5 w-5' onClick={() => handleOnClick(index)}>
                <Icon iconName={training.isComplete ? IconNames.CheckCircleFill : IconNames.RadioButtonUnchecked} color='green' />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>  
      }
    </div>
  );
};

export default Agent;
