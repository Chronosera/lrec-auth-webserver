// Creating interface for test users. Users must have username, and admin status.
export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

// Creating Users
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


// Adding Users to Array.
export let users: User[] = [];
users.push(user1);
users.push(user2);
users.push(user3);

