import httpInstance from "../httpInstance";
import { ISkillInformation } from "./types";

export const getSkillInfo = async (skillId: string | undefined) => {
    let res = null;

    const endpoint = `/skills/${skillId}`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch skill information.");
        });

    return res as ISkillInformation | null;
}