export interface ISkillBrief {
  id: string;
  resource: string;
  alias: string;
  iconName: string;
}

export interface ISkillBriefList {
  [x: string]: any;
  skills: ISkillBrief[];
}
