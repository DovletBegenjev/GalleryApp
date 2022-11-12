import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Painting } from '../interface/painting';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private apiURL = environment.apiURL

  constructor(private http: HttpClient) { }

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(`${this.apiURL}/paintings`)
  }

  getPainting(): Observable<Painting> {
    return this.http.get<Painting>(`${this.apiURL}/paintings/1`)
  }
}
