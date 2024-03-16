import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [];

  constructor(
    private logService: LoggingService,
    private http: HttpClient
    ) { }

  uri = 'http://localhost:8010/api/assignments';
  //Retourne tous les assignments
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
  }

  //revoie un assignment par id, revoie undefined si pas trouvé
  getAssignment(id: number): Observable<Assignment | undefined> {
    return this.http.get<Assignment>(this.uri+ "/" + id);
    
    //let a:Assignment|undefined = this.assignments.find(a => a.id == id);
    //return of(a);
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
