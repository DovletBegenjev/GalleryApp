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

  getPainter(id: number): Observable<Painter> {
    return this.http.get<Painter>(`${this.apiURL}/painters/${id}`)
  }

  createPainter(painter: Painter): Observable<Painter> {
    return this.http.post<Painter>(`${this.apiURL}/painters`, painter)
  }

  patchPainter(painter: Painter): Observable<Painter> {
    return this.http.patch<Painter>(`${this.apiURL}/painters/${painter.id}`, painter)
  }

  deletePainter(id: number): Observable<Painter> {
    return this.http.delete<Painter>(`${this.apiURL}/painters/${id}`)
  }
}
