// Action Types

export enum PersonalActions {
  PERSONAL_DATA = 'PERSONAL_DATA',
}

// Data Types

export interface PersonalData {
  name: string;
  email: string;
  cpf: string;
  address: string;
  city: string;
  state: string;
}

// State type

export interface PersonalState {
  personal: PersonalData;
}
