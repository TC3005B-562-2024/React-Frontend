import httpInstance from "../httpInstance";
import { IAlertsResponse } from "./types";

export const getAllAlerts = async () => {
    let res: IAlertsResponse =  [] as any;
    const endpoint = `/alerts/all`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
        res = response.data;
        console.log(res, "Data");
        console.log(res.alerts, "Alerts")
    })
    .catch((err) => {
        res = err.response
    });
    return res;

}