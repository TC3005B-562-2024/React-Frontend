import { IIconNoColorNoSize } from "../Icon/types";

export interface ISideBarElement {
  /**
   * The label that goes inside the SideBarElement.
   */
  label: string;
  /**
   * A boolean that defines if the SideBarElement is a section or not.
   */
  isSection?: boolean;
  /**
   * The icon of the SideBarElement.
   */
  icon: IIconNoColorNoSize;
  /**
   * The path of the SideBarElement.
   */
  path: string;
  /**
   * A boolean that defines if the SideBarElement is expanded or not.
   */
  isExpanded: boolean;
  /**
   * A boolean that defines if the SideBarElement is selected or not.
   */
  ignoreIsSelected?: boolean;
}
