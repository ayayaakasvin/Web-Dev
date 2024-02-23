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
  filteredProducts: Product[] = [];
  categories: string[] = [];

  storage: StorageService = inject(StorageService);

  constructor() {
    this.storage.getAllProducts().then((prods: Product[]) => {
      this.products = prods
      this.filteredProducts = this.products;
      this.fetchCategories(prods);
    });
  }

  filterResults(categoryNaming: string) {
    if (!categoryNaming) {
      this.filteredProducts = this.products;
      return;
    }
  
    this.filteredProducts = this.products.filter(
      prod => prod?.category?.toLowerCase().includes(categoryNaming.toLowerCase())
    );
  }

  fetchCategories(prods: Product[]) {
    this.categories = [...new Set(prods.map(prod => prod.category))];
  }

  removeProduct (prod: Product) {
    this.products = this.products.filter(p => p != prod)
    this.filteredProducts = this.filteredProducts.filter(p => p != prod)
  }

  incTheLikeCount(prod: Product) {
    prod.likes += 1;
    this.storage.updateProduct(prod).then(updatedProd => {
      const index = this.products.findIndex(p => p.name === updatedProd.name);
      if (index !== -1) {
        this.products[index] = updatedProd;
        this.filteredProducts = [...this.products];
      }
    });
  }
}
