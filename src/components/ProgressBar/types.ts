export interface IProgressBar {
    /**
     * The progress value of the progress bar. This value should be between 0 and 100.
     */
    progress: number;
    /**
     * The color of the progress bar.
     */
    color : 'green' | 'yellow' | 'red';
    /**
     * The label of the progress bar.
     */
    label : string;
}
