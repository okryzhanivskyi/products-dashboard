export type GenderType = 'male' | 'female';

export interface IUserCoordinates {
  lat: number,
  lng: number,
}

export interface IUserAddress {
  address: string,
  city: string,
  coordinates: IUserCoordinates,
  postalCode: string,
  state: string,
}

export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: GenderType,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: string,
  image: string,
  address: IUserAddress,
};

export type IUsersResult = {
  users: IUser[],
  total: number,
  skip: number,
  limit: number,
};
