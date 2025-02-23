import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductComponent } from "./product/product.component";
import { Product } from './product';
import { StorageService } from './storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'products';
  headerInput:string = "Product Angular App!"
  author = {name:"ayayaakasvin", link:"https://github.com/ayayaakasvin"};
  products: Product[] = []

  storage: StorageService = inject(StorageService);

  constructor() {
    this.storage.getAllProducts().then((prods: Product[]) => this.products = prods);
  }
}
