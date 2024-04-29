import httpInstance from "../httpInstance";

export const getAllAlerts = async () => {
    let res: any;
    const endpoint = `/alerts/all`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
        res = response.data;
        console.log(res, "Data");
        console.log(res.alerts, "Alerts");
        console.log(res.alerts.length, "Length");
    })
    .catch((err) => {
        res = err.response
    });
    return res;

}