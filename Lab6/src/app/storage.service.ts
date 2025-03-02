import { Injectable } from '@angular/core';
import { Album } from './album';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { AlbumPhotos } from './album-photos';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dbUrl: string = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) { }

  getAlbums (): Observable<Album[]> {
    return this.http.get<Album[]>(this.dbUrl)
    .pipe(
      catchError((error) => {
        console.error('Error fetching albums:', error);
        return of([]);
      })
    );
  }

  getAlbum (albumId: number): Observable<Album> {
    return this.http.get<Album>(`${this.dbUrl}/${albumId}`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching albums:', error);
        return of();
      })
    );
  }

  getAlbumPhotos (albumId: number): Observable<AlbumPhotos[]> {
    return this.http.get<AlbumPhotos[]>(`${this.dbUrl}/${albumId}/photos`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching albums:', error);
        return of();
      })
    );
  }
}
