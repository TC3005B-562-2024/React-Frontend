import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppContext } from '../../../app-context/app-context';
import Login from '../Login';

jest.mock('../../../app-context/app-context');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login Page', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppContext as jest.Mock).mockReturnValue({
      login: mockLogin,
      loadingContext: false,
    });
  });

  test('ID: LP.1 - Renders loading state', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      login: mockLogin,
      loadingContext: true,
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });

  test('ID: LP.2 - Renders login form when not loading', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      login: mockLogin,
      loadingContext: false,
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByTestId('Login-Form')).toBeInTheDocument();
  });

  test('ID: LP.3 - Handles successful login', async () => {
    mockLogin.mockResolvedValueOnce(undefined); 
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: 'test@g.com' } });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@g.com', '123456');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  test('ID: LP.4 - Handles login error', async () => {
    mockLogin.mockRejectedValueOnce(new Error('Invalid login credentials')); 

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: 'invalid@g.com' } });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('invalid@g.com', 'wrongpassword');
      expect(screen.getByText("Invalid email or password, please try again.")).toBeInTheDocument();
    });
  });

  test('ID: LP.5 - Handles too many login attempts', async () => {
  const tooManyAttemptsError: any = new Error('Too many login attempts');
  tooManyAttemptsError.code = "auth/too-many-requests";
  mockLogin.mockRejectedValue(tooManyAttemptsError);
  
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: 'test@g.com' } });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByText("Too many attempts, please try again later.")).toBeInTheDocument();
    });
  });
});
