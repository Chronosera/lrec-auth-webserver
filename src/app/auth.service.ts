export class AuthService {
  isAdmin = false

  //function to check wether or not the user is authenticated as an admin.
  isAuthenticated() {
    //creat promise resolve on if this is user is an admin
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isAdmin);
        }, 100);
      }
    );
    return promise;
  }
  //Set the user as an admin
  login() {
    this.isAdmin = true;
  }
  //set a logged in admin as not an admin
  logout() {
    this.isAdmin = false;
  }
}
