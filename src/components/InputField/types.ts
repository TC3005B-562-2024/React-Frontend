export interface IInputField{
  /**
     * id of the input field
     */
  id: string;
  /**
    * The type of inputfield
    */
  type: 'email' | 'number' | 'secret' | 'text'

   /**
   * Placeholder text for the input field
   */
   placeholder: string;

   /**
     * The color of the text
     */
   color: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'

   /**
   * Function to handle onChange event
   */
   onChange: ((id: string, value: string) => void);
}