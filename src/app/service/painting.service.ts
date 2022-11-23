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

  getPainting(id: number): Observable<Painting> {
    return this.http.get<Painting>(`${this.apiURL}/paintings/${id}`)
  }

  createPainting(painting: Painting): Observable<Painting> {
    return this.http.post<Painting>(`${this.apiURL}/paintings`, painting)
  }

  patchPainting(painting: Painting): Observable<Painting> {
    return this.http.patch<Painting>(`${this.apiURL}/paintings/${painting.id}`, painting)
  }

  deletePainting(id: number): Observable<Painting> {
    return this.http.delete<Painting>(`${this.apiURL}/paintings/${id}`)
  }
}
