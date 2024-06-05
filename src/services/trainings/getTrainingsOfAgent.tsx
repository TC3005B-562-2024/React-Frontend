import httpInstance from "../httpInstance";
import { ITrainingsForAResponse } from "./types";

export const getTrainingsOfAgent = async (id: number) => {
    let res = null;
    const endpoint = `/agents/${id}/trainings`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alerts.");
        });
    return res as ITrainingsForAResponse | null;
}
