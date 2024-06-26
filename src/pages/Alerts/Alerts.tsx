import React, { useEffect, useState } from "react";
import { getAllAlerts } from "../../services";
import { IAlertResponse } from "../../services/alerts/types";
import { IAlertCard } from "../../components/AlertCard/types";
import SearchBar from "../../components/SearchBar/SearchBar";
import AlertExpansionPanel from "../../components/AlertExpansionPanel/AlertExpansionPanel";
import { ErrorCard } from "../../components";

const Alerts: React.FC = () => {
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
      <SearchBar onSearch={function (): void { throw new Error("Function not implemented."); }} />
      <div className="text-title font-bold">
        Alerts
      </div>
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
    </>
  );
};
export default Alerts;
