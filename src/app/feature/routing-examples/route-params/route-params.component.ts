import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css']
})
export class RouteParamsComponent {
  params: any;
  queryParams: any;
  constructor(private route: ActivatedRoute) {
    //  this.params = route.snapshot.paramMap.get("id");
    route.paramMap.subscribe(param => {
      this.params = param.get("id") 
    })
    route.queryParamMap.subscribe(param => {
      this.queryParams = param.get('flag')
    })
  }
}
