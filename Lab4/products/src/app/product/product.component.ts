import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input() product!: Product;

    shareOnWhatsApp (productLink: string) {
      const message = `Check this out: ${productLink}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    shareOnTelegram (productLink: string) {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
      window.open(telegramUrl, '_blank');
    }
}