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
    res = err.response;
  });
  return res;
}
