import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  //revoie une promesse qui,lorsqu'elle est "resolved", renvoie si l'utilisateur
  // est admin ou pas. Pour le moment, renvoie true si il est loggé

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
    return isUserAdmin;
  }
  constructor() { }
}
