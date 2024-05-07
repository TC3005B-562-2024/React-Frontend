import httpInstance from "../httpInstance";
import { IAlert } from "./types";

export const getAlertById = async (alertId: number) => {
    let res = null;
    
    const endpoint = `/alerts/${alertId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alert.");
        });

    return res as IAlert | null;
}
