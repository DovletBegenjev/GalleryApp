import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gallery } from '../interface/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiURL = environment.apiURL

  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${this.apiURL}/galleries`)
  }

  getGallery(id: number): Observable<Gallery> {
    return this.http.get<Gallery>(`${this.apiURL}/galleries/${id}`)
  }

  createGallery(gallery: Gallery): Observable<Gallery> {
    return this.http.post<Gallery>(`${this.apiURL}/galleries`, gallery)
  }

  patchGallery(gallery: Gallery): Observable<Gallery> {
    return this.http.patch<Gallery>(`${this.apiURL}/galleries/${gallery.id}`, gallery)
  }

  deleteGallery(id: number): Observable<Gallery> {
    return this.http.delete<Gallery>(`${this.apiURL}/galleries/${id}`)
  }
}
