export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

let user1: User = {
  username: 'dulesich',
  password: '123456',
  isAdmin: true
}

let user2: User = {
  username: 'grantmara',
  password: 'mayabean2',
  isAdmin: true
}

let user3: User = {
  username: 'testStudent',
  password: 'Pa$$w0rd',
  isAdmin: false
}



export let users: User[] = [];
users.push(user1);
users.push(user2);
users.push(user3);

