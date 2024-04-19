export interface ICompleteButton {
    /*
     * The state of the complete button
     */
    isComplete: boolean;
    /*
     * The color of the complete button
     */
    color: 'red' | 'green' | 'blue' | 'yellow' | 'orange';
    /*
     * Optional callback function to handle toggle complete event
     */
    onToggleComplete?: (newValue: boolean) => void;
  }
  