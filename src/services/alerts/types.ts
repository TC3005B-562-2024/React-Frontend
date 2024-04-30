// Interfaz para una alerta individual
export interface IAlertsResponse {
  alerts: IAlert[];
}

export interface IAlert{
  id: string;
  description: string;
  priority: string;
  agentId: string;
  skillId: string;
  queueId: string;
  contactId: string;
}
  