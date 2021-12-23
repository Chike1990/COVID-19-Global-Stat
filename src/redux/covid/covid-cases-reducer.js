import covidCasesActionTypes from './covid-cases-types';

const INITIAL_STATE = {
  allCountriesCovidCases: [],
  totalStatistics: {},
  filterByDate: '2020-03-22',
};

const covidCasesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case covidCasesActionTypes.SET_COVID_CASES:
      return {
        ...state,
        allCountriesCovidCases: action.payload,
      };
    case covidCasesActionTypes.SET_TOTAL_STATISTICS:
      return {
        ...state,
        totalStatistics: action.payload,
      };
    case covidCasesActionTypes.SET_FILTER_DATE:
      return {
        ...state,
        filterByDate: action.payload,
      };
    default:
      return state;
  }
};

export default covidCasesReducer;
