import { IMultiselectOptions } from "../MultiselectOptions/types";
export interface IMultiselect {
  /**
   * The options to be displayed in the multiselect.
   */
  options: Array<IMultiselectOptions>
  onOptionChange: (newOptions: IMultiselectOptions[]) => void;
}
