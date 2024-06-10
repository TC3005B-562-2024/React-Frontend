export interface IInputField {
  /**
  * Id of the input field
  */
  id: string;
  /**
  * The type of inputfield
  */
  type: 'email' | 'number' | 'secret' | 'text';
  /**
  * Text of the label
  */
  label: string;
  /**
  * Position of the label
  */
  labelPosition: 'left' | 'center' | 'right';
  /**
  * Text of the helper text
  */
  helperText: string;
  /**
  * Placeholder text for the input field
  */
  placeholder: string;
   /**
  * Set if the input field is required
  */
  required: boolean;
  /**
  * The color of the text
  */
  color: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
  /**
  * Function to handle onChange event
  */
  onChange?: ((id: string, value: string) => void);
}
