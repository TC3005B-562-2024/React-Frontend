export interface IPill {
  /**
   * The text that goes inside the pill.
   */
  text: string;
  /**
   * The color of the background of the pill.
   */
  color: 'blue' | 'red' | 'green' | 'yellow' | 'orange' | 'gray';
  /**
   * The class name to apply to the pill.
   */
  className?: string;
}
