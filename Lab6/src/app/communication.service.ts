import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSource = new Subject<Album>
  message$ = this.messageSource.asObservable()

  constructor() { }

  sendMessage (message: Album) {
    this.messageSource.next(message);
  }
}
