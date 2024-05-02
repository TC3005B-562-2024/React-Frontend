import { useParams } from "react-router-dom";
import { AlertCard, IndividualTrainingExpansionPanel, InformationBar } from "../../components";
import './AgentPage.css';

const Agent = () => {
  const { id } = useParams();
  const statusColor = 'red';
  const durationColor = 'green';
  const emotionColor = 'yellow';
  const serviceLevelColor = 'yellow';
  const acrColor = 'green';
  const asaColor = 'yellow';
  const fcrColor = 'red';
  const adherenceColor = 'red';
  
  return (
    <div className="agent-page__container">
      <div className="agent-page__container__header">
        <h1 className="agent-page__container__header__text">Agent: </h1>
        <h1 className="agent-page__container__header__text--orange">{id}</h1>
      </div>
      <div className="agent-page__container__card-container">  
        <InformationBar 
          title="Information" 
            elements={[
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
              }
          ]}
        />
        <InformationBar 
          title="Contact Information" 
            elements={[
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
          }]} 
        />
        <InformationBar 
          title="Metrics" 
          elements={[
          {
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
          }]}
        />
      </div>
      <div className="agent-page__container__header__text">
        Alerts
      </div>
      <div className="agent-page__container__card-container">
        <AlertCard alertName={"Alert Name"} alertOwner={"Agent Name"} alertPriority={"CRITIC"} individualAlertLink={""} alertId={0} />
        <AlertCard alertName={"Alert Name"} alertOwner={"Agent Name"} alertPriority={"MEDIUM"} individualAlertLink={""} alertId={0} />
      </div>
      <div className="agent-page__container__header__text">
        Trainings
      </div>
      <div className="agent-page__container__card-container">
        <IndividualTrainingExpansionPanel 
          title={"Trainings of Agent..."} 
          trainings={[
          {
            label: 'Training Description',
            isComplete: true
          },
          {
            label: 'Training Description',
            isComplete: false
          }
          ]}
        />
      </div>
    </div>
    );
};
export default Agent;
  