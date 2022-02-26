import { Reducer } from 'redux';
import { PersonalData, PersonalActions } from './types';

const INITIAL_STATE: PersonalData = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
};

// Reducers

const personal: Reducer<PersonalData> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PersonalActions.PERSONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default personal;
