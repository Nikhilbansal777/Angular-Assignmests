import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'productList';
  productsList: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    localStorage.setItem("token", "nikhil");
  }

  public getProducts() {
    this.productService.getProductsList().pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    ).subscribe((res) => {
      console.log(res);
      this.productsList = res.products;
      console.log(this.productsList);
    });
  }
}
