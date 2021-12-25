// import covidCasesReducer from '../redux/covid/covid-cases-reducer';
// import setCovidCases from '../redux/covid/covid-cases-actions';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store/store';
import Home from '../pages/Home';

describe('matches snapshot', () => {
  test('matches to snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
