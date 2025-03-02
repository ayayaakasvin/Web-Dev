import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { CommonModule } from '@angular/common';
import { Album } from '../album';
import { AlbumContainerComponent } from "../album-container/album-container.component";
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, AlbumContainerComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  storage: StorageService = inject(StorageService);
  communication: CommunicationService = inject(CommunicationService);
  albums: Album[] = [];
  filteredAlbums: Album[] = [];

  constructor() {
    console.log("Component created!")
  }

  ngOnInit(): void {
    this.communication.message$.subscribe(
      (msgAlbum) => {
        console.log("Got message", msgAlbum)
        this.updateAlbum(msgAlbum);
      }
    )
    this.storage.getAlbums().subscribe(
      (albums) => {
        console.log("fetching")
        this.albums = albums;
        this.filteredAlbums = albums
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    )
  }

  deleteAlbum (albumId: number) {
    this.filteredAlbums = this.filteredAlbums.filter((album) => album.id != albumId)
  }

  updateAlbum(updatedAlbum: Album) {
    const index = this.filteredAlbums.findIndex(album => album.id === updatedAlbum.id);
    if (index !== -1) {
      this.filteredAlbums[index] = updatedAlbum;
    }
  }
}
