import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  //injection du service d'authentification
  const authService = inject(AuthService);
// ici on injecte le router
  const router = inject(Router);

  //si ça renvoie true, alors, on peut activer la route
  return authService.isAdmin()
  .then(admin =>{
    if(admin){
      console.log("GUARD: navigation autorisée !");
      return true;
    }else{
      console.log("GUARD: Navigation non autorisée"!);
      //et on retourne vers la page d'accueil
      router.navigate(['/home']);
      return false;
    }
  })
};
