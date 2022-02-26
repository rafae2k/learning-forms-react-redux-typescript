import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { PersonalData } from '../ducks/personal/types';
import { ProfessionalData } from '../ducks/professional/types';

import rootReducer from '../ducks';

export interface ApplicationState {
  personal: PersonalData;
  professional: ProfessionalData;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
