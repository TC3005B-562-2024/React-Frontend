import httpInstance from "../httpInstance";
import { IAlertResponse } from "./types";

export const getAllAlerts = async () => {
    let res = null;
    const endpoint = `/alerts?logs=false`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alerts.");
        });
    return res as IAlertResponse | null;
}
