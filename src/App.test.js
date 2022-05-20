
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import EmployeeData from './components/EmployeeData';
import Register from './components/Register';

// on cmd, run - 
// npm test 
// if test run fails - 
// npm i -D --exact jest-watch-typeahead@0.6.5  

// test(arg1, arg2);
// test('description for the test', () => { });

test('renders Registered User Data', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  const testValue = screen.getByText('Registered User Data');
  expect(testValue).toBeInTheDocument();
});


test('renders welcome', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText('Welcome to LTI React App');
  expect(linkElement).toBeInTheDocument();
});


test('renders employee', () => {
  render(
    <Provider store={store}>
      <EmployeeData />
    </Provider>
  );
  const linkElement = screen.getByText('Employee component');
  expect(linkElement).toBeInTheDocument();
});






// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



