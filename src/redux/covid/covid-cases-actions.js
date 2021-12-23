/* eslint-disable arrow-body-style */
/* eslint-disable  object-shorthand */

import covidCasesActionTypes from './covid-cases-types';

export const setCovidCases = (payload) => ({
  type: covidCasesActionTypes.SET_COVID_CASES,
  payload,
});

export const setTotalStatistics = (payload) => {
  return {
    type: covidCasesActionTypes.SET_TOTAL_STATISTICS,
    payload,
  };
};

export const setFilterDate = (payload) => {
  return {
    type: covidCasesActionTypes.SET_FILTER_DATE,
    payload: payload,
  };
};
