import { action } from 'typesafe-actions';
import { ProfessionalActions, ProfessionalData } from './types';

export const loadProfessionalData = (state: ProfessionalData) =>
  action(ProfessionalActions.PROFESSIONAL_DATA, state);
