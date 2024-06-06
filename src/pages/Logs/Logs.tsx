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
      setLoading(true);
      setError(false);
      try {
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
      icon: { iconName: alert.solved ? IconNames.CheckCircle : IconNames.Cancel },
      description: alert.insight.description,
      color: alert.solved ? 'green' : 'red',
    });

    const allLogs = [
      ...data.high.map(alert => mapAlertToHistoryAgent(alert)),
      ...data.medium.map(alert => mapAlertToHistoryAgent(alert)),
      ...data.low.map(alert => mapAlertToHistoryAgent(alert)),
    ];

    allLogs.sort((a, b) => b.date.getTime() - a.date.getTime());

    return allLogs;
  };

  return (
    <div className="min-h-[200px]">
      <div className="text-title font-bold">Logs</div>
      {loading && <InfoLoader />}
      {error && <ErrorCard title="Error fetching logs" />}
      {!loading && !error && logs && logs.length === 0 && (
        <ErrorCard title="No logs found" />
      )}
      {!loading && !error && logs && logs.length > 0 && (
        <div className="logs-container">
          {logs.map((log, index) => (
            <HistoryAgent
              key={index}
              log={log.log}
              date={log.date}
              icon={log.icon}
              description={log.description}
              color={log.color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Logs;