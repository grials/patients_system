export interface IDataPatient {
  name: string;
  lastname: string;
  age: number;
  birthday: string;
  gender: 'male' | 'famenine';
  phone: string;
  pregnancy: boolean;
  error: boolean;
  msg: string;
}
