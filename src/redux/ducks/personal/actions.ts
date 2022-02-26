import { action } from 'typesafe-actions';
import { PersonalActions, PersonalData } from './types';

export const loadPersonalData = (state: PersonalData) =>
  action(PersonalActions.PERSONAL_DATA, state);
