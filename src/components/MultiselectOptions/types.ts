export interface IMultiselectOptions {
    /**
     * Whether the option is selected or not
     */
    isSelected: boolean;
    /**
     * The label to display for the option
     */
    label: string;
    onChange: (label: string, isSelected: boolean) => void;
}
