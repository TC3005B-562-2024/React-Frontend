import React, { useEffect, useState } from "react";
import { AlertExpasionPanel, SearchBar } from "../../components";
import { getAllAlerts } from "../../services";
import { IAlert } from "../../services/alerts/types";

const Alerts: React.FC = () => {
  const [alertsReceived, setAlerts] = useState<IAlert[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorAlerts, setErrorAlerts] = useState<boolean>(false);

  const getAlerts = async () => {
    await getAllAlerts()
    .then((res) => {
      setAlerts(res.alerts);
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
    <div className=" h-lvh">
      <SearchBar onSearch={function (): void {
        throw new Error("Function not implemented.");}}/>
      <div className="text-title font-bold">Alerts</div>
      {loading && <div>Loading...</div>}
      {errorAlerts && <div>Error fetching alerts</div>}
      {alertsReceived?.length > 0 && alertsReceived.map((alert) => (
        alert.priority == 'CRITIC' &&
        <AlertExpasionPanel alerts={[{
          alertName: alert.description,
          alertOwner: alert.agentId,
          alertPriority: alert.priority,
          individualAlertLink: 'http://localhost:8080/alerts/',
          alertId: parseInt(alert.id),
      }]} /> ))}
      {alertsReceived?.length > 0 && alertsReceived.map((alert, index) => (
        alert.priority == 'MEDIUM' &&
        <div className="my-2"><AlertExpasionPanel key={index} alerts={[{
          alertName: alert.description,
          alertOwner: alert.agentId,
          alertPriority: alert.priority,
          individualAlertLink: 'http://localhost:8080/alerts/',
          alertId: parseInt(alert.id),
      }]} /></div> ))}
      {alertsReceived?.length > 0 && alertsReceived.map((alert, index) => (
        alert.priority == 'LOW' &&
        <div className="my-2"><AlertExpasionPanel key={index} alerts={[{
          alertName: alert.description,
          alertOwner: alert.agentId,
          alertPriority: alert.priority,
          individualAlertLink: 'http://localhost:8080/alerts/',
          alertId: parseInt(alert.id),
      }]} /></div> ))}
    </div>
  );
};
  
export default Alerts;