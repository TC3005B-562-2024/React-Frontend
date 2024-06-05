import httpInstance from "../httpInstance";

export const putTrainingForAnAgent = async (id: number, trainingValue:boolean) => {
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
            console.log("Training data sent successfully.", res);
        })
        .catch((err) => {
            console.error(err);
            console.log("Traiining data failed to send.")
        });
}
