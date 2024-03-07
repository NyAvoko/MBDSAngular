import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AssignmentsComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application de gestion des assignments';

  constructor (
    private authService: AuthService, 
    private router: Router) {}
  
    login(){
      if(!this.authService.loggedIn){
       this.authService.logIn();
      }else{
        this.authService.logOut();

        //et on renvoie vers la page d’accueil
        this.router.navigate(['/home']);
      }
    }
}
