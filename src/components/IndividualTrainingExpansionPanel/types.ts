import { ITrainingCardToggle } from "../TrainingCardToggle/types";

export interface IIndividualTrainingExpansionPanel {
    /*
        * The title of the Expansion Panel Title
        */
    title: string;
    /*
        * The color of the Expansion Panel Title
        */
    titleColor: string;
    /*
        * The trainings to be displayed
        */
    trainings: Array<{
        item:ITrainingCardToggle;
    }>
  }