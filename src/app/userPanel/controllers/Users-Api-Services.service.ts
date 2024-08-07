import { Injectable } from '@angular/core';
import { APIFunctionServicesService } from './API-Function-Services.service';
import { HttpClient } from '@angular/common/http';
import { user } from '../model/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersApiServicesService extends APIFunctionServicesService<
  user[]
> {
  constructor(public override Http: HttpClient) {
    super('https://reqres.in/api/users', Http);
  }

  override get(): Observable<user[]> {
    return this.Http.get<any>(this.url).pipe(map((response) => response.data));
  }

  override getById(id: number): Observable<user> {
    return this.Http.get<any>(`${this.url}/${id}`).pipe(
      map((response) => response.data as user)
    );
  }
}
