import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //propriété pour savoir si l'utilisateur est connecté
  loggedIn = false;

  //methode pour connecter l'utilisateur
  logIn() {
    this.loggedIn = true;
  }

  //methode pour se deconnecter l'utilisateur
  //typiquement, il faudrait qu'elle accepte en paramètres un nom d'utilisateur
  //et un mot de passe, que l'on verififierait auprès du serveur
  logOut() {
    this.loggedIn = false;
  }

  //methode qui indique si on est connecté en tant qu'admin ou pas
  // pour le moment, on est admin simplement si on est connecté
  // en fait cette methode ne renvoie âs directement un booleen
  //mais promise qui va revoyer un booleen (c'est imposé par 
  //le système de securisation des routes de angular)
//
//si on utilisait à al main dans un composant, on ferait:
// this.authService.isAdmin().then(...) ou
//admin =await this.authService.isAdmin();

  isAdmin() {
    const promesse = new Promise((resolve, reject) => {
        resolve(this.loggedIn);
        //pas de cas d'erreurici, donc pas de reject
      });
    return promesse;
  }
}
