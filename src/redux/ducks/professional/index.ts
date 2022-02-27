import { Reducer } from 'redux';
import { ProfessionalActions, ProfessionalData } from './types';

const INITIAL_STATE: ProfessionalData = {
  curriculum: '',
  role: '',
  description: '',
};

// Reducers

export const professional: Reducer<ProfessionalData> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ProfessionalActions.PROFESSIONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default professional;
