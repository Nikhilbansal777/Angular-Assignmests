import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) {
    console.log(router.url);
    
  }

  sendRouteParams() {
    this.router.navigate(['/routing/params/3'])
  }
}
