import httpInstance from "../httpInstance";
import { IHighPriorityAlert } from "./types";

export const getHighestPriorityAlert = async () => {
    let res = null;
    const endpoint = `/alerts/highestPriority`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alerts.");
        });
    return res as IHighPriorityAlert | null;
}
