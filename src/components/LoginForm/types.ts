export interface ILoginForm {
  /**
  * The color of input fields.
  */
  status: 'default' | 'error'
  /**
  * Function to handle form submission.
  */
  onSubmit: (email: string, password: string) => void;
}
