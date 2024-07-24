import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError, throwError } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'productList';
  searchKey: any;
  productsList: any = [];
  flag = false;
  titlfe = 123;
  constructor(private productService: ProductService, private sanitiser: DomSanitizer) { }

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
      // console.log(res);
      this.productsList = res.products;
      // console.log(this.productsList);
    });
  }
  search(searchtxt: any) {
    this.searchKey = this.sanitiser.bypassSecurityTrustHtml(searchtxt);
  }
}
