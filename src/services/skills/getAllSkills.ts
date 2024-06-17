import httpInstance from "../httpInstance";
import { ISkillBrief } from "./types";

export const getAllSkills = async () => {
  let res: ISkillBrief[] = [];

  const endpoint = '/skills';
  await httpInstance
  .get(endpoint)
  .then((response) => {
    res = response.data;
  })
  .catch((err) => {
    console.error(err);
    throw new Error("Failed to fetch alert.");
  });
  return res;
}
