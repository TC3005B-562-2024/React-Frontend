import React, { useEffect, useState } from "react";
import { getAllAlerts } from "../../services";
import { IAlert } from "../../services/alerts/types";
import Config from "../../config";
import SearchBar from "../../components/SearchBar/SearchBar";
import AlertExpansionPanel from "../../components/AlertExpansionPanel/AlertExpansionPanel";

const Alerts: React.FC = () => {
  const [alertsReceivedHigh, setAlertsHigh] = useState<IAlert[]>([]);
  const [alertsReceivedMedium, setAlertsMedium] = useState<IAlert[]>([]);
  const [alertsReceivedLow, setAlertsLow] = useState<IAlert[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorAlerts, setErrorAlerts] = useState<boolean>(false);

  const getAlerts = async () => {
    await getAllAlerts()
    .then((res) => {
      setAlertsHigh(res.high);
      setAlertsMedium(res.medium);
      setAlertsLow(res.low);
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
    <div>
      <SearchBar onSearch={function (): void {
        throw new Error("Function not implemented.");}}/>
      <div className="text-title font-bold">Alerts</div>
      {loading && <div>Loading...</div>}
      {errorAlerts && <div>Error fetching alerts</div>}
      <div className="my-2">
        <AlertExpansionPanel
          alerts={alertsReceivedHigh.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination, // insight - category - denomination
            alertOwner: alert.resource, // resource
            alertPriority: 'CRITIC',
            individualAlertLink: `${Config.FRONT_URL}alerts/${alert.id}`
          }))}
        />
      </div>
      <div className="my-2">
        <AlertExpansionPanel
          alerts={alertsReceivedMedium.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination, // insight - category - denomination
            alertOwner: alert.resource, // resource
            alertPriority: 'MEDIUM',
            individualAlertLink: `${Config.FRONT_URL}alerts/${alert.id}`
          }))}
        />
      </div>
      <div className="my-2">
        <AlertExpansionPanel
          alerts={alertsReceivedLow.map(alert => ({
            alertId: alert.id,
            alertName: alert.insight.category.denomination, // insight - category - denomination
            alertOwner: alert.resource, // resource
            alertPriority: 'LOW',
            individualAlertLink: `${Config.FRONT_URL}alerts/${alert.id}`
          }))}
        />
      </div>
    </div>
  );
};
  
export default Alerts;