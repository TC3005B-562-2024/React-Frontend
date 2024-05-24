import httpInstance from "../httpInstance";
import { IAgentCardDTO } from "./types";

export const getAllAgents = async (resourceId?: string) => {
    let res = null;
    let endpoint = `/agents`;
    if (resourceId) endpoint += `?resourceId=${resourceId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alerts.");
        });
    return res as IAgentCardDTO[] | null;
}
