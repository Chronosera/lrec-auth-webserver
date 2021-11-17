export interface User {
  id: number,
  rfid: number,
  username: string;
  password: string;
  isAdmin: boolean;
  machines: Array<string>
}

export class UserObj {
  constructor(
    public id: number,
    public rfid: number,
    public username: string,
    public password: string,
    public isAdmin: boolean,
    public machines: Array<string>
  ) { }
}

export const Users: User[] = [
  {
    id: 1,
    rfid: 4241,
    username: 'dulesich',
    password: '123456',
    isAdmin: true,
    machines: ["CNC Mill", "Plasma Cutter"]
  },
  {
    id: 2,
    rfid: 5234533,
    username: 'grantmara',
    password: 'mayabean2',
    isAdmin: true,
    machines: ["Vertical Bandsaw"]
  },
  {
    id: 3,
    rfid: 415290312,
    username: 'testStudent',
    password: 'Pa$$w0rd',
    isAdmin: false,
    machines: ["Miter Box"]
  },
  {
    id: 4,
    rfid: 3448873,
    username: 'admin',
    password: '123',
    isAdmin: true,
    machines: ["Mini Mill", "Robot Field"]
  },
  {
    id: 5,
    rfid: 4348344,
    username: 'user',
    password: '123',
    isAdmin: false,
    machines: ["CNC Lathe"]
  }
];

//let user1: User = {
//  username: 'dulesich',
//  password: '123456',
//  isAdmin: true,
//  machines: ["machine 1", "machine 2"]
//}

//let user2: User = {
//  username: 'grantmara',
//  password: 'mayabean2',
//  isAdmin: true,
//  machines: ["machine 1", "machine 2"]
//}

//let user3: User = {
//  username: 'testStudent',
//  password: 'Pa$$w0rd',
//  isAdmin: false,
//  machines: ["machine 1", "machine 2"]

//}

//let user4: User = {
//  username: 'user',
//  password: '123',
//  isAdmin: false,
//  machines: ["machine 1", "machine 2"]
//}

//let user5: User = {
//  username: 'admin',
//  password: '123',
//  isAdmin: true,
//  machines: ["machine 1", "machine 2"]
//}



//export let users: User[] = [];
//users.push(user1);
//users.push(user2);
//users.push(user3);
//users.push(user4);
//users.push(user5);
