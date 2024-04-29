// Interfaz para una alerta individual
export interface IAlertsResponse {
  id: string;
  description: string;
  priority: string;
  agentId: string;
  skillId: string;
  queueId: string;
  contactId: string;
}
  