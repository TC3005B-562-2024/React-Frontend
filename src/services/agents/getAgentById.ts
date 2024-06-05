import httpInstance from "../httpInstance";
import { IAgentInformation } from "./types";

export const getAgentById = async (agentId: string | undefined) => {
    let res = null;

    const endpoint = `/agents/${agentId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            console.log("Data Received", response);
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch agent information.");
        });

    return res as IAgentInformation | null;
}

