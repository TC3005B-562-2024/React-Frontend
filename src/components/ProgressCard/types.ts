export interface ITraning {
  progress: number;
  label: string;
}

export interface IJointTrainingExpansionPanel {
  /**
   * The label to display in the expansion panel.
   */
  label: string;
  /**
   * A list of trainings to display in the expansion panel.
   */
  trainings: ITraning[];
  /**
   * Overrides the default color of the progress bar.
   */
  color?: 'green' | 'yellow' | 'red';
}
