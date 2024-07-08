import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductsList(): Observable<any> {
    return this.http.get("https://dummyjson.com/products/category/mens-shoes") as Observable<any>;
  }

  getDogBreeds() {
    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }

  getDogImages(name: string) {
    return this.http.get(`https://dog.ceo/api/breed/${name}/images/random`);
  }

  addUser(user: user): Observable<user> {
    return this.http.post('http://localhost:3000/users', user) as Observable<user>;
  }

  editUser(user: user, id: any): Observable<user> {
    console.log(user);
    
    return this.http.put(`http://localhost:3000/users/${id}`, user) as Observable<user>;
  }

  getUser(): Observable<Array<user>> {
    return this.http.get('http://localhost:3000/users') as Observable<Array<user>>;
  }
}
