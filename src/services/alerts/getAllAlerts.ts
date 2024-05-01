import httpInstance from "../httpInstance";
import { IAlertResponse } from "./types";

export const getAllAlerts = async () => {
    let res: IAlertResponse =  [] as any;
    let errorBool = false;
    const endpoint = `/alerts/connections/1`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
        res = response.data;
    })
    .catch((err) => {
        res = err.response;
    });
    return res;
}
