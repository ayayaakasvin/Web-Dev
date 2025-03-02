import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LinkerComponent } from "../linker/linker.component";

@Component({
  selector: 'app-about',
  imports: [RouterModule, LinkerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  author:{username:string, link: string} = {
    username: "ayayaakasvin",
    link: "https://github.com/ayayaakasvin"
  };
}
