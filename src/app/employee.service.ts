import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiUrl = 'http://localhost:50814/api/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  saveEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }

}
