import httpInstance from "../httpInstance";

export const postIgnoreAlert = async (alertId: number) => {
    let res: string = "";

    const endpoint = `/alerts/${alertId}/ignore`;
    await httpInstance
    .post(endpoint)
    .then((response) => {
        res = response.data;
    })
    .catch((err) => {
        res = err.response
    });
    return res;
};
