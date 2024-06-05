import httpInstance from "../httpInstance";
import { IQueueInformation } from "./types";

export const getQueueInfo = async (queueId: string | undefined) => {
    let res = null;

    const endpoint = `/queues/${queueId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch queue information.");
        });

    return res as IQueueInformation | null;
}

