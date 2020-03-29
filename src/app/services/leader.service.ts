import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leader } from '../shared/leader';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  // getLeader(id: number): Leader {
  //   return LEADERS.filter((leader) => (leader.id === id))[0];
  // }
}
