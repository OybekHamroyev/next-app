// models/Student.ts
export interface Student {
  _id?: string;
  name: string;
  age: number;
  groupId: string; // Group bilan bog‘liq (foreign key)
}
