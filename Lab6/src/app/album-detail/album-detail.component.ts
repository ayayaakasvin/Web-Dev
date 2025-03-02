import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { StorageService } from '../storage.service';
import { Album } from '../album';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from './../communication.service';
import { LinkerComponent } from "../linker/linker.component";

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule, FormsModule, LinkerComponent],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  storage: StorageService = inject(StorageService);
  communication: CommunicationService = inject(CommunicationService);
  route: ActivatedRoute = inject(ActivatedRoute);
  @Output() saveTaskEmitter: EventEmitter<Album> = new EventEmitter<Album>()
  album!: Album;
  albumTitle: string = "";

  constructor() {}

  ngOnInit(): void {
    let albumId = Number(this.route.snapshot.params["id"])
    this.storage.getAlbum(albumId).subscribe(
      (album) => {
        console.log("Succesfully fetched");
        this.album = album;
        this.albumTitle = album.title;
      },
      (error) => {
        console.error("Error fetching album by id: " + albumId);
        console.error(error)
      }
    );
  }

  saveTitle (): void {
    console.log("sent message to grandparent", this.album)
    this.communication.sendMessage(this.album)
    this.albumTitle = this.album.title
  }

  returnTitle (): void {
    this.album.title = this.albumTitle
  }
}