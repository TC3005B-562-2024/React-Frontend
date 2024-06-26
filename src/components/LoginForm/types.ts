export interface ILoginForm {
  /**
  * The color of input fields.
  */
  status: 'default' | 'error'
  /**
  * Function to handle form submission.
  */
  onSubmit: (email: string, password: string) => void;
  /**
   * Function to be called when any input value changes.
   */
  onInputChange: () => void;
  /**
   * If the user has made too many attempts to log in.
   */
  attemptsError: boolean;
}
