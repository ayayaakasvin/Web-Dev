import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url: string = "http://localhost:3000/products";

  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return await data.json() ??  [];
  }
}
