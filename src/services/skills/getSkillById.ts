import httpInstance from "../httpInstance";
import { ISkillById } from "./types";

export const getSkillById = async (skillId: string) => {
    let res = null;

    const endpoint = `/skills/${skillId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alert.");
        });
    return res as ISkillById | null;
}
