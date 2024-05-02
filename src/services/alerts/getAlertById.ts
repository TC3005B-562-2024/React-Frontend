import httpInstance from "../httpInstance";
import { IAlert } from "./types";

export const getAlertById = async (alertId: number) => {
    let res: IAlert =  [] as any;

    const endpoint = `/alerts/${alertId}`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
        res = response.data;
    })
    .catch((err) => {
        res = err.response
    });
    return res;
}
