import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { user } from 'src/app/userInterface';
import { DyanmicNotificationComponent } from './dyanmic-notification/dyanmic-notification.component';

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

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;;


  loader = false;
  data: boolean = false;
  id: any;
  userForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.getDogsData();
    this.getUsers();
  }
  isEdit = false;
  userInfo: Array<user> = [];
  getUsers() {
    this.productService.getUser().pipe(catchError(err => {
      return throwError(() => err);
    })).subscribe((res: user[]) => {
      this.userInfo = res;
      this.loader = true;
    });
  }

  addEditUser() {
    if (this.isEdit) {
      this.productService.editUser(this.userForm.value as user, this.id).pipe(catchError(err => {
        return throwError(() => err);
      })).subscribe((res) => {
        this.data = false;
        this.addDynamicComponent("User Edited successfully");
        this.getUsers();
      });

    } else {
      this.productService.addUser(this.userForm.value as user).pipe(catchError(err => {
        return throwError(() => err);
      })).subscribe((res) => {
        this.data = false;
        this.addDynamicComponent("User Added successfully");
        this.getUsers();
        
      });
    }
  }

  addDynamicComponent(message: string) {
    const component = this.container.createComponent(DyanmicNotificationComponent);
    component.instance.editUserSuccess = message;
  }

  get username() {
    return this.userForm.get("username");
  }

  get email() {
    return this.userForm.get("email");
  }

  get password() {
    return this.userForm.get("password");
  }

  get confirmPassword() {
    return this.userForm.get("confirmPassword");
  }

  get gender() {
    return this.userForm.get("gender");
  }

  showAddEdit() {
    this.data = true;
  }

  showTableData() {
    this.data = false;
  }

  editUser(item: user) {
    this.isEdit = true;
    this.data = true;
    this.id = item.id;
    this.userForm.setValue({
      username: item.username,
      email: item.email,
      password: item.password,
      confirmPassword: item.confirmPassword,
      gender: item.gender
    });
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
    // console.log(images);
    this.images = images.map((image: any) => image.message);
    // console.log(this.images);
  }
}
