import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dburl: string = "http://localhost:3000/products";

  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.dburl);
    return await data.json() ??  [];
  }

  async updateProduct(product: Product): Promise<Product> {
    const response = await fetch(`${this.dburl}/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    return await response.json();
  }
}
