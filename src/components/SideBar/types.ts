import { ISkillBriefList } from "../../services/skills/types"
import { ISideBarElement } from "../SideBarElement/types"
export interface ISideBar {
  /**
   * The label of the multiselect
   */
  skills?: ISkillBriefList;
}
