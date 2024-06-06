import { ISkillBrief } from '../types';

export const mockGetAllSkillsResponse: ISkillBrief[] = [
  {
    id: '1',
    resource: 'arn:aws:lex:us-east-1:123456789012:bot:BookTrip:1',
    alias: 'BookTrip',
    iconName: 'alarm'
  },
  {
    id: '2',
    resource: 'arn:aws:lex:us-east-1:123456789012:bot:OrderFlowers:1',
    alias: 'OrderFlowers',
    iconName: 'alarm'
  },
  {
    id: '3',
    resource: 'arn:aws:lex:us-east-1:123456789012:bot:ScheduleAppointment:1',
    alias: 'ScheduleAppointment',
    iconName: 'alarm'
  },
];
