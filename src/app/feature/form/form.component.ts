import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output('sendDataToParent') loginInfo = new EventEmitter<{ username: string, password: string; }>();
  @Input("flag") flagToCheckIfLoggedIn!: boolean;
  username: string = "";
  password: string = "";
  fields = [
    { label: "User Name", key: "username", value: "" },
    { label: "User Email", key: "useremail", value: "" },
    { label: "Password", key: 'password', value: "" },
    { label: "Confirm password", key: 'confirmPassword', value: "" },
    { label: "Role", key: 'role', value: "" },
    { label: "Status", key: 'status', value: "" },
  ];
  ngOnInit(): void {

  }

  onSubmit() {
    let fields = this.fields.filter(field => field.value).map((field) => ({ [field.key]: field.value }));
    console.log(fields);

  }

  buttonDisable() {
    if (this.username == "" || this.password == "") {
      return true;
    } 
      return false;

  }

  submit() {
    console.log(this.username, this.password);
    let baseObj: any = {
      getUsername: function () {
        return this.username;
      },
      getPassword: function () {
        return this.password;
      }
    };

    // Create a new object and set its prototype to baseObj

    // let baseObj = {}
    let obj = Object.create(baseObj);
    obj.username = this.username
    obj.password = this.password
    console.log(obj);

    this.loginInfo.emit(obj)
  }
}
