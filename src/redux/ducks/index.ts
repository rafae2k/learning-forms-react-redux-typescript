import { combineReducers } from 'redux';

import personal from './personal';
import { PersonalData } from './personal/types';
import profissional from './professional';
import { ProfessionalData } from './professional/types';

export interface rootReducerState {
  personal: PersonalData;
  profissional: ProfessionalData;
}

const rootReducer = combineReducers<rootReducerState>({
  personal,
  profissional,
});

export default rootReducer;
