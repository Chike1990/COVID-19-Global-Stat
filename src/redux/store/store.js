import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from '../root-reducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persist = persistStore(store);

export { store, persist };
