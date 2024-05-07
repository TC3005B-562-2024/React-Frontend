import httpInstance from "../httpInstance";
import { IAlertResponse } from "./types";

export const getAllAlerts = async () => {
    const endpoint = `/alerts/connections/1`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            return response.data as IAlertResponse;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alerts.");
        });
}
