import { ISkillBrief } from "../../services/skills/types"

export interface ISideBar {
  /**
   * The label of the multiselect
   */
  skills?: ISkillBrief[];
}
