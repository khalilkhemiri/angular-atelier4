import { Injectable } from '@angular/core';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products: Product[] = [
    { id: 1, code: 127, libelle: "PC", prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: "TV", prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 129, libelle: "Table", prixunitaire: 200, tauxTva: 30 },
    { id: 4, code: 129, libelle: "Table", prixunitaire: 300, tauxTva: 40 },
    { id: 5, code: 129, libelle: "Table", prixunitaire: 200, tauxTva: 30 }
  ];

  getAllProducts(): Product[] {
    return this.Products;
  }
  getNbProductsByLibelle(libelle:string){
    return this.Products.filter(Product=>Product.libelle==libelle).length;
  }

  constructor() { }
}
