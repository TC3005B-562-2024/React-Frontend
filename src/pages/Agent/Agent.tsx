import { useParams } from "react-router-dom";
import { AlertCard, IndividualTrainingExpansionPanel, InformationBar } from "../../components";

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
      <div className="h-lvh">
        <div className="flex flex-row space-x-3">
          <h1 className="text-section-title font-semibold">Agent: </h1>
          <h1 className="text-section-title font-semibold text-aci-orange">{id}</h1>
        </div>
        <InformationBar title="Information" elements={[
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
        ]} />
        <br></br>
        <br></br>
        <InformationBar title="Contact Information" elements={[
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
        }]} />
        <br></br>
        <br></br>
        <InformationBar title="Metrics" elements={[{
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
        }]} />

        <div className="text-section-title font-semibold">Alerts</div>
        <AlertCard alertName={"Alert Name"} alertOwner={"Agent Name"} alertPriority={"CRITIC"} individualAlertLink={""} alertId={0} />
        <br></br>
        <AlertCard alertName={"Alert Name"} alertOwner={"Agent Name"} alertPriority={"MEDIUM"} individualAlertLink={""} alertId={0} />
        
        <div className="text-section-title font-semibold">Trainings</div>
        <IndividualTrainingExpansionPanel title={"Trainings of Agent..."} trainings={[
          {label: 'Training Description',
          isComplete: true},
          {
          label: 'Training Description',
          isComplete: false}
          ]} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


      </div>
    );
  };
  
  export default Agent;
  