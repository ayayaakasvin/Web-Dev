import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-container',
  imports: [RouterModule],
  templateUrl: './album-container.component.html',
  styleUrl: './album-container.component.css'
})
export class AlbumContainerComponent {
  @Input() album!:Album;
  @Output() deleteAlbum: EventEmitter<number> = new EventEmitter<number>;

  deleteEmitter(id: number) {
    console.log("delete album | id:" + id)
    this.deleteAlbum.emit(id)
  }
}
