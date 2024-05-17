// logsService.ts
import httpInstance from "../httpInstance";
import { IHistoryAgentProps } from "../../components/HistoryAgent/types";
import { IAlertResponse } from "./types";

export const getLogs = async () => {
  let res = null;
  const endpoint = "/alerts?logs=true"; // Endpoint para obtener los registros
  await httpInstance
    .get(endpoint)
    .then((response) => {
      res = response.data;
    })
    .catch((err) => {
      console.error(err);
      throw new Error("Failed to fetch logs.");
    });
    return res as IAlertResponse | null;
};