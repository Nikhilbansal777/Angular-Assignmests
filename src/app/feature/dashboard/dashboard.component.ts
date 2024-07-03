import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input('logs') logss: any;
  @Input() log1: any;

  isLoggedinFlag = false;
  loginData: { username: string, password: string; } = { username: "", password: "" };

  @Output('customEvent') events = new EventEmitter<any>();

  images: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getDogsData();
  }

  public sendDataToParent() {
    this.events.emit(this.log1);
  }

  recieveFormData(loginInfo: { username: string, password: string; }) {
    console.log(loginInfo);
    this.loginData = loginInfo;
  }

  isLoggedin() {
    if (this.loginData.username === "nikhil") {
      this.isLoggedinFlag = true;
    }
  }

  async getDogsData() {
    let breeds: any = await this.productService.getDogBreeds().toPromise();
    let breedKeys = Object.keys(breeds.message);
    let a = breedKeys.map((breed) => this.productService.getDogImages(breed).toPromise());
    let images = await Promise.all(a);
    console.log(images);
    this.images = images.map((image: any) => image.message);
    console.log(this.images);
  }
}
