export interface User {
  _id: string;
  guid: string;
  isActive: boolean;
  age: number;
  address: string;
  company: string;
  email: string;
  eyeColor: string;
  name: string;
  gender: string;
  balance: string;
  picture: string;
  phone: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: [string, string, string, string, string, string, string];
}
