import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AlbumPhotos } from '../album-photos';
import { StorageService } from '../storage.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LinkerComponent } from "../linker/linker.component";

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule, LinkerComponent],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!: AlbumPhotos[];
  albumId: number;
  
  constructor(private storage: StorageService, private route: ActivatedRoute) {
    this.albumId = Number(this.route.snapshot.params["id"])
  }

  ngOnInit(): void {
    this.storage.getAlbumPhotos(this.albumId)
    .subscribe((photos) => {
      this.photos = photos;
      console.log("fetched")
    },
    (error) => {
      console.error("Error during fetching")
      console.error(error)
    }
  )}
}
