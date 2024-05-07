//import { IProgressBar } from "../ProgressBar/types";

export interface IJointTrainingExpansionPanel {
    /**
     * The label to display in the expansion panel.
     */
    label: string;
    /**
     * A list of trainings to display in the expansion panel.
     */
    trainings: string[][];
    //trainings : Array<IProgressBar>;
    /**
     * Overrides the default color of the progress bar.
     */
    color?: 'green' | 'yellow' | 'red';
}
