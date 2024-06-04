import httpInstance from "../httpInstance";
import { IQueueMin } from "./types";

// Update the function's parameters
export const getQueueInfo = async (
  resourceId: string | undefined, // Existing parameter (optional)
) => {
  let res = null;

  // Dynamically build the endpoint based on provided parameters
  let endpoint = `/queues/min`; 
    if (resourceId) {
    endpoint += `?resourceId=${encodeURIComponent(resourceId)}`; 
  }

  await httpInstance
    .get(endpoint)
    .then((response) => {
      res = response.data;
    })
    .catch((err) => {
      console.error(err);
      throw new Error("Failed to fetch queue information.");
    });

  return res as IQueueMin[] | null;
};
