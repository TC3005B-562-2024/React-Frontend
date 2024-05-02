import httpInstance from "../httpInstance";
import { ISkillBriefList } from "./types";

export const getAllSkills = async () => {
  let res: ISkillBriefList =  [] as any;

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
