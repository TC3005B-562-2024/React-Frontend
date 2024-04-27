import { AlertExpasionPanel, SearchBar } from "../../components";

const Alerts = () => {
    return (
      <div className=" h-lvh">
        <SearchBar onSearch={function (value: string): void {
                throw new Error("Function not implemented.");
            } } />
       <div className="text-title font-bold">Alerts</div>
       <AlertExpasionPanel alerts={[{
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'CRITIC',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 1,
            
        },
        {
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'CRITIC',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 2,
        },]} />
       <AlertExpasionPanel alerts={[{
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'MEDIUM',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 1,
            
        },
        {
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'MEDIUM',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 2,
        },]} />
       <div><AlertExpasionPanel alerts={[{
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'LOW',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 1,
            
        },
        {
            alertName: 'Alert Name',
            alertOwner: 'Agent Name',
            alertPriority: 'LOW',
            individualAlertLink: 'http://localhost:8080/alerts/',
            alertId: 2,
        },]} /></div>
      </div>
    );
  };
  
  export default Alerts;
  