import { IMultiselectOptions } from "../MultiselectOptions/types";
export interface IMultiselect {
  /**
   * The options to be displayed in the multiselect.
   */
  options: IMultiselectOptions[];
  onOptionChange: (newOptions: IMultiselectOptions[]) => void;
}
