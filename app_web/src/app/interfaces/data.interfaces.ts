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

export interface IDataUser {
  username: string;
  token: string;
}

export interface IMsgServeLogin {
  username: string;
  token: string;
  msg: string;
  error: boolean;
}
