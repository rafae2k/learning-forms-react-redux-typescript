import { combineReducers } from 'redux';

import personal from './personal';
import profissional from './professional';

const rootReducer = combineReducers({ personal, profissional });

export default rootReducer;
