export class AuthService {
  isAdmin = false

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isAdmin);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.isAdmin = true;
  }

  logout() {
    this.isAdmin = false;
  }
}
