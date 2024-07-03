import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductsList(): Observable<any> {
    return this.http.get("https://dummyjson.com/products/category/mens-shoes") as Observable<any>;
  }

  getDogBreeds() {
    return this.http.get("https://dog.ceo/api/breeds/list/all")
  }

  getDogImages(name: string) {
    return this.http.get(`https://dog.ceo/api/breed/${name}/images/random`)
  }
}
