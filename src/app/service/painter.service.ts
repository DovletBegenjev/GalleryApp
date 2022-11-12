import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Painter } from '../interface/painter'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PainterService {
  private apiURL = environment.apiURL

  constructor(private http: HttpClient) { }

  getPainters(): Observable<Painter[]> {
    return this.http.get<Painter[]>(`${this.apiURL}/painters`)
  }

  getPainter(): Observable<Painter> {
    return this.http.get<Painter>(`${this.apiURL}/painters/1`)
  }
}
