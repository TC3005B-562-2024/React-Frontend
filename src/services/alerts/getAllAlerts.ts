import httpInstance from "../httpInstance";
import { IAlertResponse } from "./types";

export const getAllAlerts = async () => {
    let res: IAlertResponse =  [] as any;

    const endpoint = `/alerts/connections/1`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
        res = response.data;
        console.log(res, "Data");
        console.log(res.high, "Alerts High")
    })
    .catch((err) => {
        res = err.response
    });
    return res;

}