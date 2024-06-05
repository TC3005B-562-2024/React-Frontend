import httpInstance from "../httpInstance";

export const putTrainingsOfAgent = async (id: number, trainingValue:boolean) => {
    let body = {
        "connectionId": null,
        "insightId": null,
        "trainingId": null,
        "interveneContact": null,
        "interveneAgent": null,
        "originalRoutingProfile": null,

        "destinationRoutingProfile": null,
        "transferedAgent": null,
        "resource": null,
        "solved": null,
        "trainingCompleted": trainingValue
    };   
    const endpoint = `/alerts/${id}`;
    await httpInstance
        .put(endpoint, body)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
}
