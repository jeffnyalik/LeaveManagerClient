
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { leaves } from '../../endpoints/leave_urls';
import { Leave } from 'src/app/admin/models/leaves';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  public BASE_URL = environment.BASE_URL;
  public LEAVE_URLS = leaves.LEAVES_URL;
  
  
  constructor(private http: HttpClient) { }
  getLeaves(): Observable<Leave[]>{
    return this.http.get<Leave[]>(`${this.BASE_URL}${this.LEAVE_URLS}`);
  }
}
