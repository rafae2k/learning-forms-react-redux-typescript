// Action Types

export enum ProfessionalActions {
  PROFESSIONAL_DATA = 'PROFESSIONAL_DATA',
}

// Data Types

export interface ProfessionalData {
  curriculum: string;
  role: string;
  description: string;
}

// State type

export interface ProfessionalState {
  personal: ProfessionalData;
}
