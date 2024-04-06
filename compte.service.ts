import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>('http://localhost/ds_sgbd/gestion-enseignement/compte/rechercherTous.php');
    }
    sendData(data: any): Observable<any> {
      return this.http.post<any>('http://localhost/ds_sgbd/gestion-enseignement/compte/rechercherTous.php', data);
    }
}