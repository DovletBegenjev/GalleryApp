import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Painter } from '../interface/painter'

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
