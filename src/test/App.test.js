import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import App from '../App';

test('It should Should display the header', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const headerText = screen.getByText(/COVID-19 GLOBAL STAT/i);
  expect(headerText).toEqual(headerText);
});
