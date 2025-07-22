import type { Chat } from '@google/genai';

export interface Injury {
  name: string;
  rate: number | [number, number];
}

export interface InjurySubcategory {
  name:string;
  injuries: Injury[];
}

export interface InjuryCategory {
  name: string;
  subcategories: InjurySubcategory[];
}

export interface SelectedInjury extends Injury {
  id: string;
  chosenRate: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ProfessionalDisease {
  tableau: string;
  name: string;
  description: string;
  delay: string;
  workList: string;
}

export interface DiseaseCategory {
    name: string;
    diseases: ProfessionalDisease[];
}


export { Chat };