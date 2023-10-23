import { Component } from '@angular/core';
import { Product } from '../Model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  ListProduct: Product[] = [];
  constructor(private productService: ProductService) { } 

  ngOnInit(): void {
    this.ListProduct = this.productService.getAllProducts();   }
    
    
  calculateProducts(libelle: string): void {
      const count = this.productService.getNbProductsByLibelle(libelle);
      alert(`Nombre de produits avec le libellé "${libelle}": ${count}`);
    }
    
}
