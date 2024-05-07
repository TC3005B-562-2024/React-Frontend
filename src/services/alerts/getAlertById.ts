import httpInstance from "../httpInstance";
import { IAlert } from "./types";

export const getAlertById = async (alertId: number) => {
    const endpoint = `/alerts/${alertId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            return response.data as IAlert;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alert.");
        });
}
