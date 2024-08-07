import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class APIFunctionServicesService<T> {
  constructor(@Inject(String) public url: string, protected Http: HttpClient) {}

  get(): Observable<T> {
    return this.Http.get<T>(this.url);
  }
  getById(id: number): Observable<user> {
    return this.Http.get<user>(`${this.url}/${id}`);
  }
  post(obj: any): Observable<T> {
    return this.Http.post<T>(this.url, obj);
  }
  put(obj: user): Observable<T> {
    return this.Http.put<T>(this.url + `/` + obj.id, obj);
  }

  delete(id: any): Observable<T> {
    return this.Http.delete<T>(this.url + `/${id}`);
  }
}
