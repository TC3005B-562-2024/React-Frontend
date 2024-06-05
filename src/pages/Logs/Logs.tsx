// Logs.tsx
import React, { useEffect, useState } from "react";
import { getLogs } from "../../services/alerts/logsService";
import { IHistoryAgentProps } from "../../components/HistoryAgent/types";
import { ErrorCard, InfoLoader } from "../../components";
import HistoryAgent from "../../components/HistoryAgent/HistoryAgent";
import { IAlertResponse, IAlert } from "../../services/alerts/types";
import { IconNames } from "../../components/Icon/types";

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<IHistoryAgentProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);
        const logsData: IAlertResponse | null = await getLogs();
        if (logsData) {
          const transformedLogs = transformLogs(logsData);
          setLogs(transformedLogs);
        } else {
          setLogs([]);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const transformLogs = (data: IAlertResponse): IHistoryAgentProps[] => {
    const mapAlertToHistoryAgent = (alert: IAlert): IHistoryAgentProps => ({
      log: (alert.insight.category.denomination + " action").toUpperCase(),
      date: new Date(alert.dateUpdated), 
        //
        //Hay un tema con la fecha pues en la base de datos se ve algo a si 2024-05-17T06:33:40.000+00:00 ej.
        // y al usar el new Date el formato es algo a si Thu May 16 2024 20:10:10 GMT-0600 (hora estándar central)
        // entonces en la page de logs la fecha no sale como deberia salir
        //mas que nada el problema es con la hora y aveces con el dia
        //
        //
        //
      icon: { iconName: alert.solved ? IconNames.CheckCircle : IconNames.Cancel }, 
      description: alert.insight.description,
      color: alert.solved ? 'green' : 'red', 
    });

    return [
      ...data.high.map(alert => mapAlertToHistoryAgent(alert)),
      ...data.medium.map(alert => mapAlertToHistoryAgent(alert)),
      ...data.low.map(alert => mapAlertToHistoryAgent(alert)),
    ];
  };

  return (
    <>
      <div className="text-title font-bold">Logs</div>
      {loading && <InfoLoader></InfoLoader>}
      {error && <ErrorCard title="Error fetching logs" />}
      {!loading && !error && logs && logs.length === 0 && (
        <ErrorCard title="No logs found" />
      )}
      {!loading && !error && logs && logs.length > 0 && (
        <div className="logs-container">
          {logs.map((log, index) => (
            <HistoryAgent
              key={index} // Si tienes un id único, usa log.id
              log={log.log}
              date={log.date}
              icon={log.icon}
              description={log.description}
              color={log.color}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Logs;
