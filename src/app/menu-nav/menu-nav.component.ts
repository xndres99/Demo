import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {

    constructor(private router:Router){

    }
    gratis(){
      this.router.navigate([""]);
    }
    nomral(){
      this.router.navigate(["normal"]);
    }
    pro(){
      this.router.navigate(["pro"]);
    }
}
