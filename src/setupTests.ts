// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { TextDecoder, TextEncoder } from 'util';

//@ts-expect-error
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

// Mockear la libreria de react router-dom 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    //agregar cualquier funcion que utilicen del react-router-dom
    useNavigate: () => jest.fn(),
    useParams: () => jest.fn()
}));

//Se debe mockear cualquier otra libreria de la misma manera si es que no la encuentra