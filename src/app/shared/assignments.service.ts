import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id: 1,
      nom: "TP1 sur WebComponents, un lecteur audio  amélioré",
      dateRendu: new Date('2024-02-29'),
      rendu: true
    },
    {
      id: 2,
      nom: "Devoir sql3 Serge Miranda",
      dateRendu: new Date('2024-02-25'),
      rendu: false
    },
    {
      id: 3,
      nom: "Devoir C# Mr Naina",
      dateRendu: new Date('2024-02-29'),
      rendu: false
    }
  ];

  constructor(private logService: LoggingService) { }

  //Retourne tous les assignments
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  //revoie un assignment par id, revoie undefined si pas trouvé
  getAssignment(id: number): Observable<Assignment | undefined> {
    let a:Assignment|undefined = this.assignments.find(a => a.id == id);
    return of(a);
  }

  //Ajoute un assignment et retourne une confirmation
addAssignment(assignment: Assignment): Observable < string > {
  this.assignments.push(assignment);
  this.logService.log(assignment.nom, "a ete ajouter");
  return of("Assignment ajouter");
}

//Update assignment
updateAssignment(assignment: Assignment): Observable < string > {
  this.logService.log(assignment.nom, "a ete modifié");
  return of("Assignment modifié");
}
deleteAssignment(assignment: Assignment): Observable < string > {
  let pos = this.assignments.indexOf(assignment);
  this.assignments.splice(pos, 1);
  this.logService.log(assignment.nom, "a ete supprimé");
  return of("Assignment supprimé");
}
}
