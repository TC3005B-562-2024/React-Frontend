export interface IProgressBar {
    /**
     * The current progress of the Progress Bar
     *  - Must be a number between 0 and 100
     * - Defaults to 0
     * - If the value is less than 0, it will be set to 0
     * - If the value is greater than 100, it will be set to 100
     * - If the value is not a number, it will be set to 0
     * - If the value is a float, it will be rounded to the nearest whole number
     * - If the value is NaN, it will be set to 0q
     * - If the value is Infinity, it will be set to 100
     * - If the value is -Infinity, it will be set to 0
     * - If the value is null, it will be set to 0
     * - Default color should be green
     * - the borders should be rounded with a radius of 5px
     ***/
    progress: number;
    color : 'green' | 'yellow' | 'red';
    rounded : boolean;
    label : string;
    agentName : string;
    
}