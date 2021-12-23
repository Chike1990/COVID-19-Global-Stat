import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import covidCasesReducer from './covid/covid-cases-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['rockets', 'missions'],
};

const rootReducer = combineReducers({
  covidCases: covidCasesReducer,
});

export default persistReducer(persistConfig, rootReducer);
